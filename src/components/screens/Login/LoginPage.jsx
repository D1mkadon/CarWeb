import { Button, Container, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import styles from "../Register/RegisterPage.module.scss";
import { loginValidation, passwordValidation } from "@/validation/validation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import SocialsLogIn from "./Socials/socialsLogIn";

const LoginPage = () => {
  const { register, handleSubmit, watch, control, reset, formState } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const { errors } = useFormState({ control });
  const onSubmit = async (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ login: "", password: "" });
    }
  }, [formState, reset]);
  const { data: session, status } = useSession();
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
        <Button disabled type="submit" variant="outlined">
          Log in
        </Button>
      </form>
      <SocialsLogIn />
    </Container>
  );
};

export default LoginPage;
