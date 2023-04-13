import { Button, Container, TextField } from "@mui/material";
import Layout from "@/components/layout/Layout";
import styles from "./Profile.module.scss";
const ProfileNotFound = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>User not found...</h1>
      <div>
        <Button href="/login" variant="outlined">
          Log In
        </Button>
      </div>
    </Container>
  );
};

export default ProfileNotFound;
