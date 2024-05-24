import React from "react";
import { Layout } from "./layout/adminLayout";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" ">
      <Layout>
        <div>{children}</div>
      </Layout>
    </div>
  );
};

export default AdminDashboardLayout;
