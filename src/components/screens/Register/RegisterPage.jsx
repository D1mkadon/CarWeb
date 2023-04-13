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
import { useRouter } from "next/router";
import { authContext } from "@/lib/store/auth-context";
import { updateProfile } from "firebase/auth";
const RegisterPage = () => {
  const { user, createUser } = useContext(authContext);
  // const { addUsers } = useContext(UsersContext);
  const router = useRouter();
  const {
    register,
    setError,
    handleSubmit,
    clearErrors,
    watch,
    control,
    reset,
    formState,
    error,
  } = useForm({
    defaultValues: {
      UserName: "",
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
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: data.name });
        router.push("/profile", undefined, { shallow: true });
        setOpen({
          open: true,
          type: "success",
          text: "Approved registration",
        });
      })
      .catch((error) => {
        setError("email", { message: "email already exist" });
        if (error.message === "Firebase: Error (auth/email-already-in-use)") {
          console.log("error dada");
        }
        console.log(error);
      });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ UserName: "", email: "", password: "", name: "" });
    }
  }, [formState, reset]);
  if (user) {
    router.push("/profile", undefined, { shallow: true });
    // return <p>redirect</p>;
  }

  return (
    <>
      <Container
        sx={{ display: "flex" }}
        className={styles.Container}
        maxWidth="xl"
      >
        <p> Register </p>
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
            name="UserName"
            rules={loginValidation}
            control={control}
            render={({ field }) => (
              <TextField
                color="primary"
                id="form-UserName"
                label="User name"
                variant="outlined"
                name="UserName"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={!!errors.UserName?.message}
                helperText={errors.UserName?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={emailValidation}
            render={({ field }) => (
              <TextField
                onClick={() => clearErrors("email")}
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
