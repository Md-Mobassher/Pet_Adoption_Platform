import { CatIcon, Home, KeyIcon, User2Icon, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../../Layout/layout-context";
import { Sidebar } from "./sidebar.style";
import Image from "next/image";
import assets from "@/assets";

export const AdminSidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? <div className={Sidebar.Overlay()} /> : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <Link className="flex justify-start items-center" href="/">
            <Image src={assets.logo} alt="logo" className="" width={160} />
          </Link>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<Home />}
              isActive={pathname === "/dashboard"}
              href="/dashboard/admin"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/dashboard/admin/user-management"}
                title="User Management"
                icon={<Users />}
                href="/dashboard/admin/user-management"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/pet-management"}
                title="Pet Management"
                icon={<CatIcon />}
                href="/dashboard/admin/pet-management"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/adoption-requests"}
                title="Adoption Requests"
                icon={<CatIcon />}
                href="/dashboard/admin/adoption-requests"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/my-profile"}
                title="My Profile"
                icon={<User2Icon />}
                href="/dashboard/admin/my-profile"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/change-password"}
                title="Change Password"
                icon={<KeyIcon />}
                href="/dashboard/admin/change-password"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
