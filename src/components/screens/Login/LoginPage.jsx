import { Alert, Button, Container, Snackbar, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import styles from "../Register/RegisterPage.module.scss";
import { loginValidation, passwordValidation } from "@/validation/validation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import SocialsLogIn from "./Socials/socialsLogIn";
import UsersContext from "../../../../context/UserContext";
import { useRouter } from "next/router";
import AlertBox from "@/components/Alert/AlertBox";

const LoginPage = () => {
  const { handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const { handleLogin, isLogin, handleAlert } = useContext(UsersContext);
  const [open, setOpen] = useState({
    open: false,
    type: "success",
    text: "",
  });
  const router = useRouter();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ open: false, type: open.type, text: open.text });
  };
  const { errors } = useFormState({ control });
  const onSubmit = async (inputs) => {
    const localData = JSON.parse(localStorage.getItem("users"));

    const LoginUser = localData?.find((e) => e.login === inputs.login);

    if (LoginUser && LoginUser.password === inputs.password) {
      setOpen({
        open: true,
        type: "success",
        text: "Approved login",
      });

      router.push({ pathname: "/" }, undefined, { shallow: true });
      handleLogin(LoginUser);
    } else {
      setOpen({
        open: true,
        type: "error",
        text: "Login or password is incorrect",
      });
    }
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ login: "", password: "" });
    }
  }, [formState, reset]);
  if (isLogin) {
    return <div>logged success</div>;
  }
  return (
    <Container
      sx={{ display: "flex" }}
      className={styles.Container}
      maxWidth="xl"
    >
      <p> login </p>
      <p> I have no a good backend for realizing log in </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="login"
          rules={loginValidation}
          control={control}
          render={({ field }) => (
            <TextField
              color="primary"
              id="form-login"
              label="Login"
              variant="outlined"
              name="login"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
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
      {/* <Snackbar open={open.open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={open.type}
          sx={{ width: "100%" }}
        >
          {open.text}
        </Alert>
      </Snackbar> */}
      <AlertBox open={open.open} text={open.text} type={open.type} />
    </Container>
  );
};

export default LoginPage;
