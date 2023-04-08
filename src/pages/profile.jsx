import Layout from "@/components/layout/Layout";
import React, { useContext, useState } from "react";
import UsersContext from "../../context/UserContext";
import { Container, IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
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
              <Avatar
                alt="Remy Sharp"
                src={URL.createObjectURL(selectedImage)}
                sx={{ width: 100, height: 100 }}
                onClick={() => setSelectedImage(null)}
              />
            </div>
          )}

          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              name="myImage"
              type="file"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <PhotoCamera />
          </IconButton>
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
