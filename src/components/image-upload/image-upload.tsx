"use client";
import React, { useState } from "react";

interface ImageUploadProps {
  onUpload: (url: string) => void;
}

function ImageUpload({ onUpload }: ImageUploadProps) {
  const [image, setImage] = useState<string>("");

  const uploadImage = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "novabuy"); // your preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkaav5etj/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        setImage(data.secure_url);
        onUpload(data.secure_url); // 👈 send image URL to parent
        console.log("Uploaded image URL:", data.secure_url);
      } else {
        console.error("Upload failed:", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-start">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => uploadImage(e.target.files)}
        className="border p-2 rounded"
      />

      {image && (
        <img
          src={image}
          alt="Uploaded preview"
          className="w-48 h-48 object-cover rounded"
        />
      )}
    </div>
  );
}

export default ImageUpload;
