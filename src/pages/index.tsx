import React from "react";
import Layout from "@/components/layout";
import ProfileTemplate from "@/views/profile-view";
import navigationAtom from "@/atoms/navigation";
import { useAtom } from "jotai";
import { useAccount } from "@/providers/userprovider";
import { useRouter } from "next/router";
import ConnectionView from "@/views/connection-view";
import clsx from "clsx";

const HomePage = () => {
  const router = useRouter();
  const { user, loading } = useAccount();

  const [navigation, setNavigation] = useAtom(navigationAtom);
  const { path } = navigation;
  if (loading) return <div>Loading...</div>;
  else if (user)
    return (
      <Layout
        user={user}
        className={clsx(path == "profile" ? "p-0" : "px-2 pb-5")}
      >
        {path === "profile" && <ProfileTemplate user={user} />}
        {path === "connections" && <ConnectionView />}
      </Layout>
    );
  else {
    router.push("/auth/login");
    return <div></div>;
  }
};

export default HomePage;
