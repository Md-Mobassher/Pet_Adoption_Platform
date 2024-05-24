import { UserLayout } from "./layout/UserLayout";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" ">
      <UserLayout>
        <div>{children}</div>
      </UserLayout>
    </div>
  );
};

export default DashboardLayout;
