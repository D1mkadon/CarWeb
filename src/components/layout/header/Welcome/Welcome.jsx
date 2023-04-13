import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import styles from "./Welcome.module.scss";
import { Button, Paper } from "@mui/material";
import Link from "next/link";
import style from "../header.module.scss";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { authContext } from "@/lib/store/auth-context";

export default function Welcome() {
  const { data: session, status } = useSession();
  const [selectedImage, setSelectedImage] = useState(null);
  const { pathname } = useRouter();
  const { user, logout } = useContext(authContext);

  if (status === "authenticated") {
    return (
      <div className={styles.welcDiv}>
        <p> {session.user.name}</p>
        <Image
          src={session.user.image}
          style={{ borderRadius: "50%" }}
          alt=""
          width={30}
          height={30}
        />

        <Button variant="outlined" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    );
  }
  if (user) {
    return (
      <div className={styles.welcDiv}>
        <Link
          className={pathname === "/profile" ? style.active : ""}
          href={"/profile"}
        >
          {user.email}
        </Link>

        <Button variant="outlined" onClick={logout}>
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
