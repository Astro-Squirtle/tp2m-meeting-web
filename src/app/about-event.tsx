"use client";

import { Typography } from "@material-tailwind/react";

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-16">
      {/* Small title */}
      {/* @ts-ignore */}
      <Typography variant="h1" className="text-center mb-2 uppercase tracking-wider" color="blue">
        Introduction
      </Typography>
      
      {/* Main title */}
      {/* @ts-ignore */}
      <Typography variant="h3" className="text-center mb-6" color="blue-gray">
        About the TP2M Project
      </Typography>
      
      {/* Simple introduction text */}
      <div className="max-w-4xl">
        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="text-center font-normal !text-gray-600 leading-relaxed"
        >
          TBD
        </Typography>

        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="mt-6 text-center font-normal !text-gray-600 leading-relaxed"
        >
          TBD
        </Typography>
      </div>
    </section>
  );
}

export default AboutEvent;
