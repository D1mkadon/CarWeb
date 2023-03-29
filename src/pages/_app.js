import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { CartProvider } from "../../context/CartContext";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <CartProvider>
        <Component {...pageProps} key={router.route} />
      </CartProvider>
    </AnimatePresence>
  );
}
