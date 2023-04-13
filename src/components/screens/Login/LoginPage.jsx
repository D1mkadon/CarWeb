import { Alert, Button, Container, Snackbar, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import styles from "../Register/RegisterPage.module.scss";
import {
  emailValidation,
  loginValidation,
  passwordValidation,
} from "@/validation/validation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import SocialsLogIn from "./Socials/socialsLogIn";

// import UsersContext from "../../../../context/UserContext";
import { useRouter } from "next/router";
import AlertBox from "@/components/Alert/AlertBox";
import { authContext } from "@/lib/store/auth-context";

const LoginPage = () => {
  const { handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // const { handleLogin, isLogin, handleAlert } = useContext(UsersContext);
  const [open, setOpen] = useState({
    open: false,
    type: "success",
    text: "",
  });
  const { user, logInUser } = useContext(authContext);
  const router = useRouter();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ open: false, type: open.type, text: open.text });
  };
  const { errors } = useFormState({ control });
  const onSubmit = async (inputs) => {
    await logInUser(inputs.email, inputs.password)
      .then((userCredential) => {
        setOpen({
          open: true,
          type: "success",
          text: "Approved registration",
        });
        router.push("/profile", undefined, { shallow: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [formState, reset]);
  if (!user) {
    return (
      <Container
        sx={{ display: "flex" }}
        className={styles.Container}
        maxWidth="xl"
      >
        <p> Login </p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={emailValidation}
            render={({ field }) => (
              <TextField
                color="primary"
                id="form-email"
                label="Email"
                variant="outlined"
                name="email"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={passwordValidation}
            render={({ field }) => (
              <TextField
                color="primary"
                id="form-password"
                type="password"
                label="Password"
                variant="outlined"
                name="password"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
              />
            )}
          />
          <Link className={styles.LoginLink} href={"/register"}>
            Don`t have an Account yet?
          </Link>
          <Button type="submit" variant="outlined">
            Log in
          </Button>
        </form>
        <SocialsLogIn />

        <AlertBox open={open.open} text={open.text} type={open.type} />
      </Container>
    );
  }
};

export default LoginPage;
