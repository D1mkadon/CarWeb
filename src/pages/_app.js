import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { CartProvider } from "../../context/CartContext";
import { SessionProvider } from "next-auth/react";
import AuthContextProvider from "@/lib/store/auth-context";
export default function App({ Component, pageProps, session }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      <SessionProvider session={session}>
        <AnimatePresence mode="wait">
            <CartProvider>
              <Component {...pageProps} key={router.route} />
            </CartProvider>
        </AnimatePresence>
      </SessionProvider>
    </AuthContextProvider>
  );
}
