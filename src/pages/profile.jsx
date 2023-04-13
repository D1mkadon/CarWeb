import React, { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import Profile from "@/components/screens/Profile/Profile";
import Layout from "@/components/layout/Layout";
import ProfileNotFound from "@/components/screens/Profile/ProfileNotFound";

const UploadAndDisplayImage = () => {
  const { user } = useContext(authContext);
  if (!user) {
    return (
      <Layout title={"Not found"}>
        <ProfileNotFound />
      </Layout>
    );
  } else {
    return <Profile />;
  }
};

export default UploadAndDisplayImage;
