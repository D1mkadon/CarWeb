import { Container } from "@mui/system";
import React from "react";
import styles from "./AboutUs.module.scss";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RecommendIcon from "@mui/icons-material/Recommend";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <>
      <div className={styles.Large}>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.75,
          }}
        >
          <h2 className={styles.h2}>About us.</h2>
        </motion.div>
      </div>
      <Divider sx={{ margin: " 0" }} />
      <Container
        sx={{
          display: "flex",
          marginTop: "10vh",
          gap: "35px",
          flexWrap: "wrap",
        }}
        maxWidth="xl"
      >
        <div className={styles.card}>
          <RecommendIcon color="secondary" sx={{ fontSize: 50 }} />
          <h3>Excellent Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            accusamus facere totam nesciunt explicabo rem nulla, quidem
            distinctio quasi vero.
          </p>
        </div>
        <div className={styles.card}>
          <TaskAltIcon color="secondary" sx={{ fontSize: 50 }} />
          <h3>Fast Response</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            dolorem doloremque impedit ipsam consequatur, at debitis eius enim
            a. Tenetur sint sit iure veritatis. Vero tempora consequatur
            voluptatibus eveniet ea.
          </p>
        </div>
        <div className={styles.card}>
          <AccessAlarmsIcon color="secondary" sx={{ fontSize: 50 }} />
          <h3>Time Saving</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            dolorem doloremque impedit ipsam consequatur, at debitis eius enim
            a. Tenetur sint sit iure veritatis. Vero tempora consequatur
            voluptatibus eveniet ea.
          </p>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
