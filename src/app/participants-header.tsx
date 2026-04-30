"use client";

import { Typography } from "@material-tailwind/react";

export default function ParticipantsHeader() {
  return (
    <div className="relative h-[60vh] w-full bg-[url('/image/tp2m.png')] bg-cover bg-[center_27%] bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-black/65" />

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
        {/* @ts-ignore */}
        <Typography variant="h1" color="white" className="mb-6 text-4xl lg:text-7xl font-bold tracking-tight">
          Participants
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="h4" color="white" className="text-3xl opacity-80 font-normal">
          Participants List
        </Typography>
      </div>
    </div>
  );
}