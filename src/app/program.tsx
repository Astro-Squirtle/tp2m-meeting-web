"use client";
import React, { useState } from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";

// background colors
const TYPE_STYLES: Record<string, string> = {
  general:     "bg-yellow-50",    // Registration、Opening
  tp2m:        "bg-red-50",       // TP2m overview / discussion
  invited:     "bg-orange-50",    // invited talk
  contributed: "bg-teal-50",      // contributed talk
  break:       "bg-brown-50",     // break / poster
  social:      "bg-purple-50",    // social events
  others:      "bg-white",        // any other events
};

type AgendaEvent = {
  time: string;
  task: string;
  speaker: string;
  type: string;
  title?: string;      
  abstract?: string;
};

// Program data
const AGENDA_DATA: Record<string, { date: string; weekday: string; events: AgendaEvent[] }> = {
  "Day 1": {
    date: "Aug 24",
    weekday: "Monday",
    events: [
      { time: "-", task: "TP2m discussion (Details Coming Soon)", speaker: "-", type: "others" },
    ],
  },
  "Day 2": {
    date: "Aug 25",
    weekday: "Tuesday",
    events: [
      { time: "08:30-08:50", task: "Registration", speaker: "-", type: "general" },
      { time: "08:50-09:00", task: "Opening remark", speaker: "-", type: "general" },
      { time: "09:00-09:30", task: "TP2m overview talk", speaker: "Wen-Ping Chen", type: "tp2m",
        title: "", 
        abstract: "",
      },
      { time: "09:30-09:50", task: "Contributed talk 1", speaker: "-", type: "contributed" },
      { time: "09:50-10:10", task: "Contributed talk 2", speaker: "-", type: "contributed" },
      { time: "10:10-10:30", task: "Contributed talk 3", speaker: "-", type: "contributed" },
      { time: "10:30-11:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "11:00-11:30", task: "Invited talk 1", speaker: "dali kong",type: "invited",
        title: "",
        abstract: "",
      },
      { time: "11:30-11:50", task: "Contributed talk 4", speaker: "Laurence Sabin", type: "contributed" },
      { time: "11:50-14:00", task: "Lunch", speaker: "-", type: "general" },
      { time: "14:00-14:30", task: "Invited talk 2", speaker: "Ramandeep Gill", type: "invited",
        title: "A Complete Understanding of GRB Jets and their Environments from Afterglow Lightcurve and Polarization",
        abstract: "Gamma-ray bursts (GRBs) are powered by narrowly collimated ultra-relativistic jets, emission from which is tightly beamed in the direction of motion. Only a modest fraction (around 10 - 20 per cent) of the total energy in these jets power the short-lived but bright “prompt” gamma-ray burst, while the remaining kinetic energy is emitted over weeks to months in a broadband synchrotron “afterglow”. The afterglow is produced when the jet is slowed down by sweeping up the external medium in its path. This long-lasting emission, in particular the optical emission, holds several clues to unravel the properties of the jet and the environment in which it propagates. For example, in some cases, the peak of the optical afterglow is used to constrain the radius where the jet decelerates and that in turn is used to constrain its initial bulk Lorentz factor. As the jet slows down, the angular size of the observable jet surface grows. This allows to probe its angular structure, which is not so well understood, and its knowledge has direct implications for the jet composition (strongly or weakly magnetized jet) and the physics of jet break out from the confining medium, i.e. stellar envelope for collapsars and dynamical ejecta for merger-driven bursts. Finally, optical afterglow polarization measurements are an indispensable tool to learn about the poorly understood magnetic field structure in both the relativistic ejecta and that produced at the collisionless external forward shock. This talk will present several examples of how the broadband modeling of the afterglow lightcurve and polarization can be used to understand the dynamics, angular structure, and magnetic field composition in GRB jets as well as the properties of the environment in which GRB progenitors are born.",
      },
      { time: "14:30-14:50", task: "Contributed talk 5", speaker: "-", type: "contributed" },
      { time: "14:50-15:10", task: "Contributed talk 6", speaker: "-", type: "contributed" },
      { time: "15:10-15:30", task: "Contributed talk 7", speaker: "-", type: "contributed" },
      { time: "15:30-15:40", task: "Conference photo", speaker: "-", type: "general"},
      { time: "15:40-16:10", task: "break/poster", speaker: "-", type: "break" },
      { time: "16:10-16:30", task: "Contributed talk 8", speaker: "-", type: "contributed" },
      { time: "16:30-16:50", task: "Contributed talk 9", speaker: "-", type: "contributed" },
    ],
  },
  "Day 3": {
    date: "Aug 26",
    weekday: "Wednesday",
    events: [
      { time: "09:10-09:40", task: "Invited talk 3", speaker: "Bing Zhang", type: "invited" },
      { time: "09:40-10:00", task: "Contributed talk 10", speaker: "-", type: "contributed" },
      { time: "10:00-10:30", task: "Invited talk 4 (Remote)", speaker: "Fabio De Colle", type: "invited", 
        title: "Constraining inhomogeneities in SNe, FBOTs, and other high-energy transients from unresolved radio observations",
        abstract: "Synchrotron emission from high-energy transients is produced by relativistic electrons accelerated by shocks. Since these sources are generally unresolved, constraining the structure of their emitting regions is challenging. Their synchrotron self-absorption (SSA) spectra often show broader turnovers or optically thick slopes shallower than the standard $F_\nu \propto \nu^{5/2}$ prediction, usually interpreted phenomenologically. Here, we show that these deviations can instead be used to directly probe inhomogeneities in unresolved emitting regions. We demonstrate how inhomogeneities modify the low-frequency spectrum and how their properties can be constrained from observations. Applying our method to the stripped-envelope supernova SN 2016coi and the fast blue optical transient AT2018cow, we find strong evidence for inhomogeneities in SN 2016coi and asymmetry in AT2018cow, and constrain the properties of their emitting regions. Our results establish SSA spectra as a powerful, model-independent probe of unresolved structure in high-energy transients, including supernovae, FBOTs, tidal disruption events, and gamma-ray bursts."
      },
      { time: "10:30-11:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "11:00-11:30", task: "Invited talk 5", speaker: "Christina Thöne", type: "invited" },
      { time: "11:30-11:50", task: "Contributed talk 11", speaker: "-", type: "contributed" },
      { time: "11:50-14:00", task: "Lunch", speaker: "-", type: "general" },
      { time: "14:00-14:30", task: "Invited talk 6", speaker: "Shiang-Yu Wang", type: "invited",
        title: "The status of the Transneptunian Automated Occultation Survey",
        abstract: "The Transneptunian Automated Occultation Survey (TAOS II) aims to measure the size distribution of small (D ~ 1 km) Trans-Neptunian Objects. Such objects are very faint (r' > 40) and are undetectable by even the largest telescopes. TAOS II is a blind survey, designed to simultaneously monitor many stars (typically 5000) at a 20 Hz cadence in order to detect serendipitous occultation events. TAOS II is operating three 1.3 m telescopes at San Pedro Martir Observatory in Baja California, Mexico. Each telescope is equipped with a custom 88 Mpix CMOS camera, capable of reading out up to 12,000 sub-frames around our target stars at a cadence of 20 Hz. TAOS II began survey operations in 2025 September, and has already collected well over one-million star-hours of high-cadence photometry. In this presentation, the performance of the TAOS II system will be presented, along with statistics of the observations."
      },
      { time: "14:30-14:50", task: "Contributed talk 12", speaker: "-", type: "contributed" },
      { time: "14:50-15:10", task: "Contributed talk 13", speaker: "-", type: "contributed" },
      { time: "15:10-15:30", task: "Contributed talk 14", speaker: "-", type: "contributed" },
      { time: "15:30-16:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "16:00-18:00", task: "TP2m discussions", speaker: "-", type: "tp2m" },
      { time: "19:00-", task: "conference dinner", speaker: "-", type: "general" },
    ],
  },
  "Day 4": {
    date: "Aug 27",
    weekday: "Thursday",
    events: [
      { time: "09:10-09:40", task: "Invited talk 7", speaker: "Juan Hernández Santisteban", type: "invited",
        title: "TBD",
        abstract: "Active galactic nuclei (AGN) exhibit variability across a wide range of timescales and wavelengths, offering a powerful probe of accretion onto supermassive black holes. In this talk, I will present results from the AGN monitoring Key Projects conducted with the Las Cumbres Observatory (LCO) global robotic telescope network. Robotic facilities enable efficient, homogeneous, and high-cadence observations over months to years, providing datasets that are difficult to obtain with traditionally scheduled telescopes. By tracking continuum variations across multiple wavelengths, we can measure inter-band time delays that reveal the structure and temperature profile of AGN accretion discs. At the same time, spectroscopic monitoring captures the delayed response of broad emission lines, allowing us to isolate the broad-line region and map its geometry and dynamics through reverberation mapping. When combined with complementary space-based UV and X-ray observations, these multiwavelength campaigns provide powerful constraints on the physical origin of AGN variability. I will discuss recent results on accretion-disc structure, black hole mass measurements, and the emerging potential of continuum reverberation-mapped AGN as cosmological distance indicators, illustrating the unique role of robotic telescope networks in modern time-domain astrophysics."
      },
      { time: "09:40-10:00", task: "Contributed talk 15", speaker: "-", type: "contributed" },
      { time: "10:00-10:20", task: "Contributed talk 16", speaker: "-", type: "contributed" },
      { time: "10:20-10:40", task: "Contributed talk 17", speaker: "-", type: "contributed" },
      { time: "10:40-11:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "11:00-11:30", task: "Invited talk 8", speaker: "Kaew Samaporn Tinyanont", type: "invited",
        title: "Probing circumstellar medium near and far in core-collapse supernovae using robotic spectroscopy and near-infrared imaging",
        abstract: "Mass loss is crucial to the evolution of massive stars, dictating their final structure at death and responsible for the observed diversity in the population of core-collapse supernovae (CCSNe). Multiple mechanisms are at play, from wind-driven mass loss, binary interaction, and eruption responsible for dense circumstellar medium (CSM) seen in some CCSNe. Observing the SN shock and light interact with the CSM can help us reconstruct the mass loss history and constrain the relative contributions from these mechanisms. I will discuss rapid robotic spectroscopy, to be enabled by TP2m and similar facilities like DARTS on the 2.4-m APF, of young CCSNe to constrain the most close-in CSM ejected only years to decades before death, likely associated with late-stage nuclear burning instabilities. I will also discuss using near-infrared (IR) imaging to catch emerging IR echoes from the CSM dust far from the progenitor star. Such observations can be used to measure the geometry of the CSM, in turn constraining the mass loss mechanism. I will discuss the recent observations of SN 2024aecx as a test case. Surveying for IR echoes in a large number of stripped-envelope SNe, to be made possible for the first time with TP2m, will help us identify the mechanism responsible for hydrogen stripping in stripped envelope SNe.",
       },
      { time: "11:30-11:50", task: "Contributed talk 18", speaker: "-", type: "contributed" },
      { time: "11:50-14:00", task: "Lunch", speaker: "-", type: "general" },
      { time: "14:00-14:30", task: "Invited talk 9 (Remote)", speaker: "Antonio Martín-Carrillo", type: "invited" },
      { time: "14:30-14:50", task: "Contributed talk 19", speaker: "-", type: "contributed" },
      { time: "14:50-15:10", task: "Contributed talk 20", speaker: "-", type: "contributed" },
      { time: "15:10-15:30", task: "Contributed talk 21", speaker: "-", type: "contributed" },
      { time: "15:30-16:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "16:00-16:20", task: "Contributed talk 22", speaker: "-", type: "contributed" },
      { time: "16:20-16:40", task: "Contributed talk 23", speaker: "-", type: "contributed" },
      { time: "16:40-17:00", task: "Contributed talk 24", speaker: "-", type: "contributed" },
    ],
  },
  "Day 5": {
    date: "Aug 28",
    weekday: "Friday",
    events: [
      { time: "-", task: "Cultural excursion (Details Coming Soon)", speaker: "-", type: "others" },
    ],
  },
};

type DayKey = keyof typeof AGENDA_DATA;

/* 小箭頭 icon（避免額外安裝套件，直接用 inline SVG） */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className={`h-5 w-5 text-blue-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function ProgramPage() {
  const [activeDay, setActiveDay] = useState<DayKey>("Day 1");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleDayChange = (day: DayKey) => {
    setActiveDay(day);
    setOpenIdx(null); // 換日重置展開狀態
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Background Section */}
      <div className="relative h-[60vh] w-full bg-[url('/image/tp2m.png')] bg-cover bg-[center_27%] bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/65" />

        {/* Title */}
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
          {/* @ts-ignore */}
          <Typography variant="h1" color="white" className="mb-6 text-4xl lg:text-7xl font-bold tracking-tight">
            Program Schedule
          </Typography>
          {/* @ts-ignore */}
          <Typography variant="h4" color="white" className="text-3xl opacity-80 font-normal">
            August 24 - 28, 2026
          </Typography>
        </div>
      </div>

      {/* Day switch buttons */}
      <div className="container mx-auto px-8 -mt-10 relative z-20">
        <div className="flex justify-center gap-4 lg:gap-8">
          {(Object.keys(AGENDA_DATA) as DayKey[]).map((day) => (
            /* @ts-ignore */
            <Button
              key={day}
              onClick={() => handleDayChange(day)}
              variant="gradient"
              color={activeDay === day ? "blue" : "blue-gray"}
              className={`flex flex-col items-center rounded-2xl px-6 lg:px-12 py-3 shadow-xl transition-all ${
                activeDay === day ? "scale-110" : "hover:scale-105"
              }`}
            >
              <span className="text-xl opacity-70 uppercase mb-0.7">{day}</span>
              <span className="text-sm font-bold">{AGENDA_DATA[day].date}</span>
            </Button>
          ))}
        </div>

        {/* Agenda Content */}
        <div className="mt-12 max-w-5xl mx-auto pb-24">
          {/* @ts-ignore */}
          <Card className="shadow-lg border border-gray-100 rounded-3xl">
            {/* @ts-ignore */}
            <CardBody className="p-8 lg:p-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-gray-100 pb-6">
                {/* @ts-ignore */}
                <Typography variant="h3" color="blue-gray" className="font-bold items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  {activeDay} Schedule
                </Typography>
                {/* @ts-ignore */}
                <Typography variant="h5" className="text-black-500 font-medium mt-2 md:mt-0">
                  {AGENDA_DATA[activeDay].weekday}, {AGENDA_DATA[activeDay].date} 2026
                </Typography>
              </div>

              <div className="space-y-2">
                {AGENDA_DATA[activeDay].events.map((item, idx) => {
                  const hasDetail = Boolean(item.title || item.abstract);
                  const isOpen = openIdx === idx;

                  return (
                    <div
                      key={idx}
                      className={`group rounded-2xl transition-all ${
                        hasDetail ? "hover:shadow-md" : ""
                      } ${TYPE_STYLES[item.type] || "bg-white"} ${isOpen ? "shadow-md ring-1 ring-blue-200" : ""}`}
                    >
                      {/* ---------- Header row（可點擊） ---------- */}
                      <div
                        role={hasDetail ? "button" : undefined}
                        tabIndex={hasDetail ? 0 : undefined}
                        aria-expanded={hasDetail ? isOpen : undefined}
                        onClick={() => hasDetail && setOpenIdx(isOpen ? null : idx)}
                        onKeyDown={(e) => {
                          if (hasDetail && (e.key === "Enter" || e.key === " ")) {
                            e.preventDefault();
                            setOpenIdx(isOpen ? null : idx);
                          }
                        }}
                        className={`flex flex-col md:flex-row md:items-center gap-6 py-5 px-6 ${
                          hasDetail ? "cursor-pointer" : "cursor-default"
                        }`}
                      >
                        {/* Time */}
                        <div className="md:w-36 shrink-0">
                          {/* @ts-ignore */}
                          <Typography className="text-xl font-bold text-blue-600 whitespace-nowrap">
                            {item.time}
                          </Typography>
                        </div>

                        {/* Task */}
                        <div className="flex-1">
                          {/* @ts-ignore */}
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="group-hover:text-blue-800 transition-colors leading-tight"
                          >
                            {item.task}
                          </Typography>
                        </div>

                        {/* Speaker */}
                        <div className="md:w-72 shrink-0">
                          {/* @ts-ignore */}
                          <Typography className="text-[11px] font-bold uppercase tracking-widest text-blue-gray-400 mb-1">
                            Speaker
                          </Typography>
                          {/* @ts-ignore */}
                          <Typography className="text-blue-gray-900 text-base font-semibold whitespace-nowrap">
                            {item.speaker}
                          </Typography>
                        </div>

                        {/* Chevron（沒有內容時留白佔位，維持對齊） */}
                        <div className="w-5 shrink-0 hidden md:flex justify-center">
                          {hasDetail && <ChevronIcon open={isOpen} />}
                        </div>
                      </div>

                      {/* ---------- 下拉內容 ---------- */}
                      {hasDetail && (
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="mx-6 mb-5 rounded-xl border border-blue-gray-100 bg-white/70 p-6">
                              {item.title && (
                                <>
                                  {/* @ts-ignore */}
                                  <Typography className="text-[11px] font-bold uppercase tracking-widest text-blue-gray-400 mb-1">
                                    Title
                                  </Typography>
                                  {/* @ts-ignore */}
                                  <Typography variant="h6" color="blue-gray" className="mb-4 leading-snug">
                                    {item.title}
                                  </Typography>
                                </>
                              )}
                              {item.abstract && (
                                <>
                                  {/* @ts-ignore */}
                                  <Typography className="text-[11px] font-bold uppercase tracking-widest text-blue-gray-400 mb-1">
                                    Abstract
                                  </Typography>
                                  {/* @ts-ignore */}
                                  <Typography className="text-blue-gray-800 text-[15px] leading-relaxed whitespace-pre-line text-justify">
                                    {item.abstract}
                                  </Typography>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}