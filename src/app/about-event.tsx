"use client";

import { Typography } from "@material-tailwind/react";

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-16">
      
      {/* Main title */}
      {/* @ts-ignore */}
      <Typography variant="h3" className="text-center mb-6" color="blue-gray">
        Rationale
      </Typography>
      
      {/* Simple introduction text */}
      <div className="max-w-4xl">
        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="text-justify font-normal !text-gray-600 leading-relaxed"
        >
          Time domain astronomy is entering a new era driven by large scale surveys, where photometric discoveries are rapidly increasing in volume, cadence, and depth. However, this progress has also highlighted a growing imbalance: while detections are abundant, spectroscopic resources remain limited. Spectroscopy, spanning a wide range of resolutions from low to high, is essential for understanding the physical nature and evolution of astrophysical sources, making it a critical component of modern observational astronomy, alongside multi-band photometric observations.

        </Typography>

        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="mt-6 text-justify font-normal !text-gray-600 leading-relaxed"
        >
          Mid-sized telescopes equipped with flexible instrumentation are uniquely positioned to address this challenge. The Trans-Pacific 2-meter Telescope (TP2m) is designed to provide efficient and accessible observational capabilities, supporting both multi-color photometry and spectroscopy, enabled by three key scientific instruments: a multi-color imager (MCI), a dual-arm spectrograph (ESOPO), and a near-infrared camera (IR camera).
        </Typography>

        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="mt-6 text-justify font-normal !text-gray-600 leading-relaxed"
        >
          This workshop aims not only to explore the scientific potential of TP2m, but also to bring together the community to discuss broader opportunities in the evolving time-domain landscape, fostering collaboration and shaping future observational strategies.
        </Typography>

        </div>
    </section>
  );
}

export default AboutEvent;
