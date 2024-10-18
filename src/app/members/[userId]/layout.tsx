import React from "react";
import { getMemberByUserId } from "@/app/actions/memberActions";
import { notFound } from "next/navigation";
import MemberSidebar from "@/app/members/MemberSideBar";
import { Card } from "@nextui-org/card";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  const member = await getMemberByUserId(params.userId);
  if (!member) return notFound();

  const basePath = `/members/${member.userId}`;

  const navLinks = [
    { name: "Profile", href: `${basePath}` },
    { name: "Photos", href: `${basePath}/photos` },
    { name: "Chat", href: `${basePath}/chat` },
  ];

  return (
    <div className="grid h-[80vh] grid-cols-12 gap-5">
      <div className="col-span-3">
        <MemberSidebar member={member} navLinks={navLinks} />
      </div>

      <div className="col-span-9">
        <Card className="mt-10 h-[80vh] w-full">{children}</Card>
      </div>
    </div>
  );
}
