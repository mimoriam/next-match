"use server";

import { LoginSchema } from "@/lib/schemas/loginSchema";
import { ActionResult } from "@/types";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";

export async function signInUser(
  data: LoginSchema,
): Promise<ActionResult<string>> {
  try {
    console.log(data.email);

    return { status: "success", data: "Logged in" };
  } catch {
    return { status: "error", error: "Something else went wrong" };
  }
}

export async function registerUser(
  data: RegisterSchema,
): Promise<ActionResult<string>> {
  try {
    const validated = registerSchema.safeParse(data);

    if (!validated.success) {
      return { status: "error", error: validated.error.errors };
    }

    // TODO Hash password

    return { status: "success", data: "" };
  } catch {
    return { status: "error", error: "Something went wrong" };
  }
}
