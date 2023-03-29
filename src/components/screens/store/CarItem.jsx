import Image from "next/image";
import Link from "next/link";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "./CarItem.module.scss";
import { useContext } from "react";
import CartContext from "../../../../context/CartContext";
const CarItem = ({ car, AddedToCartMSG }) => {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart({
      id: car.id,
      name: car.name,
      price: car.price,
      image: car.image,
    });
    AddedToCartMSG();
  };
  return (
    <div className={styles.CarItem}>
      <Link className={styles.cardLink} href={`/store/${car.id}`}>
        <Image
          className={styles.image}
          src={car.image}
          alt={car.name}
          width={300}
          height={200}
          style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
        />
      </Link>
      <div className={styles.textDiv}>
        <h3>{car.name}</h3>
        <p className={styles.currency}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}

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
        </p>
      </div>
    </div>
  );
};

export default CarItem;
