import Layout from "@/components/layout/Layout";
import { Container } from "@mui/material";
import { CSSTransition } from "react-transition-group";

const Group = () => {
 
  return (
    <Layout title="About Group">
      <CSSTransition in={show} timeout={500} classNames={"item"}>
        <Container> Group</Container>
      </CSSTransition>
    </Layout>
  );
};

export default Group;
