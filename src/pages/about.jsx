import Layout from "@/components/layout/Layout";
import AboutUs from "@/components/screens/About/AboutUs";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout title="About">
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
        <AboutUs />
      </motion.div>
    </Layout>
  );
};

export default About;
