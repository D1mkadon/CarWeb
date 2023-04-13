import React, { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import Profile from "@/components/screens/Profile/Profile";
import { Router } from "next/router";
import Layout from "@/components/layout/Layout";
import ProfileNotFound from "@/components/screens/Profile/ProfileNotFound";

const UploadAndDisplayImage = () => {
  const { user } = useContext(authContext);
  if (user) {
    return <Profile />;
  }
  {
    return <Layout title={"Not found"}><ProfileNotFound/></Layout>;
  }
};

export default UploadAndDisplayImage;
