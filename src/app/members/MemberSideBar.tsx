"use client";

import { Member } from "@prisma/client";
import { usePathname } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { calculateAge } from "@/lib/util";
import Link from "next/link";
import { Button } from "@nextui-org/button";

interface MemberSideBarProps {
  member: Member;
  navLinks: {name: string, href: string}[]
}

export default function MemberSidebar({ member, navLinks }: MemberSideBarProps) {
  const pathname = usePathname();

  return (
    <Card className="mt-10 h-[80vh] w-full items-center">
      <Image
        height={200}
        width={200}
        src={member.image || "/images/user.png"}
        alt="User profile main image"
        className="mt-6 aspect-square rounded-full object-cover"
      />

      <CardBody>
        <div className="flex flex-col items-center">
          <div className="text-2xl">
            {member.name}, {calculateAge(member.dateOfBirth)}
          </div>

          <div className="text-sm text-neutral-500">
            {member.city}, {member.country}
          </div>
        </div>

        <Divider className="my-3" />

        <nav className="ml-4 flex flex-col gap-4 p-4 text-2xl">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`block rounded ${
                pathname === link.href
                  ? "text-secondary"
                  : "hover:text-secondary/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </CardBody>

      <CardFooter>
        <Button
          as={Link}
          href="/members"
          fullWidth
          color="secondary"
          variant="bordered"
        >
          Go back
        </Button>
      </CardFooter>
    </Card>
  );
}
