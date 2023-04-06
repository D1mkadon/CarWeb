"use client";
import { Controller, useForm, useFormState } from "react-hook-form";
import { Button, Container, TextField } from "@mui/material";
import styles from "./RegisterPage.module.scss";
import {
  emailValidation,
  loginValidation,
  nameValidation,
  passwordValidation,
} from "@/validation/validation";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
// import { useContext } from "react";
// import UsersContext from "../../../../context/UserContext";

const RegisterPage = () => {
  // const { addUsers } = useContext(UsersContext);
  const { register, handleSubmit, watch, control, reset, formState } = useForm({
    defaultValues: {
      Login: "",
      email: "",
      password: "",
      name: "",
    },
  });
  const { errors } = useFormState({ control });
  const onSubmit = (data) => {
    console.log(data);
    // addUsers({
    //   name: data.name,
    //   login: data.Login,
    //   password: data.password,
    //   email: data.email,
    // });
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ Login: "", email: "", password: "" });
    }
  }, [formState, reset]);
  return (
    <>
      <Container className={styles.Container} maxWidth="xl">
        <p> Register </p>
        <p> Do not provide your real info! It will be in open source </p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            rules={nameValidation}
            control={control}
            render={({ field }) => (
              <TextField
                color="primary"
                id="form-name"
                label="Name"
                variant="outlined"
                name="Name"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={!!errors.name?.message}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="Login"
            rules={loginValidation}
            control={control}
            render={({ field }) => (
              <TextField
                color="primary"
                id="form-login"
                label="Login"
                variant="outlined"
                name="Login"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={!!errors.Login?.message}
                helperText={errors.Login?.message}
              />
            )}
          />
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
          <Link className={styles.LoginLink} href={"/login"}>
            Already have an Account?
          </Link>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default RegisterPage;
