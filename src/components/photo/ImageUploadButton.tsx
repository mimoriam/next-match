"use client";

import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { HiPhoto } from "react-icons/hi2";

interface ImageUploadButtonProps {
  onUploadImage: (result: CloudinaryUploadWidgetResults) => void;
}

export default function ImageUploadButton({
  onUploadImage,
}: ImageUploadButtonProps) {
  return (
    <CldUploadButton
      options={{ maxFiles: 1 }}
      onSuccess={onUploadImage}
      signatureEndpoint="/api/sign-image"
      uploadPreset="nm-demo"
      className={`flex items-center gap-2 rounded-lg border-2 border-secondary px-4 py-2 text-secondary hover:bg-secondary/10`}
    >
      <HiPhoto size={28} />
      Upload new image
    </CldUploadButton>
  );
}
