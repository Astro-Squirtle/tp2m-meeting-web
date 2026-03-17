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
          As a multi-purpose facility, the TP2m telescope is designed to address a broad range of scientific objectives across several domains of modern astronomy. Its versatility allows it to support general astronomical studies, including stellar astrophysics, investigations of the interstellar medium (ISM), and research in both Galactic and extragalactic astronomy. This capability ensures that the telescope contributes to fundamental questions regarding the structure, composition, and evolution of stars and galaxies.
        </Typography>

        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="mt-6 text-center font-normal !text-gray-600 leading-relaxed"
        >
          Beyond general applications, the TP2m is specifically optimized for Time Domain Astronomy and the study of the Variable Universe. Its technical framework is ideal for monitoring transient events and characterizing objects such as cataclysmic variables (CVs) and near-Earth objects (NEOs), where rapid and repeated observations are essential.
        </Typography>

        {/* Key Subsystems Section */}
        {/* @ts-ignore */}
        <Typography variant="h5" color="blue-gray" className="mt-12 mb-4 text-center uppercase">
          Key Subsystems
        </Typography>
        {/* @ts-ignore */}
        <Typography className="text-gray-600 font-normal">
          The project integrates several critical components to ensure operational excellence: 
          a 2m F8 Ritchey-Chrétien telescope on an Alt-Az mount; 
          a four-story facility including a telescope chamber, control room, and instrument lab; 
          a 12.5m dome system; 
          and a comprehensive software suite for robotic observation, scheduling, and data distribution.
        </Typography>

        {/* Instruments Section */}
        {/* @ts-ignore */}
        <Typography variant="h5" color="blue-gray" className="mt-10 mb-4 text-center uppercase">
          Scientific Instruments
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          <div>
            {/* @ts-ignore */}
            <Typography variant="h6" color="blue" className="mb-2">MCI</Typography>
            {/* @ts-ignore */}
            <Typography className="text-sm text-gray-600">
              {"The Multi-Color simultaneous Imager serves as the first-light instrument, utilizing three cameras for simultaneous $r', i', z'$ band observations, optimized for time-domain science."}
            </Typography>
          </div>
          <div>
            {/* @ts-ignore */}
            <Typography variant="h6" color="blue" className="mb-2">ESOPO</Typography>
            {/* @ts-ignore */}
            <Typography className="text-sm text-gray-600">
              A unique dual-arm (blue and red) low-to-medium resolution spectrograph provided by UNAM, designed for specialized long-slit spectroscopy.
            </Typography>
          </div>
          <div>
            {/* @ts-ignore */}
            <Typography variant="h6" color="blue" className="mb-2">IR Camera</Typography>
            {/* @ts-ignore */}
            <Typography className="text-sm text-gray-600">
              Featuring a HAWAII-2RG™ detector array, this camera provides high-sensitivity imaging in the near-infrared spectrum up to 2.5µm.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
