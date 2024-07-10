
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import UserMenu from "./UserMenu";
import Logo from "./Logo";

const Nav = () => {
  return (
    <Navbar
      shouldHideOnScroll
      className="md:*:px-32 *:px-4 *:max-w-full items-start font-mono dark:bg-gray-500/20 shadow dark:shadow-white/10"
    >
      <NavbarBrand>
        <Logo/>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <UserMenu />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
