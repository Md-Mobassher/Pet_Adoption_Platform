import {
  Car,
  Cat,
  CatIcon,
  Cog,
  DollarSign,
  History,
  Home,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../../Layout/layout-context";
import { Sidebar } from "./sidebar.style";

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
          {" "}
          <Link className="flex" href="/">
            <Cat className="size-8 mr-2 text-primary" />
            <h1 className="font-bold lg:text-3xl text-2xl text-inherit">
              <span className="text-primary">Pet</span> Adoption
            </h1>
          </Link>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<Home />}
              isActive={pathname === "/dashboard"}
              href="/dashboard"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/dashboard/admin/user-management"}
                title="User Management"
                icon={<User />}
                href="/dashboard/admin/user-management"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/add-new-pet"}
                title="Add new Pet"
                icon={<CatIcon />}
                href="/dashboard/admin/add-new-pet"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/edit-pet"}
                title="Edit Pet"
                icon={<CatIcon />}
                href="/dashboard/admin/Edit-pet"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/edit-pet"}
                title="Edit Pet"
                icon={<CatIcon />}
                href="/dashboard/admin/Edit-pet"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
