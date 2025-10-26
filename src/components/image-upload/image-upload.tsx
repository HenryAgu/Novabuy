"use client";
import React, { useState, useCallback } from "react";

interface ImageUploadProps {
  onUpload: (url: string) => void;
}

function ImageUpload({ onUpload }: ImageUploadProps) {
  const [image, setImage] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);

  const uploadImage = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "novabuy");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        setImage(data.secure_url);
        onUpload(data.secure_url); 
      } else {
        console.error("Upload failed:", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  }, [onUpload]);

  return (
    <div className="flex flex-col gap-4 items-start">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => uploadImage(e.target.files)}
        className="border p-2 rounded"
        disabled={uploading}
      />

      {uploading && (
        <div className="text-sm text-gray-500">Uploading...</div>
      )}

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
