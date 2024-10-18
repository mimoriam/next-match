"use server";

import {
  memberEditSchema,
  MemberEditSchema,
} from "@/lib/schemas/memberEditSchema";
import { ActionResult } from "@/types";
import { Member } from "@prisma/client";
import { getAuthUserId } from "@/app/actions/authActions";
import prisma from "@/lib/prisma";

export async function updateMemberProfile(
  data: MemberEditSchema,
  nameUpdated: boolean,
): Promise<ActionResult<Member>> {
  try {
    const userId = await getAuthUserId();
    const validated = memberEditSchema.safeParse(data);

    if (!validated.success)
      return { status: "error", error: validated.error.errors };

    const { name, description, city, country } = validated.data;

    if (nameUpdated) {
      await prisma.user.update({
        where: { id: userId },
        data: { name },
      });
    }

    const member = await prisma.member.update({
      where: { userId },
      data: {
        name,
        description,
        city,
        country,
      },
    });

    return { status: "success", data: member };
  } catch {
    return { status: "error", error: "Something went wrong" };
  }
}

export async function getUserInfoForNav() {
  try {
    const userId = await getAuthUserId();

    return prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, image: true },
    });
  } catch (err) {
    throw err;
  }
}
