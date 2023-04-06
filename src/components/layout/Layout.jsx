import Meta from "@/seo/Meta";
import theme from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children, title, session }) => {
  return (
    <Meta title={title}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="wrapper">
            <Header />
            <main className={styles.main}> {children}</main>
            <Footer />
          </div>
        </CssBaseline>
      </ThemeProvider>
    </Meta>
  );
};

export default Layout;
