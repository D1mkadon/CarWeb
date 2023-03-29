import { Button } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import CartContext from "../../../../context/CartContext";
import styles from "./CartItems.module.scss";
import { motion } from "framer-motion";

const CartItems = ({ car }) => {
  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);

  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    addItemToCart(item);
  };
  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };
    if (newQty < 1) {
      return;
    }
    addItemToCart(item);
  };
  const { name, price, image, quantity } = car;
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.75,
      }}
      className={styles.cartItemBlock}
    >
      <Image
        width={300}
        height={200}
        src={car.image}
        alt={car.name}
        className={styles.image}
      />
      <div className={styles.CartTextBlock}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.totalPrice}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price * quantity)}
        </p>
        <div className={styles.parentButtons}>
          <Button
            onClick={() => increaseQty(car)}
            color="secondary"
            variant="outlined"
            className={styles.button}
          >
            +
          </Button>
          {quantity}
          <Button
            onClick={() => decreaseQty(car)}
            color="secondary"
            variant="outlined"
            className={styles.button}
          >
            -
          </Button>
        </div>
        <div className={styles.parentP}>
          <p className={styles.pricePOne}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
          <p className={styles.priceForOne}>price / for one</p>
        </div>
        <Button
          onClick={() => deleteItemFromCart(car?.id)}
          color="secondary"
          variant="outlined"
          className={styles.button}
        >
          remove
        </Button>
      </div>
    </motion.div>
  );
};

export default CartItems;
