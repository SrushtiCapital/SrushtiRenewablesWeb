"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type TeamMemberPhotoProps = {
  name: string;
  image?: string;
  className?: string;
  sizes?: string;
  initialsClassName?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamMemberPhoto({
  name,
  image,
  className,
  sizes = "280px",
  initialsClassName = "text-4xl",
}: TeamMemberPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-surface-tint/15",
          className,
        )}
      >
        <span
          className={cn(
            "font-headline-lg font-semibold text-primary/40",
            initialsClassName,
          )}
        >
          {initials(name)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={name}
      fill
      className={cn("object-cover object-top", className)}
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}
