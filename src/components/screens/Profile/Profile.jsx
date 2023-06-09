"use client";
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
import { db, storage } from "@/lib/firebase";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

const Profile = () => {
  const [photoURL, setPhotoURL] = useState(
    "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
  );
  const [photo, setPhoto] = useState(null);
  const [profileInfo, setProfileInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(authContext);
  const { handleSubmit, control, reset, formState, error } = useForm({
    defaultValues: {
      Name: "",
      SecondName: "",
      BirthDate: "",
      WebsiteURL: "",
    },
  });
  const docRef = doc(db, "users", `${user.uid}`);

  const onSubmit = async (data) => {
    await setDoc(docRef, {
      Email: user.email,
      Name: data.Name,
      SecondName: data.SecondName,
      BirthDate: data.BirthDate,
      WebsiteURL: data.WebsiteURL,
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
    const unsub = onSnapshot(
      docRef,
      { includeMetadataChanges: true },
      (doc) => {
        setProfileInfo(doc.data());
      }
    );
  }, [user]);

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
            <span className={styles.description}>
              {profileInfo?.Name ? profileInfo?.Name : "Your Name"} <br />
              {profileInfo?.SecondName
                ? profileInfo?.SecondName
                : "Your SecondName"}
              <br />
              {profileInfo?.BirthDate
                ? profileInfo?.BirthDate
                : "Your BirthDate"}
              <br />
              {profileInfo?.WebsiteURL
                ? profileInfo?.WebsiteURL
                : "Your WebsiteURL"}
              <br />
            </span>
          </div>
          {/* Right Block */}
          <div className={styles.RightBlock}>
            <p className={styles.Title}>Personal Details</p>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.Block}>
              <Controller
                name="Name"
                control={control}
                render={({ field }) => (
                  <TextField
                    color="primary"
                    id="form-Name"
                    label={"Name"}
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
              <Button type="submit" variant="outlined">
                Update
              </Button>
            </form>
            <p className={styles.Title}>Address</p>
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
              <Button disabled type="submit" variant="outlined">
                Update
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Profile;
