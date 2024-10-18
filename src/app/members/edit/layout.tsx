import React from "react";
import { getMemberByUserId } from "@/app/actions/memberActions";
import { getAuthUserId } from "@/app/actions/authActions";
import { notFound } from "next/navigation";
import MemberSidebar from "@/app/members/MemberSideBar";
import { Card } from "@nextui-org/card";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userId = await getAuthUserId();

  const member = await getMemberByUserId(userId);
  if (!member) return notFound();

  const basePath = `/members/edit`;

  const navLinks = [
    { name: "Edit Profile", href: `${basePath}` },
    { name: "Update Photos", href: `${basePath}/photos` },
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
