import Store from "@/components/screens/store/store";
import Container from "@mui/material/Container";
import { CarService } from "@/service/service";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Sort from "@/components/screens/store/Sort";
import { motion } from "framer-motion";
const storePage = ({ cars }) => {
  const [data, setData] = useState(cars);
  const sortByDefault = () => {
    setData(cars);
  };

  const sortByLowPrice = () => {
    const temp = JSON.parse(JSON.stringify(cars));
    temp.sort((a, b) => (a.price > b.price ? 1 : -1));
    setData(temp);
  };
  const sortByHighPrice = () => {
    const temp = JSON.parse(JSON.stringify(cars));
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
        <Container maxWidth="xl">
          <Sort
            sortByPrice={sortByLowPrice}
            sortByHighPrice={sortByHighPrice}
            sortByDefault={sortByDefault}
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
