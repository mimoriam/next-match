import Link from "next/link";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "@/components/navbar/NavLink";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { auth } from "@/auth";
import UserMenu from "@/components/navbar/UserMenu";
import { getUserInfoForNav } from "@/app/actions/userActions";

export default async function TopNav() {
  const session = await auth();
  const userInfo = session?.user && (await getUserInfoForNav());

  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-400 to-purple-700"
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[active=true]:text-yellow-200",
        ],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <GiMatchTip size={40} className="text-gray-200" />

        <div className="flex text-3xl font-bold">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-200">Match</span>
        </div>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
      </NavbarContent>

      <NavbarContent justify="end">
        {userInfo ? (
          <UserMenu userInfo={userInfo} />
        ) : (
          <>
            <Button
              as={Link}
              href="/login"
              variant="bordered"
              className="text-white"
            >
              Login
            </Button>

            <Button
              as={Link}
              href="/register"
              variant="bordered"
              className="text-white"
            >
              Register
            </Button>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
