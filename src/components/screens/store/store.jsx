import CarItem from "./CarItem";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import styles from "./store.module.scss";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
const Store = ({ cars }) => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [AddedToCartMSG, setAddedToCartMSG] = useState(false);
  const handleAddToCart = (car) => {
    setCart(() => [...cart, car]);
  };
  useEffect(() => {
    setShow(!show);
  }, [cars]);
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAddedToCartMSG(false);
  };
  const handleAddedToCartMSG = () => {
    setAddedToCartMSG(true);
  };
  return (
    <div className={styles.store}>
      {cars.length ? (
        cars.map((car, id) => (
          <CSSTransition key={id} in={show} timeout={500} classNames={"item"}>
            <CarItem
              AddedToCartMSG={handleAddedToCartMSG}
              car={car}
              handleAddToCart={handleAddToCart}
            />
          </CSSTransition>
        ))
      ) : (
        <div> cars not found</div>
      )}
      <Snackbar
        open={AddedToCartMSG}
        autoHideDuration={1000}
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
    </div>
  );
};

export default Store;
