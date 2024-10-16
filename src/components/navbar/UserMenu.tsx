"use client";

import { Session } from "next-auth";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import { signOutUser } from "@/app/actions/authActions";

interface UserMenuProps {
  user: Session["user"];
}

export default function UserMenu({ user }: UserMenuProps) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={user?.name || "user avatar"}
          size="sm"
          src={user?.image || "/images/user.png"}
        />
      </DropdownTrigger>

      <DropdownMenu variant="flat" aria-label="User actions menu">
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="flex h-14 flex-row"
            aria-label="username"
          >
            Signed in as {user?.name}
          </DropdownItem>
        </DropdownSection>

        <DropdownItem as={Link} href="/members/edit">
          Edit profile
        </DropdownItem>

        <DropdownItem color="danger" onClick={async () => signOutUser()}>
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
