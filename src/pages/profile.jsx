import Layout from "@/components/layout/Layout";
import React, { useContext, useState } from "react";
import UsersContext from "../../context/UserContext";
import { Container } from "@mui/material";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isLogin } = useContext(UsersContext);
  if (isLogin) {
    return (
      <Layout title={"profile"}>
        <Container maxWidth="xl">
          <h1>Upload and Display Image usign React Hook's</h1>

          {selectedImage && (
            <div>
              <img
                alt="not found"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
          )}

          <br />
          <br />

          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout title={"User not found"}>
        <Container maxWidth="xl">user not found</Container>
      </Layout>
    );
  }
};

export default UploadAndDisplayImage;
