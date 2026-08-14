"use client";
import React from "react";
import {Typography, Card, CardBody, Avatar} from "@material-tailwind/react";

// Speaker info
const SPEAKERS_DATA = [
  {
    name: "Antonio Martín-Carrillo",
    affiliation: "University College Dublin",
    avatar: "/image/Antonio Martín-Carrillo.png", // figure
    bio: [
      {
        text: "Antonio Martín-Carrillo is a UCD Ad Astra Fellow / Assistant Professor in the School of Physics and a member of the Space Science Group at University College Dublin. His research focuses on the transient Universe, in particular the prompt and afterglow emission of gamma-ray bursts, using high-energy space observatories together with ground-based facilities such as UCD's Watcher robotic telescope. He is a member of the INTEGRAL multi-messenger group searching for gamma-ray counterparts to gravitational-wave and neutrino events, and of the ATHENA and THESEUS mission consortia. He is also an ambassador and collaborator on the Astropy project."
      }
    ],
    fields: ["Gamma-Ray Bursts", "Pulsars", "high-mass X-ray binaries", "robotic telescopes"]
  },
  {
    name: "Bing Zhang",
    affiliation: "The University of Hong Kong",
    avatar: "/image/Bing Zhang.png", // figure
    bio: [
      {
        text: "Bing Zhang is Chair Professor of Astrophysics and Global STEM Scholar in the Department of Physics at the University of Hong Kong, and Founding Director of the Hong Kong Institute for Astronomy and Astrophysics (HKIAA). He is a theoretical astrophysicist working on high-energy astrophysics — black holes of various scales, neutron stars of various species, and the relativistic jets they launch. He is a world leader on the physical mechanisms of gamma-ray bursts, and in recent years has devoted most of his research to multi-messenger astrophysics and fast radio bursts. He serves as Mission Scientist for the Chinese–French SVOM GRB mission and chairs the multi-messenger science topical panel of the Einstein Probe, and was PI of the FAST FRB Key Science Project (2020–2025). He is the author of The Physics of Gamma-Ray Bursts and a Fellow of the American Physical Society."
      },
    ],
    fields: ["Gamma-Ray Bursts", "Fast radio bursts", "Electromagnetic counterparts of gravitational waves"]
  },
  {
    name: "Christina Thöne",
    affiliation: "Georgian National Astrophysical Observatory",
    avatar: "/image/Christina Thöne.png", // figure
    bio: [
      {
        text: "(?) Christina C. Thöne is an observational astrophysicist at the Astronomical Institute of the Czech Academy of Sciences (Ondřejov). Her research centres on optical and near-infrared spectroscopy of massive stellar explosions and star-forming galaxies, with particular expertise in integral field spectroscopy. She works on supernova progenitors, high-redshift galaxies, and the chemical evolution of the Universe. She also holds a master's certificate in project management for technological projects in astronomy, and is active in university teaching and multilingual public outreach."
      },
    ],
    fields: ["Gamma-Ray Bursts", "Supernovae", "Galaxy"]
  },
  {
    name: "Fabio De Colle",
    affiliation: "Institute of Nuclear Sciences ICN-UNAM",
    avatar: "/image/Fabio De Colle.png", // figure
    bio: [
      {
        text: "Fabio De Colle is a researcher at the Instituto de Ciencias Nucleares, Universidad Nacional Autónoma de México (UNAM), where he heads the department covering computational astrophysics. His research focuses on relativistic astrophysics and the physics of jets and high-energy transients — gamma-ray bursts, core-collapse supernovae, tidal disruption events, and common envelopes — using large-scale numerical simulations and high-performance computing to study their dynamics, radiation, and interaction with complex environments. He is the lead developer of the Mezcal code, a high-performance framework for Newtonian and relativistic hydrodynamics and MHD using adaptive mesh refinement and MPI parallelisation, and has recently incorporated machine learning and data science techniques into both simulation analysis and physical modelling."
      }
    ],
    fields: ["Gamma-Ray Bursts", "Core-collapse supernovae", "Tidal disruption events"]
  },
  {
    name: "Juan Hernández Santisteban",
    affiliation: "University of St Andrews",
    avatar: "/image/Juan Venancio.png", // figure
    bio: [
      {
        text: "Juan V. Hernández Santisteban is a Lecturer in Astronomy at the School of Physics and Astronomy, University of St Andrews. His research involves multi-wavelength — X-ray, ultraviolet, optical and infrared — observations of accreting compact objects, including white dwarfs, neutron stars, and stellar-mass and supermassive black holes. He is PI of a Las Cumbres Observatory Key Project carrying out reverberation mapping of active galactic nuclei using a world-wide network of telescopes, and is also active in transient astronomy and instrumentation as part of the science team behind OPTICam."
      },
    ],
    fields: ["Active Galactic Nuclei", "Accretion Physics", "Compact Objects"]
  },
  {
    name: "Kaew Samaporn Tinyanont",
    affiliation: "National Astronomical Research Institute of Thailand",
    avatar: "/image/Kaew Samaporn Tinyanont.png", // figure
    bio: [
      {
        text: "Samaporn Kaew Tinyanont is a Staff Researcher at the National Astronomical Research Institute of Thailand (NARIT). He is an observational astronomer using telescopes around the world and in space to study the life and death of massive stars. Working from the ultraviolet to the infrared, he follows core-collapse supernovae from days to decades after explosion to trace their explosion properties, progenitor mass-loss history and circumstellar environment, and the new molecules and dust that form in the cooling, expanding ejecta. He also has a background in instrumentation, having built WIRC+Pol, a low-resolution spectropolarimeter used to probe the geometry of supernovae, dust-producing massive stars, and brown dwarf atmospheres."
      },
    ],
    fields: ["Core-collapse supernovae", "Infrared observations", "Circumstellar interaction"]
  },
  {
    name: "Ramandeep Gill",
    affiliation: "Universidad Nacional Autónoma de México",
    avatar: "/image/Ramandeep Gill.png", // figure
    bio: [
      {
        text: "Ramandeep Gill is an Assistant Professor at the Instituto de Radioastronomía y Astrofísica (IRyA), UNAM. He is a theoretical astrophysicist working on compact objects, strong magnetic fields, and relativistic outflows — in particular the physics of magnetized jets in gamma-ray bursts, multi-messenger signals from binary neutron star mergers, and the magnetic energy dissipation that drives flaring activity in magnetars. His work spans spectro-polarimetric modelling of high-energy emission, radiative transfer and kinetic simulations, jet geometry and composition, and relativistic plasma processes including magnetic reconnection and turbulence."
      },
    ],
    fields: ["Gamma-ray bursts", "Magnetars", "Relativistic plasmas"]
  },
  {
    name: "Shiang-Yu Wang",
    affiliation: "Institute of Astronomy & Astrophysics, Academia Sinica",
    avatar: "/image/Shiang-Yu Wang.png", // figure
    bio: [
      {
        text: "Shiang-Yu Wang is a Research Fellow at the Academia Sinica Institute of Astronomy and Astrophysics (ASIAA), where he leads the optical/infrared instrumentation group. His work centres on optical and infrared astronomical instrumentation, including WIRCam and SPIRou for CFHT, Hyper Suprime-Cam and the Prime Focus Spectrograph (PFS) for the Subaru Telescope, METIS for ELT and GMTNIRS and G-CLEF for GMT. He is also project PI of the Taiwan-America Occultation Survey (TAOS) and the Transneptunian Automated Occultation Survey (TAOS2), and works on the development of novel infrared detectors and single photon detectors in collaboration with Taiwanese companies and research institutes."
      },
    ],
    fields: ["Astronomical instrumentation", "Optical & infrared detectors", "Small solar system bodies"]
  },
];

export default function SpeakerPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      
      {/* Background */}
      <div className="relative h-[60vh] w-full bg-[url('/image/tp2m.png')] bg-cover bg-[center_27%] bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/65" />
        
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
          {/* @ts-ignore */}
          <Typography variant="h1" color="white" className="mb-6 text-4xl lg:text-7xl font-bold tracking-tight">
            Invited Speakers
          </Typography>
          {/* @ts-ignore */}
          <Typography variant="lead" color="white" className="text-3xl opacity-80">
            TP2M Project Collaborators
          </Typography>
        </div>
      </div>

      {/* speaker info */}
      <div className="container mx-auto px-8 mt-10 relative z-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {SPEAKERS_DATA.map((s, idx) => (
            /* @ts-ignore */
            <Card 
            key={idx} 
            className="relative border border-gray-200 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300 overflow-hidden rounded-3xl bg-white group">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* @ts-ignore */}
              <CardBody className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 p-12">                
                {/* photo */}
                <div className="flex justify-center md:justify-start items-start">
                  {/* @ts-ignore */}
                  <Avatar 
                    src={s.avatar} 
                    alt={""} 
                    className="h-[240px] w-[240px] rounded-3xl border-4 border-gray-100 shadow-xl"
                  />
                </div>

                {/* name & info */}
                <div>
                  {/* @ts-ignore */}
                  <Typography variant="h2" color="blue-gray" className="mb-1 text-5xl font-extrabold tracking-tighter">
                    {s.name}
                  </Typography>
                  {/* @ts-ignore */}
                  <Typography className="text-gray-700 text-2xl font-medium mb-10 pb-4 border-b border-gray-100">
                    {s.affiliation}
                  </Typography>

                  <div className="space-y-8 mb-10">
                    {s.bio.map((item, bIdx) => (
                      <div key={bIdx} className="flex gap-4 items-start">
                        {/* @ts-ignore */}
                        <Typography className="text-gray-700 font-normal leading-relaxed">
                          {item.text}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  {/* labels */}
                  <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                  {/* @ts-ignore */}
                    <Typography variant="small" color="blue-gray" className="font-bold uppercase mb-4 tracking-wider">
                      Research Fields
                    </Typography>
                    <div className="flex flex-wrap gap-3">
                      {s.fields.map((field, fIdx) => (
                        <div key={fIdx} className="bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
                          {/* @ts-ignore */}
                          <Typography className="text-gray-800 font-medium text-sm">
                            {field}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

// 

function GraduationCapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.7 2.805a.75.75 0 01.6 0l9.45 4.05a.75.75 0 010 1.38l-9.45 4.05a.75.75 0 01-.6 0L2.25 8.235a.75.75 0 010-1.38l9.45-4.05zM21.543 12.148a.75.75 0 01.31 1.013 11.25 11.25 0 01-19.706 0 .75.75 0 111.323-.71 9.75 9.75 0 0017.06 0 .75.75 0 011.013-.31zM16.851 7.56l-4.851 2.079-4.851-2.079 4.851-2.079 4.851 2.079z" />
      <path d="M12.54 14.31a.75.75 0 01.812-.397 10.71 10.71 0 005.148.513.75.75 0 11.16 1.492 12.21 12.21 0 01-5.871-.585.75.75 0 01-.249-1.023zM6.783 15.643a.75.75 0 01.31 1.013 12.21 12.21 0 01-5.148-.513.75.75 0 11.16-1.492 10.71 10.71 0 005.148.513.75.75 0 01.31-1.013z" />
    </svg>
  );
}

function TelescopeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v5.25H6a.75.75 0 000 1.5h6a.75.75 0 00.75-.75V6z" clipRule="evenodd" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.257a9.002 9.002 0 018.17 8.17.75.75 0 011.5 0v.75a.75.75 0 01-1.5 0c0-.181-.112-.338-.258-.431A7.5 7.5 0 1018.75 18.75c.093.146.25.258.431.258h.75a.75.75 0 010 1.5H12a12 12 0 01-12-12v-.75a.75.75 0 01.75-.75h.257A9.002 9.002 0 018.17 3.258V3a.75.75 0 01.75-.75zM12 6.75a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75V6a.75.75 0 010-.75z" clipRule="evenodd" />
    </svg>
  );
}