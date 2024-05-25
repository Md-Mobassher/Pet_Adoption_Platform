import { logOut } from "@/app/(withCommonLayout)/actions/auth";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { useAuth } from "@/lib/Providers/AuthProvider";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { NavbarItem } from "@nextui-org/navbar";
import { useRouter } from "next/navigation";

export const UserDropdown = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const logOutUser = async () => {
    await logOut();
    setUser(null);
    router.push("/");
  };
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar as="button" size="md" src="" />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem>
          <ThemeSwitcher />
        </DropdownItem>
        <DropdownItem
          onClick={() => logOutUser()}
          key="logout"
          color="danger"
          className="text-danger "
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
