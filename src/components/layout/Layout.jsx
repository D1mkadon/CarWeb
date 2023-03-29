import Meta from "@/seo/Meta";
import theme from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import CartProvider from "../../../context/CartContext";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children, title }) => {
  return (
    <Meta title={title}>
     
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <div className="wrapper">
              <Header />

              <main style={{ marginTop: "132px" }}> {children}</main>

              <Footer />
            </div>
          </CssBaseline>
        </ThemeProvider>
     
    </Meta>
  );
};

export default Layout;
