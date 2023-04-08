import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import styles from "./Welcome.module.scss";
import { Button, Paper } from "@mui/material";
import Link from "next/link";
import style from "../header.module.scss";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import UsersContext from "../../../../../context/UserContext";
export default function Welcome() {
  const { data: session, status } = useSession();
  const [selectedImage, setSelectedImage] = useState(null);
  const { pathname } = useRouter();
  const { isLogin, handleLogOut } = useContext(UsersContext);
  useEffect(() => {
    setSelectedImage(isLogin?.image);
  }, []);

  if (status === "authenticated") {
    return (
      <div className={styles.welcDiv}>
        <p> {session.user.name}</p>
        <Image src={session.user.image} alt="" width={30} height={30} />

        <Button variant="outlined" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    );
  }
  if (isLogin) {
    return (
      <div className={styles.welcDiv}>
        <Link
          className={pathname === "/profile" ? style.active : ""}
          href={"/profile"}
        >
          {isLogin.name}
        </Link>

        <Button variant="outlined" onClick={handleLogOut}>
          log out
        </Button>
      </div>
    );
  }
  return (
    <Link href="/login" className={pathname === "/login" ? style.active : ""}>
      Login
    </Link>
  );
}
