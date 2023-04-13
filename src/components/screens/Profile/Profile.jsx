import {
  Button,
  CircularProgress,
  Container,
  IconButton,
  TextField,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Layout from "@/components/layout/Layout";
import { authContext } from "@/lib/store/auth-context";
import { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { Controller, useForm } from "react-hook-form";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { storage } from "@/lib/firebase";
const Profile = () => {
  const [photoURL, setPhotoURL] = useState(
    "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
  );
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, makeInfo } = useContext(authContext);
  const { handleSubmit, control, reset, formState, error } = useForm({
    defaultValues: {
      Name: "",
      SecondName: "",
      BirthDate: "",
      WebsiteURL: "",
    },
  });
  const onSubmit = async (data) => {
    await makeInfo(data.Name, data.SecondName, data.BirthDate, data.WebsiteURL)
      .then((docRef) => {
        console.log(docRef.id); //id
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const upload = async () => {
    const fileRef = ref(storage, user.uid + ".png");
    setLoading(true);
    uploadBytes(fileRef, photo).then(() => {
      getDownloadURL(fileRef).then((url) => {
        setPhotoURL(url);
        setPhoto(null);
        updateProfile(user, { photoURL: url }).then(() => setLoading(false));
      });
    });
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  const handleClick = () => {
    upload(photo, user);
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ UserName: "", email: "", password: "" });
    }
  }, [formState, reset]);
  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);
  if (user) {
    return (
      <Layout title={"profile"}>
        <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
          <div className={styles.parentBlock}>
            {/* leftBlock */}
            <div className={styles.LeftBlock}>
              <div className={styles.LeftImg}>
                {loading ? (
                  <div>
                    <CircularProgress />
                  </div>
                ) : (
                  <>
                    <img src={photoURL} alt="/" />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input
                        onChange={handleChange}
                        hidden
                        accept="image/*"
                        type="file"
                      />
                      <PhotoCamera />
                    </IconButton>
                    <Button
                      variant="outlined"
                      disabled={!photo || loading}
                      onClick={handleClick}
                    >
                      upload
                    </Button>
                  </>
                )}
              </div>
              <h3 className={styles.LeftName}>
                {user.displayName ? user.displayName : "Name is not defined"}
              </h3>
              <h4 className={styles.LeftEmail}>{user.email}</h4>
              <h2 className={styles.Title}>About</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                voluptate?
              </span>
            </div>
            {/* Right Block */}
            <div className={styles.RightBlock}>
              <h2 className={styles.Title}>Personal Details</h2>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.Block}>
                <Controller
                  name="Name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      color="primary"
                      id="form-Name"
                      label={user?.displayName ? user?.displayName : "Name"}
                      variant="outlined"
                      name="Name"
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                    />
                  )}
                />
                <Controller
                  name="SecondName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      color="primary"
                      id="form-SecondName"
                      label="SecondName"
                      variant="outlined"
                      name="SecondName"
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                    />
                  )}
                />
                <Controller
                  name="BirthDate"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      color="primary"
                      id="form-BirthDate"
                      label="BirthDate"
                      variant="outlined"
                      name="BirthDate"
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                    />
                  )}
                />
                <Controller
                  name="WebsiteURL"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      color="primary"
                      id="form-WebsiteURL"
                      label="WebsiteURL"
                      variant="outlined"
                      name="WebsiteURL"
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                    />
                  )}
                />
                {/* <TextField
                  color="primary"
                  id="form-SecondName"
                  label="Second Name"
                  variant="outlined"
                  name="SecondName"
                /> */}
                {/* <TextField
                  color="primary"
                  id="form-BirthDate"
                  label="BirthDate"
                  variant="outlined"
                  name="BirthDate"
                />
                <TextField
                  color="primary"
                  id="form-WebsiteURL"
                  label="Website URL"
                  variant="outlined"
                  name="WebsiteURL"
                /> */}
                <Button type="submit" variant="outlined">
                  Update
                </Button>
              </form>
              <h2 className={styles.Title}>Address</h2>
              <div className={styles.Block}>
                <TextField
                  color="primary"
                  id="form-Street"
                  label="Street"
                  variant="outlined"
                  name="Street"
                />
                <TextField
                  color="primary"
                  id="form-City"
                  label="Enter City"
                  variant="outlined"
                  name="City"
                />
                <TextField
                  color="primary"
                  id="form-State"
                  label="State"
                  variant="outlined"
                  name="State"
                />
                <TextField
                  color="primary"
                  id="form-ZipCode"
                  label="Zip Code"
                  variant="outlined"
                  name="ZipCode"
                />
              </div>
              <Button type="submit" variant="outlined">
                Update
              </Button>
            </div>
          </div>
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout title={"User not found"}>
        <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
          user not found
        </Container>
      </Layout>
    );
  }
};

export default Profile;
