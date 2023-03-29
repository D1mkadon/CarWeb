import styles from "./Home.module.scss";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button, Divider, Paper } from "@mui/material";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

const HomePage = () => {
  return (
    <Layout title="Home">
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
        <div className={styles.Background}>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.75,
            }}
            className={styles.MainImage}
          >
            <Button
              href="/store"
              sx={{ minWidth: 150 }}
              color="secondary"
              variant="outlined"
            >
              to the store
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <Paper
        sx={{
          backgroundColor: "#1c1c1c",
          boxShadow: " 2px 2px 4px 2px black",
          display: "flex",
        }}
        className={styles.BlockSecondImage}
      >
        <div className={styles.SmallBackground}>
          <div className={styles.SecondImage}>
            <div className={styles.LeftSmallBlocks}>
              <h2 className={styles.LeftH2}> AMG GT S </h2>
              <Divider />
              <h4 className={styles.LeftH4}>Assembly: Sindelfingen, Germany</h4>
              <p className={styles.leftP}>
                2015–2022 (AMG GT Gen.1) 2021–present (AMG GT Black Series)
              </p>
            </div>
            <div className={styles.LeftSmallBlocks}>
              <Divider />
              <h4 className={styles.LeftH4}>GT Top speed</h4>
              <p className={styles.leftP}>307 km/h (191 mph)</p>
            </div>
            <div className={styles.LeftSmallBlocks}>
              <h2 className={styles.LeftH2}>$110.555,00</h2>
              <Divider />
              <h4 className={styles.LeftH4}>Year of introduction</h4>
              <p className={styles.leftP}>2015</p>
            </div>
          </div>
        </div>
        <div className={styles.RightBlock}>
          <h2 className={styles.LeftH2}>Description</h2>
          <Divider />
          <p className={styles.leftP} style={{ margin: "5% 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            odio excepturi laudantium ad commodi obcaecati repudiandae quia
            tenetur quibusdam at?
          </p>
          <p className={styles.leftP} style={{ marginTop: "16%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={styles.rightSmallDiv}>
            <CardTravelIcon sx={{ fontSize: 30 }} />
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={styles.rightSmallDiv}>
            <ElectricCarIcon sx={{ fontSize: 30 }} />
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div></div>
        </div>
      </Paper>
    </Layout>
  );
};

export default HomePage;
