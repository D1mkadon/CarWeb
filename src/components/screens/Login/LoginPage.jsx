import { Button, Container, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import styles from "../Register/RegisterPage.module.scss";
import { emailValidation, passwordValidation } from "@/validation/validation";
import Link from "next/link";
import SocialsLogIn from "./Socials/socialsLogIn";
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
  const [open, setOpen] = useState({
    open: false,
    type: "success",
    text: "",
  });
  const { user, logInUser } = useContext(authContext);
  const router = useRouter();
  const { errors } = useFormState({ control });

  const onSubmit = async (inputs) => {
    try {
      await logInUser(inputs.email, inputs.password);
      setOpen({ type: "success", text: "Approved registration", open: true });
    } catch (error) {
      console.log(error);
    }
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
  } else {
    router.push("/profile", undefined, { shallow: true });
  }
};

export default LoginPage;
