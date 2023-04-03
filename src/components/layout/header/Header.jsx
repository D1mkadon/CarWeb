import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import style from "./header.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import CartContext from "../../../../context/CartContext";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const { cart } = useContext(CartContext);
  const { pathname } = useRouter();
  const [btn, setBtn] = useState();
  return (
    <div className={style.div}>
      <header
        className={
          btn ? [style.header, style.activeHeader].join(" ") : [style.header]
        }
      >
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
        <div className={style.bars} onClick={() => setBtn(!btn)}>
          {btn ? <CloseIcon size={"25px"} /> : <MenuIcon size={"25px"} />}
        </div>
      </header>
    </div>
  );
};

export default Header;