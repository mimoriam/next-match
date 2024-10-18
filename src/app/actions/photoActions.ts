import { getAuthUserId } from "@/app/actions/authActions";
import prisma from "@/lib/prisma";
import { Photo } from "@prisma/client";
import { cloudinary } from "@/lib/cloudinary";

export async function addImage(url: string, publicId: string) {
  try {
    const userId = await getAuthUserId();

    return prisma.member.update({
      where: { userId },
      data: {
        photos: {
          create: [
            {
              url,
              publicId,
            },
          ],
        },
      },
    });
  } catch (err) {
    throw err;
  }
}

export async function setMainImage(photo: Photo) {
  try {
    const userId = await getAuthUserId();

    await prisma.user.update({
      where: { id: userId },
      data: { image: photo.url },
    });

    return prisma.member.update({
      where: { userId },
      data: { image: photo.url },
    });
  } catch (err) {
    throw err;
  }
}

export async function deleteImage(photo: Photo) {
  try {
    const userId = await getAuthUserId();

    if (photo.publicId) {
      await cloudinary.v2.uploader.destroy(photo.publicId);
    }

    return prisma.member.update({
      where: { userId },
      data: {
        photos: {
          delete: { id: photo.id },
        },
      },
    });
  } catch (err) {
    throw err;
  }
}
