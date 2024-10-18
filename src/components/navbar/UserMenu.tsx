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
import { transformImageUrl } from "@/lib/util";

interface UserMenuProps {
  userInfo: { name: string | null; image: string | null } | null;
}

export default function UserMenu({ userInfo }: UserMenuProps) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={userInfo?.name || "user avatar"}
          size="sm"
          src={transformImageUrl(userInfo?.image) || "/images/user.png"}
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
            Signed in as {userInfo?.name}
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
