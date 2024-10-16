import { Member } from "@prisma/client";
import { Card, CardFooter } from "@nextui-org/card";
import Link from "next/link";
import { calculateAge } from "@/lib/util";
import { Image } from "@nextui-org/image";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <Card fullWidth as={Link} href={`/members/${member.userId}`} isPressable>
      <Image
        isZoomed
        alt={member.name}
        width={300}
        src={member.image || "/images/user.png"}
        className="aspect-square object-cover"
      />

      <CardFooter className="bg-dark-gradient absolute bottom-0 z-10 flex justify-start overflow-hidden bg-black">
        <div className="flex flex-col text-white">
          <span className="font-semibold">
            {member.name}, {calculateAge(member.dateOfBirth)}
          </span>

          <span className="text-sm">{member.city}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
