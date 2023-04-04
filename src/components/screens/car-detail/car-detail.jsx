import Layout from "@/components/layout/Layout";
import { Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "./carDetail.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import CartContext from "../../../../context/CartContext";
const CarDetail = ({ car }) => {
  const [AddedToCartMSG, setAddedToCartMSG] = useState(false);
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart({
      id: car.id,
      name: car.name,
      price: car.price,
      image: car.image,
    });
    setAddedToCartMSG(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAddedToCartMSG(false);
  };
  return (
    <Layout title={car.name}>
      <Container className={styles.cont} maxWidth="xl">
        <Link className={styles.back} href={"./"}>
          <ArrowBackIcon sx={{ position: "relative", top: 4 }} />
          back
        </Link>
        <div className={styles.carBlock}>
          <motion.div
            className={styles.ImageDiv}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <Image
              className={styles.Image}
              src={car.image}
              alt={car.name}
              width={600}
              height={400}
            />
          </motion.div>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className={styles.RightBlock}
          >
            <h2>{car.name}</h2>
            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(car.price)}
            </p>
            <AddShoppingCartIcon
              onClick={addToCartHandler}
              sx={{
                position: "relative",
                top: "0.5vh",
                left: "2vh",
                cursor: "pointer",
                "&:hover": {
                  color: "#7fffd4",
                },
              }}
            />
          </motion.div>
        </div>
        <Snackbar
          open={AddedToCartMSG}
          autoHideDuration={300}
          onClose={handleCloseAlert}
        >
          <Alert
            sx={{
              position: "fixed",
              bottom: "15px",
              left: "15px",
              textAlign: "left",
              width: "20%",
            }}
            variant="filled"
            severity="success"
          >
            <AlertTitle>Success</AlertTitle>
            Item Added to cart
          </Alert>
        </Snackbar>
      </Container>
    </Layout>
  );
};

export default CarDetail;
