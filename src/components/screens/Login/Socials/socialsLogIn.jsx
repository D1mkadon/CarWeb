import { Button } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import styles from "./socialsLogIn.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { FaDiscord } from "react-icons/fa";
export default function SocialsLogIn() {
  const { data: session } = useSession();
  const handleClickDiscord = async () => {
    await signIn("discord", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  const handleClickGitHub = async () => {
    await signIn("github", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  const handleClickGoogle = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  if (session) {
    return null;
  }
  return (
    <div className={styles.gitBlock}>
      <Button
        className={styles.button}
        variant="outlined"
        onClick={handleClickGoogle}
      >
        Sign in with Google <GoogleIcon />
      </Button>
      <Button
        className={styles.button}
        variant="outlined"
        onClick={handleClickGitHub}
      >
        Github log in <GitHubIcon />
      </Button>
      <Button
        className={styles.button}
        variant="outlined"
        onClick={handleClickDiscord}
      >
        Discord log in <FaDiscord style={{ width: 20, height: 20 }} />
      </Button>
    </div>
  );
}
