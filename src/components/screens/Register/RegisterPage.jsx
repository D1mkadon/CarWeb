"use client";
import { Controller, useForm, useFormState } from "react-hook-form";
import { Alert, Button, Container, Snackbar, TextField } from "@mui/material";
import styles from "./RegisterPage.module.scss";
import {
  emailValidation,
  loginValidation,
  nameValidation,
  passwordValidation,
} from "@/validation/validation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import UsersContext from "../../../../context/UserContext";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const { addUsers } = useContext(UsersContext);
  const router = useRouter();
  const { register, handleSubmit, watch, control, reset, formState, error } =
    useForm({
      defaultValues: {
        Login: "",
        email: "",
        password: "",
        name: "",
      },
    });
  const { errors } = useFormState({ control });
  const [open, setOpen] = useState({
    open: false,
    type: "success",
    text: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ open: false, type: open.type, text: open.text });
  };

  const onSubmit = (data) => {
    const localData = JSON.parse(localStorage.getItem("users"));

    if (!localData) {
      addUsers({
        name: data.name,
        login: data.Login,
        password: data.password,
        email: data.email,
      });

      setOpen({
        open: true,
        type: "success",
        text: "Approved registration",
      });
      router.push({ pathname: "/login" }, undefined, { shallow: true });

      setOpen({
        isOpen: true,
        isType: "success",
        isText: "Approved registration",
      });
    } else {
      const index = localData.findIndex((e) => e.email === data.email);
      if (index > -1) {
        return setOpen({
          open: true,
          type: "error",
          text: "This email already exist",
        });
      }
      console.log(data);
      addUsers({
        name: data.name,
        login: data.Login,
        password: data.password,
        email: data.email,
      });
      router.push({ pathname: "/login" }, undefined, { shallow: true });
      setOpen({
        open: true,
        type: "success",
        text: "Approved registration",
      });
    }
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ Login: "", email: "", password: "" });
    }
  }, [formState, reset]);
  return (
    <>
      <Container
        sx={{ display: "flex" }}
        className={styles.Container}
        maxWidth="xl"
      >
        <p> Register </p>
        <p> Do not provide your real info! It will be in open source </p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            // rules={nameValidation}
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
            // rules={loginValidation}
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
            // rules={passwordValidation}
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
        <Snackbar
          open={open.open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            variant="filled"
            onClose={handleClose}
            severity={open.type}
            sx={{ width: "100%" }}
          >
            {open.text}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default RegisterPage;
