import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { CartProvider } from "../../context/CartContext";
import { UserProvider } from "../../context/UserContext";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps, session }) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <AnimatePresence mode="wait">
        <UserProvider>
          <CartProvider>
            <Component {...pageProps} key={router.route} />
          </CartProvider>
        </UserProvider>
      </AnimatePresence>
    </SessionProvider>
  );
}
