import Layout from "@/components/layout/Layout";
import CartItems from "@/components/screens/Cart/CartItems";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Layout title="Cart">
      <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
        <motion.div
          initial={{
            opacity: 0,
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
        >
          <p style={{ marginTop: "20px" }}>
            {cart?.cartItems?.length || 0} Items in Cart
          </p>
          {cart?.cartItems?.length <= 0 ? (
            <p> Cart is empty</p>
          ) : (
            cart?.cartItems?.map((e) => <CartItems key={e.id} car={e} />)
          )}
        </motion.div>
      </Container>
    </Layout>
  );
};

export default Cart;
