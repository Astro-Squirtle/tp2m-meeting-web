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

        {/* --- SOC Section --- */}
        {/* @ts-ignore */}
        <Typography variant="h4" color="blue-gray" className="mt-16 mb-6 text-left uppercase">
          Scientific Organizing Committee (SOC)
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Antonio De Ugarte Postigo</strong> </li>
            <li><strong>Chow-Choong Ngeow</strong> </li>
            <li><strong>Diego Hernando González Buitrago</strong> </li>
            <li><strong>Janet Ting-Wan Chen</strong> </li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Lester Ivan Fox Machado</strong> </li>
            <li><strong>Rosa Leticia Becerra Godínez</strong> </li>
            <li><strong>Sheng Yang</strong> </li>
            <li><strong>Wenwen Zuo</strong> </li>
          </ul>
        </div>

        {/* --- LOC Section --- */}
        {/* @ts-ignore */}
        <Typography variant="h4" color="blue-gray" className="mt-16 mb-6 text-left uppercase">
          Local Organizing Committee (LOC)
        </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Darshan Kumar</strong> </li>
              <li><strong>Dingyue Shi</strong> </li>
              <li><strong>Jingjing Shao</strong> </li>
              <li><strong>Lingrui Wang</strong> </li>
              <li><strong>Park Chan</strong> </li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Sheng Yang</strong> </li>
              <li><strong>Shipeng Wang</strong> </li>
              <li><strong>Wanxin Sun</strong> </li>
              <li><strong>Yuhang Zhao</strong> </li>
            </ul>
          </div>
        </div>
    </section>
  );
}

export default AboutEvent;
