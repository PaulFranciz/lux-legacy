"use client";

import React from "react";
import Image from "next/image";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}

interface AvatarCirclesProps {
  numPeople?: number;
  avatarUrls: Avatar[];
}

export function AvatarCircles({ numPeople, avatarUrls }: AvatarCirclesProps) {
  return (
    <div className="z-10 flex -space-x-4 rtl:space-x-reverse">
      {avatarUrls.map((avatar, index) => (
        <a
          key={index}
          href={avatar.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block"
        >
          <Image
            className="h-10 w-10 rounded-full border-2 border-[#050609] transition-transform hover:scale-110"
            src={avatar.imageUrl}
            alt={`Avatar ${index + 1}`}
            width={40}
            height={40}
            unoptimized
          />
        </a>
      ))}
      {numPeople && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#050609] bg-[#0d1017] text-center text-xs font-medium text-white">
          +{numPeople}
        </div>
      )}
    </div>
  );
}
