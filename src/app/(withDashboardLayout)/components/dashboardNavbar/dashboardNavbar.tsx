import React from "react";
import { ChevronLeft, Menu, SearchCheck } from "lucide-react";
import { useSidebarContext } from "../../Layout/layout-context";
import { Navbar, NavbarContent } from "@nextui-org/navbar";
import { UserDropdown } from "./user-dropdown";
import { userInfo } from "@/app/(withCommonLayout)/actions/auth";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          {collapsed ? (
            <ChevronLeft onClick={setCollapsed}></ChevronLeft>
          ) : (
            <Menu onClick={setCollapsed}></Menu>
          )}
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          {/* <Input
            startContent={<SearchCheck />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          /> */}
          <div>
            <h5>Hi, </h5>
            <h4 className="text-semibold">
              Welcome to{" "}
              <span className="text-primary font-bold text-lg">
                Pet Adoption Platform
              </span>{" "}
            </h4>
          </div>
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <UserDropdown />
        </NavbarContent>
      </Navbar>
      <div className="">{children}</div>
    </div>
  );
};
