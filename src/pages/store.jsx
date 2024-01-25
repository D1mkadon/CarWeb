import Store from "@/components/screens/store/store";
import Container from "@mui/material/Container";
import { CarService } from "@/service/service";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Sort from "@/components/screens/store/Sort";
import { motion } from "framer-motion";
const MAX_WIDTH = "xl";
const storePage = ({ cars }) => {
  const [data, setData] = useState(cars);
  const sortCarsByDefault = () => {
    if (data === cars) return;
    setData(cars);
  };

  const sortCarsByLowPrice = () => {
    const temp = [...cars];
    temp.sort((a, b) => (a.price > b.price ? 1 : -1));
    setData(temp);
  };
  const sortCarsByHighPrice = () => {
    const temp = [...cars];
    temp.sort((a, b) => (a.price < b.price ? 1 : -1));
    setData(temp);
  };

  return (
    <Layout title="Store">
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
        <Container sx={{ marginTop: "10%" }} maxWidth={MAX_WIDTH}>
          <Sort
            sortByPrice={sortCarsByLowPrice}
            sortByHighPrice={sortCarsByHighPrice}
            sortByDefault={sortCarsByDefault}
          />
          <Store cars={data} />
        </Container>
      </motion.div>
    </Layout>
  );
};
export async function getStaticProps() {
  const cars = await CarService.getAll();
  return {
    props: { cars },
    revalidate: 60, // will be passed to the page component as props
  };
}

export default storePage;
