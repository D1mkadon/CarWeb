import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FC } from "react";
import style from "./header.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import { Divider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import CartContext from "../../../../context/CartContext";
const Header: FC = () => {
  const { cart } = useContext(CartContext);
  const { pathname } = useRouter();
  return (
    <div className={style.div}>
      <header className={style.header}>
        <div className={style.logo}></div>
        <Link href="/">
          <HomeIcon sx={{ position: "relative", top: 4 }} />
          DIM CAR
        </Link>
        <Link href="/" className={pathname === "/" ? style.active : ""}>
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? style.active : ""}
        >
          About
        </Link>
        <Link
          href="/store"
          className={pathname === "/store" ? style.active : ""}
        >
          Store
        </Link>
        <div className={style.cartBlock}>
          <Link href="/Cart">
            <div>
              <ShoppingCartIcon
                sx={{
                  fontSize: "28px",
                  "&:hover": {
                    color: "aquamarine",
                  },
                }}
              />
              <span className={style.cartCircle}>
                {cart?.cartItems?.length || 0}
              </span>
            </div>
          </Link>
        </div>
      </header>
      <Divider sx={{ margin: "2" }} />
    </div>
  );
};

export default Header;
