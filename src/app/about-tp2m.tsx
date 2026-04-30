"use client";

import { Typography } from "@material-tailwind/react";

export function AboutTP2m() {
  return (
    <main className="min-h-screen bg-gray-50">
              
    {/* Background Section */}
      <div className="relative h-[60vh] w-full bg-[url('/image/tp2m.png')] bg-cover bg-[center_27%] bg-no-repeat">
       	<div className="absolute inset-0 h-full w-full bg-black/65" />

      	{/* Title */}
      	<div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
       		{/* @ts-ignore */}
       		<Typography variant="h1" color="white" className="mb-6 text-4xl lg:text-7xl font-bold tracking-tight">
        		About the TP2M Project
       		</Typography>
       		{/* @ts-ignore */}
       		<Typography variant="h4" color="white" className="text-3xl opacity-80 font-normal">
        		Scientific Goals and Instrumentation
       		</Typography>
      	</div>
     	</div>

    <section className="container mx-auto flex flex-col items-center px-4 py-16">
      
      {/* Simple introduction text */}
			<div className="max-w-4xl">
			{/* @ts-ignore */}
        <Typography variant="h4" color="blue-gray" className="mt-12 mb-4 text-left uppercase">
          Introduction
        </Typography>
        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="text-justify font-normal !text-gray-600 leading-relaxed"
        >
          As a multi-purpose facility, the TP2m telescope is designed to address a broad range of scientific objectives across several domains of modern astronomy. Its versatility allows it to support general astronomical studies, including stellar astrophysics, investigations of the interstellar medium (ISM), and research in both Galactic and extragalactic astronomy. This capability ensures that the telescope contributes to fundamental questions regarding the structure, composition, and evolution of stars and galaxies.
        </Typography>

        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="mt-6 text-justify font-normal !text-gray-600 leading-relaxed"
        >
          Beyond general applications, the TP2m is specifically optimized for Time-Domain Astronomy and the study of the Variable Universe. Its technical framework is ideal for rapid and repeated observations of transient and variable phenomena, including supernovae, kilonovae, gamma-ray bursts, fast X-ray transients, cataclysmic variables, and near-Earth objects. These science cases require timely response, flexible scheduling, and sustained monitoring, all of which are central strengths of the TP2m system.
        </Typography>

        {/* Key Subsystems Section */}
        {/* @ts-ignore */}
        <Typography variant="h4" color="blue-gray" className="mt-12 mb-4 text-left uppercase">
          Key Subsystems
        </Typography>
        {/* @ts-ignore */}
        <div className="text-gray-600 font-normal text-lg">
          <div className="space-y-1">
            <p><strong>Telescope:</strong> 2m F8 RC telescope, Alt-Az mount</p>
            <p><strong>Instrument:</strong> MCI, IR-Cam, ESOPO</p>
            <p><strong>Software:</strong> Observing control software</p>
            <p><strong>Infrastructure:</strong> Site, Road Access, Electricity, Network, Water Supply</p>
            <p><strong>Building:</strong> Enclosure, Dome system, Telescope Pier, Control Room, Instrument Supporting</p>
          </div>
        </div>

        {/* Instruments Section */}
        {/* @ts-ignore */}
        <Typography variant="h4" color="blue-gray" className="mt-12 mb-8 text-left uppercase">
          Scientific Instruments
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-4">
          {/* MCI Instrument */}
          <div className="flex flex-col items-center text-justify">
            <img 
              src="/image/MCI.png" 
              alt="MCI" 
              className="h-48 w-full object-contain mb-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            />
            {/* @ts-ignore */}
            <Typography variant="h6" color="blue" className="mb-2">MCI</Typography>
            {/* @ts-ignore */}
            <Typography className="text-base text-gray-900 px-2">
              {"The Multi-Color simultaneous Imager serves as the first-light instrument, utilizing three cameras for simultaneous r', i', z' band observations, optimized for time-domain science."}
            </Typography>
          </div>

          {/* ESOPO Instrument */}
          <div className="flex flex-col items-center text-justify">
            <img 
              src="/image/ESOPO.png" 
              alt="ESOPO" 
              className="h-48 w-full object-contain mb-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            />
            {/* @ts-ignore */}
            <Typography variant="h6" color="blue" className="mb-2">ESOPO</Typography>
            {/* @ts-ignore */}
            <Typography className="text-base text-gray-900">
              A unique dual-arm (blue and red) low-to-medium resolution spectrograph provided by UNAM, designed for specialized long-slit spectroscopy.
            </Typography>
          </div>

          {/* IR Camera Instrument */}
          <div className="flex flex-col items-center text-justify">
            <img 
              src="/image/IR CAM.png" 
              alt="IR Camera" 
              className="h-48 w-full object-contain mb-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            />
            {/* @ts-ignore */}
            <Typography variant="h6" color="blue" className="mb-2">IR Camera</Typography>
            {/* @ts-ignore */}
            <Typography className="text-base text-gray-900 px-2">
              Featuring a HAWAII-2RG™ detector array, this camera provides high-sensitivity imaging in the near-infrared spectrum up to 2.5µm.
            </Typography>
          </div>
        </div>
      </div>
     </section>
    </main>
  );
}

export default AboutTP2m;
