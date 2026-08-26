"use client";
import React, { useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";

function MathText({ children }: { children: string }) {
  if (!children) return null;
  const parts = children.split(/(\$[^$]+\$)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("$") && p.endsWith("$") ? (
          <span
            key={i}
            className="whitespace-nowrap"
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(p.slice(1, -1), {
                throwOnError: false,
              }),
            }}
          />
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

// background colors
const TYPE_STYLES: Record<string, string> = {
  general:     "bg-yellow-50",    // Registration、Opening
  tp2m:        "bg-red-50",       // TP2m overview / discussion
  invited:     "bg-orange-50",    // invited talk
  contributed: "bg-teal-50",      // contributed talk
  break:       "bg-brown-50",     // break / poster
  social:      "bg-purple-50",    // social events
  others:      "bg-white",        // any other events
  session:     "bg-blue-gray-50", 
};

type AgendaEvent = {
  time: string;
  task: string;
  speaker: string;
  type: string;
  chair?: string;
  title?: string;      
  abstract?: string;
  agendaItems?: string[];
  links?: { label: string; url: string }[];
};

// Program data
const AGENDA_DATA: Record<string, { date: string; weekday: string; events: AgendaEvent[] }> = {
  "Day 1": {
    date: "Aug 24",
    weekday: "Monday",
    events: [
      { time: "", task: "Morning Session", speaker: "-", type: "session", chair: "Wen-Ping Chen" },
      { time: "09:00-10:00", task: "Registration", speaker: "-", type: "general" },
      { time: "10:00-10:30", task: "Self-introduction", speaker: "-", type: "general" },
      { time: "10:30-11:00", task: "Break/Poster", speaker: "-", type: "break" },
      { time: "11:00-11:50", task: "TP2m discussion 1", speaker: "-", type: "tp2m",
        agendaItems: [
          "Telescope and Site Status",
          "Instrumentation and Science Requirements",
          "Project Timeline and Key Milestones",
          "Project Management and Governance",
        ],
       },
      { time: "", task: "Lunch", speaker: "-", type: "session" },
      { time: "11:50-14:00", task: "Lunch", speaker: "-", type: "general" },
      { time: "", task: "Afternoon Session", speaker: "-", type: "session", chair: "Ting-Wan Chen" },
      { time: "14:00-15:30", task: "TP2m discussion 2", speaker: "-", type: "tp2m",
        agendaItems: [
          "Telescope Operations",
          "Observation Scheduling",
          "Time-Sharing Framework",
          "Policy for the 30% ToO Time",
          "MoU and Coordination with COLIBRI",
        ],
       },
      { time: "15:30-16:00", task: "Break/Poster", speaker: "-", type: "break" },
      { time: "16:00-17:00", task: "TP2m discussion 3", speaker: "-", type: "tp2m",
        agendaItems: [
          "Summary, Decisions, and Action Items",
        ],
       },
    ],
  },
  "Day 2": {
    date: "Aug 25",
    weekday: "Tuesday",
    events: [
      { time: "", task: "Morning Session", speaker: "-", type: "session", chair: "Sheng Yang" },
      { time: "08:30-08:50", task: "Registration", speaker: "-", type: "general" },
      { time: "08:50-09:00", task: "Opening remark", speaker: "Zong-Hong Zhu", type: "general" },
      { time: "09:00-09:30", task: "TP2m overview talk", speaker: "Wen-Ping Chen", type: "tp2m",
        title: "The Trans-Pacific 2-m Telescope Project: Status and Perspectives", 
        abstract: "",
      },
      { time: "09:30-09:50", task: "Contributed talk 1", speaker: "Antonio de Ugarte Postigo", type: "contributed",
        title: "Two years of observations of COLIBRÍ at San Pedro Mártir Observatory",
        abstract: ""
       },
      { time: "09:50-10:10", task: "Contributed talk 2", speaker: "Rosa Leticia Becerra Godínez ", type: "contributed",
        title: "The Role of Optical Observations in the Einstein Probe Era for Unraveling the Nature of This New Population",
        abstract: "Fast X-ray Transients (FXTs) are short-lived high-energy events whose physical origins remain largely uncertain. The launch of Einstein Probe in 2024 has dramatically changed this landscape, revealing a growing population of soft X-ray transients and enabling systematic multi-wavelength follow-up. In this talk, I will discuss how optical observations of recent events are helping us constrain their distances, temporal evolution, environments, and possible progenitors.\nI will highlight the importance of rapid multi-band photometry, deep imaging, and spectroscopy for unveiling the physical diversity of FXTs. Finally, I will discuss the opportunities offered by TP2m and its potential complementarity with rapid-response facilities such as COLIBRÍ for studying this emerging population in the Einstein Probe era."
       },
      { time: "10:10-10:30", task: "Contributed talk 3", speaker: "Ting-Wan Chen", type: "contributed",
        title: "Rapid Follow-up with the Lulin 1-m Telescope: Lessons for a Future 2-m Time-Domain Facility",
        abstract: "Rapid follow-up observations are essential for time-domain astronomy, where the scientific value of many events depends on observations obtained within hours to days after discovery. Over the past years, the Lulin 1-m Telescope has provided a flexible platform for responding to a broad range of time-sensitive targets, including young supernovae, fast-evolving transients, GRBs and fast X-ray transients. In this talk, I will present Taiwan’s experience in building a rapid follow-up framework around the Lulin telescopes. I will highlight several science cases, including early multi-colour observations of the nearby Type IIP supernova 2024ggi, optical follow-up of Einstein Probe fast X-ray transients, and rapid characterisation of newly discovered or unusual transients. I will also discuss practical aspects of target selection, observing cadence, multi-colour photometry, and coordination with international discovery and follow-up networks. These experiences provide useful guidance for the science planning of a future 2-m telescope, which can extend rapid follow-up to fainter targets and support a broader range of transient science."
       },
      { time: "10:30-11:00", task: "Break/Poster", speaker: "-", type: "break" },
      { time: "11:00-11:20", task: "Contributed talk 4", speaker: "Laurence Sabin", type: "contributed",
        title: "Searching for the Missing Members of the Galactic Evolved Stellar Population with the TP2m",
        abstract: "Evolved stellar populations, including planetary nebulae, symbiotic stars, and cataclysmic variables, represent critical, yet incompletely catalogued, stages of stellar evolution. Despite systematic surveys, a substantial fraction of the Galactic population of these objects and surrounding nebulae remains undiscovered or unconfirmed, limiting our understanding of late-stage stellar evolution, binary interaction, and mass-loss processes. This project aims to identify and characterise newly detected evolved stars through dedicated photometric and spectroscopic follow-up using the TP2m. Candidates drawn from (recent) narrow-band imaging surveys  will be observed to confirm their nature, measure key diagnostic emission-line ratios, and derive fundamental stellar and nebular parameters such as temperature, luminosity, chemical abundances, and morphology. Particular attention will be given to distinguishing true planetary nebulae from mimics and to characterising symbiotic stars as well as cataclysmic variable systems exhibiting outburst or variability signatures. The resulting dataset will expand the census of Galactic evolved stars, providing new candidates for population studies and constraints on stellar evolutionary models."
       },
      { time: "11:20-11:40", task: "Contributed talk 5", speaker: "Ping Chen", type: "contributed",
        title: "Explore massive binary evolution with supernova-related phenomena"
       },
      { time: "", task: "Lunch", speaker: "-", type: "session" },
      { time: "11:40-14:00", task: "Lunch", speaker: "-", type: "general" },
      { time: "", task: "Afternoon Session", speaker: "-", type: "session", chair: "Chow-Choong Ngeow" },
      { time: "14:00-14:30", task: "Invited talk 1", speaker: "Ramandeep Gill", type: "invited",
        title: "A Complete Understanding of GRB Jets and their Environments from Afterglow Lightcurve and Polarization",
        abstract: "Gamma-ray bursts (GRBs) are powered by narrowly collimated ultra-relativistic jets, emission from which is tightly beamed in the direction of motion. Only a modest fraction (around 10 - 20 per cent) of the total energy in these jets power the short-lived but bright “prompt” gamma-ray burst, while the remaining kinetic energy is emitted over weeks to months in a broadband synchrotron “afterglow”. The afterglow is produced when the jet is slowed down by sweeping up the external medium in its path. This long-lasting emission, in particular the optical emission, holds several clues to unravel the properties of the jet and the environment in which it propagates. For example, in some cases, the peak of the optical afterglow is used to constrain the radius where the jet decelerates and that in turn is used to constrain its initial bulk Lorentz factor. As the jet slows down, the angular size of the observable jet surface grows. This allows to probe its angular structure, which is not so well understood, and its knowledge has direct implications for the jet composition (strongly or weakly magnetized jet) and the physics of jet break out from the confining medium, i.e. stellar envelope for collapsars and dynamical ejecta for merger-driven bursts. Finally, optical afterglow polarization measurements are an indispensable tool to learn about the poorly understood magnetic field structure in both the relativistic ejecta and that produced at the collisionless external forward shock. This talk will present several examples of how the broadband modeling of the afterglow lightcurve and polarization can be used to understand the dynamics, angular structure, and magnetic field composition in GRB jets as well as the properties of the environment in which GRB progenitors are born.",
      },
      { time: "14:30-14:50", task: "Contributed talk 6", speaker: "Diego González Buitrago", type: "contributed" },
      { time: "14:50-15:10", task: "Contributed talk 7", speaker: "Wenwen Zuo", type: "contributed",
        title: "Investigating the variability of low mass AGN candidates",
        abstract: ""
       },
      { time: "15:10-15:30", task: "Contributed talk 8", speaker: "Lei Hao", type: "contributed",
        title: "From Space to Extremely Large Telescopes: The Development of Integral Field Spectroscopy in China",
        abstract: "Spectroscopy has been a cornerstone of astronomical discovery for more than a century. In recent decades, the emergence of Integral Field Spectroscopy (IFS), which combines imaging and spectroscopy into a unified three-dimensional observational framework, has fundamentally changed the way astronomers study the Universe. By simultaneously measuring spatial distributions, kinematics, and physical conditions, IFS has become one of the most influential observational capabilities on modern optical telescopes.\nIn parallel with the international developments, China has been building its own integral field spectroscopy capabilities. This talk will present recent progress in the development of Chinese IFS instrumentation, focusing on two representative projects spanning both space- and ground-based astronomy. The first is the Integral Field Spectrograph onboard the Chinese Space Station Telescope (CSST-IFS), which will provide stable, high-spatial-resolution spectroscopy from space. The second is CUBWISE, a proposed blue-optimized wide-field integral field spectrograph for China’s future 14.5-m optical/infrared telescope, designed to deliver large-scale three-dimensional spectroscopic mapping with unprecedented sensitivity in the northern sky.\nParticular emphasis will be placed on the key enabling technologies behind these instruments, including image slicer design and fabrication, optical architecture, detector systems, and large-volume data reconstruction pipelines. The talk will also discuss how these facilities form a coherent roadmap toward establishing internationally competitive three-dimensional spectroscopic capabilities in China and enabling frontier research on galaxy ecosystems, baryonic matter cycling, dark matter distributions, and transient phenomena."
       },
      { time: "15:30-16:00", task: "Break/Poster", speaker: "-", type: "break" },
      { time: "16:00-16:20", task: "Contributed talk 9", speaker: "Sergei Jarikov", type: "contributed" },
      { time: "16:20-16:40", task: "Contributed talk 10", speaker: "Praveen Kumar Dhankar", type: "contributed",
        title: "Bayesian Analysis of Viscous Modified Cosmic Chaplygin Gas in FRW Universe with a Cosmological Constant",
        abstract: "In this work, we have studied the viscous Modified Cosmic Chaplygin Gas (MCCG) in the appearance of acosmological constant within the FRW model of the universe. We assume that the bulk viscosity ξ and thecosmological constant Λ are linear combinations of two terms: one constant and the other dependent on thedark energy density ρ. In this work, we solve the resulting non-linear differential equations both analyticallyand numerically, obtaining the time evolution of the dark energy density. Using detailed calculations withinthe FRW framework, we derive an H(z) model and constrain its parameters through Bayesian statistical anal-ysis, specifically via the Markov Chain Monte Carlo (MCMC) method, employing observational Hubble data(OHD), the Pantheon Plus, RSD, Union3 and DESI BAO datasets. Additionally, we have employed combineddatasets such as CC+PP,CC+PP+RSD, CC+PP+RSD+DESI and CC+PP+RSD+DESI+Union3."
       },
      { time: "16:00-17:00", task: "TP2m discussion 4", speaker: "-", type: "tp2m"},
    ],
  },
  "Day 3": {
    date: "Aug 26",
    weekday: "Wednesday",
    events: [
      { time: "", task: "Morning Session", speaker: "-", type: "session", chair: "Diego Hernando González Buitrago" },
      { time: "09:10-09:40", task: "Invited talk 3", speaker: "Bing Zhang", type: "invited",
        title: "Multi-wavelength, multi-messenger astrophysics in the EP & SVOM era",
        abstract: "I will review multi-wavelength, multi-messenger astrophysics in the area of cosmological transients such as gamma-ray bursts and fast X-ray transients, with emphasize on the recent observational progress led by Einstein Probe and SVOM as well as theoretical understanding of the rich phenomena."
       },
      { time: "09:40-10:00", task: "Contributed talk 11 (Remote)", speaker: "Gagik Tovmassian", type: "contributed" },
      { time: "10:00-10:30", task: "Invited talk 4 (Remote)", speaker: "Fabio De Colle", type: "invited", 
        title: "Constraining inhomogeneities in SNe, FBOTs, and other high-energy transients from unresolved radio observations",
        abstract: String.raw`Synchrotron emission from high-energy transients is produced by relativistic electrons accelerated by shocks. Since these sources are generally unresolved, constraining the structure of their emitting regions is challenging. Their synchrotron self-absorption (SSA) spectra often show broader turnovers or optically thick slopes shallower than the standard $F_\nu \propto \nu^{5/2}$ prediction, usually interpreted phenomenologically. Here, we show that these deviations can instead be used to directly probe inhomogeneities in unresolved emitting regions. We demonstrate how inhomogeneities modify the low-frequency spectrum and how their properties can be constrained from observations. Applying our method to the stripped-envelope supernova SN 2016coi and the fast blue optical transient AT2018cow, we find strong evidence for inhomogeneities in SN 2016coi and asymmetry in AT2018cow, and constrain the properties of their emitting regions. Our results establish SSA spectra as a powerful, model-independent probe of unresolved structure in high-energy transients, including supernovae, FBOTs, tidal disruption events, and gamma-ray bursts.`
      },
      { time: "10:30-10:40", task: "Conference photo", speaker: "-", type: "general" },
      { time: "10:40-11:00", task: "Break/Poster", speaker: "-", type: "break" },
      { time: "11:00-11:30", task: "Invited talk 5", speaker: "Christina Thöne", type: "invited",
        title: "The host galaxies of GRBs - what do we know and what should we know?",
        abstract: "Long GRB hosts are almost always places of extreme star formation and likely low metallicity since their progenitors are stars of several tens of solar masses with very short lifetimes. Short GRB hosts on the other hand reflect the diverse environments in which neutron star mergers can occur, from still young galaxies to old metal-rich stellar populations. Despite these two major classes with sometimes significant overlap, direct connections between GRB hosts and progenitors are still challenging. In recent years the field has therefore grown in two directions: The first is collecting large samples that make viable statistics possible for the first time, the second one is trying to study the very close environment of the event, which is particularly interesting for long GRBs with very short delay times between progenitor formation and GRB. I will give a short historic overview of the field and then dig deeper into what we have achieved so far in these two directions and what we are still missing. Finally, I will highlight how the TP2M telescope might be able to contribute to study GRB hosts and environments in the era of large sky surveys."
       },
      { time: "11:30-11:50", task: "Contributed talk 12", speaker: "Yun-Wei Yu", type: "contributed" },
      { time: "", task: "Lunch", speaker: "-", type: "session" },
      { time: "11:50-14:00", task: "Lunch", speaker: "-", type: "general" },
      { time: "", task: "Afternoon Session", speaker: "-", type: "session", chair: "Wenwen Zuo" },
      { time: "14:00-14:30", task: "Invited talk 6", speaker: "Shiang-Yu Wang", type: "invited",
        title: "The status of the Transneptunian Automated Occultation Survey",
        abstract: "The Transneptunian Automated Occultation Survey (TAOS II) aims to measure the size distribution of small (D ~ 1 km) Trans-Neptunian Objects. Such objects are very faint (r' > 40) and are undetectable by even the largest telescopes. TAOS II is a blind survey, designed to simultaneously monitor many stars (typically 5000) at a 20 Hz cadence in order to detect serendipitous occultation events. TAOS II is operating three 1.3 m telescopes at San Pedro Martir Observatory in Baja California, Mexico. Each telescope is equipped with a custom 88 Mpix CMOS camera, capable of reading out up to 12,000 sub-frames around our target stars at a cadence of 20 Hz. TAOS II began survey operations in 2025 September, and has already collected well over one-million star-hours of high-cadence photometry. In this presentation, the performance of the TAOS II system will be presented, along with statistics of the observations."
      },
      { time: "14:30-14:50", task: "Contributed talk 13", speaker: "Yilen Gomez Maqueo Chew ", type: "contributed" },
      { time: "14:50-15:10", task: "Contributed talk 14", speaker: "Artem Aguichine", type: "contributed" },
      { time: "15:10-15:30", task: "Contributed talk 15", speaker: "Julio César Ramirez Velez", type: "contributed" },
      { time: "15:30-16:00", task: "Break/Poster", speaker: "-", type: "break" },
      { time: "16:00-18:00", task: "TP2m / sub-group discussions", speaker: "-", type: "tp2m" },
      { time: "", task: "Banquet", speaker: "-", type: "session" },
      { time: "19:00-21:00", task: "Conference dinner", speaker: "-", type: "general" },
    ],
  },
  "Day 4": {
    date: "Aug 27",
    weekday: "Thursday",
    events: [
      { time: "", task: "Morning Session", speaker: "-", type: "session", chair: "Rosa Leticia Becerra Godínez" },
      { time: "09:10-09:40", task: "Invited talk 7", speaker: "Juan Hernández Santisteban", type: "invited",
        title: "Probing the origin of AGN variability with robotic observations",
        abstract: "Active galactic nuclei (AGN) exhibit variability across a wide range of timescales and wavelengths, offering a powerful probe of accretion onto supermassive black holes. In this talk, I will present results from the AGN monitoring Key Projects conducted with the Las Cumbres Observatory (LCO) global robotic telescope network. Robotic facilities enable efficient, homogeneous, and high-cadence observations over months to years, providing datasets that are difficult to obtain with traditionally scheduled telescopes. By tracking continuum variations across multiple wavelengths, we can measure inter-band time delays that reveal the structure and temperature profile of AGN accretion discs. At the same time, spectroscopic monitoring captures the delayed response of broad emission lines, allowing us to isolate the broad-line region and map its geometry and dynamics through reverberation mapping. When combined with complementary space-based UV and X-ray observations, these multiwavelength campaigns provide powerful constraints on the physical origin of AGN variability. I will discuss recent results on accretion-disc structure, black hole mass measurements, and the emerging potential of continuum reverberation-mapped AGN as cosmological distance indicators, illustrating the unique role of robotic telescope networks in modern time-domain astrophysics."
      },
      { time: "09:40-10:00", task: "Contributed talk 16 (Remote)", speaker: "Víctor Manuel Patiño Álvarez", type: "contributed" },
      { time: "10:00-10:20", task: "Contributed talk 17 (Remote)", speaker: "Jonathan U. Guerrero González", type: "contributed",
        title: "Variability-guided Spectroscopic Characterization of BZQ Candidates with TP2m/ESOPO",
        abstract: "We present a variability-guided spectroscopic program aimed at expanding the spectroscopically verified sample of quasar-type blazars (BZQs) in the Roma-5BZCAT. This project builds on our previous SDSS-based study of 610 BZQs, where optical spectroscopy, ZTF variability, and radio morphology were combined to classify sources as Confirmed, Possible, and Non-Confirmed BZQs. However, 1299 Roma-5BZCAT BZQs lack SDSS optical spectra and therefore remain outside the same homogeneous spectroscopic and multiwavelength framework. Using geometric observability from OAN-SPM, ZTF DR24 light curves, and quiescent-state optical magnitudes, we define and prioritize a practical TP2m/ESOPO target sample. The proposed observations will provide single-epoch optical spectra to identify broad emission lines, measure or refine spectroscopic redshifts, and determine which candidates can be incorporated into an expanded BZQ sample. This program highlights the role of TP2m/ESOPO as a dedicated facility for systematic follow-up of variability-selected AGN candidates and as a pathfinder for future time-domain blazar studies."
       },
      { time: "10:20-10:40", task: "Contributed talk 18 (Remote)", speaker: "Emma Margarita Pereyra Talamantes", type: "contributed" },
      { time: "10:40-11:00", task: "Break/Poster", speaker: "-", type: "break" },
      { time: "11:00-11:30", task: "Invited talk 8", speaker: "Kaew Samaporn Tinyanont", type: "invited",
        title: "Probing circumstellar medium near and far in core-collapse supernovae using robotic spectroscopy and near-infrared imaging",
        abstract: "Mass loss is crucial to the evolution of massive stars, dictating their final structure at death and responsible for the observed diversity in the population of core-collapse supernovae (CCSNe). Multiple mechanisms are at play, from wind-driven mass loss, binary interaction, and eruption responsible for dense circumstellar medium (CSM) seen in some CCSNe. Observing the SN shock and light interact with the CSM can help us reconstruct the mass loss history and constrain the relative contributions from these mechanisms. I will discuss rapid robotic spectroscopy, to be enabled by TP2m and similar facilities like DARTS on the 2.4-m APF, of young CCSNe to constrain the most close-in CSM ejected only years to decades before death, likely associated with late-stage nuclear burning instabilities. I will also discuss using near-infrared (IR) imaging to catch emerging IR echoes from the CSM dust far from the progenitor star. Such observations can be used to measure the geometry of the CSM, in turn constraining the mass loss mechanism. I will discuss the recent observations of SN 2024aecx as a test case. Surveying for IR echoes in a large number of stripped-envelope SNe, to be made possible for the first time with TP2m, will help us identify the mechanism responsible for hydrogen stripping in stripped envelope SNe.",
       },
      { time: "11:30-11:50", task: "Contributed talk 19", speaker: "Liangduan Liu", type: "contributed",
        title: "TransFit: Bridging Analytic Models and Radiation-Transport Simulations for Supernova Light Curves",
        abstract: "Supernova light-curve modeling requires a compromise between physical accuracy and computational efficiency. Analytic diffusion models are fast and suitable for parameter inference, but often neglect the spatial and temporal evolution of the ejecta. Detailed radiation-transport simulations provide a more complete physical description, but their computational cost limits their application to large samples.\nI will introduce TransFit, a fast framework for solving time-dependent radiative diffusion in expanding supernova ejecta. The model follows the radial evolution of energy density and temperature, supports flexible heating distributions and evolving opacity, and can consistently combine multiple power sources. Applications to shock cooling, radioactive heating, and double-peaked supernovae will be presented, together with comparisons to analytic and radiation-transport models. I will also discuss extensions to magnetar-powered transients, circumstellar interaction, and hydrogen recombination in Type IIP supernovae. By balancing physical realism with computational efficiency, TransFit provides a practical framework for parameter inference and systematic studies of diverse supernova light curves."
       },
      { time: "", task: "Lunch", speaker: "-", type: "session" },
       { time: "11:50-14:00", task: "Lunch", speaker: "-", type: "general" },
      { time: "", task: "Afternoon Session", speaker: "-", type: "session", chair: "Antonio De Ugarte Postigo" },
      { time: "14:00-14:30", task: "Invited talk 9 (Remote)", speaker: "Antonio Martín-Carrillo", type: "invited",
        title: "Relativistic jets in core-collapse supernovae",
        abstract: "The discovery of GRB 980425 associated with SN 1998bw confirmed the connection between gamma-ray burst (GRBs) and the death of massive stars. Almost 30 years later, we have spectroscopically confirmed around 70 supernovae associated with GRBs. In all cases, the supernova seems to be a broad-lined Ic, that is a fully stripped-envelope core-collapsed supernova with relatively similar physical properties in terms of Nickel mass, ejecta mass and evolution. While this seems to point to a common progenitor, the effect that launching an ultra-relativistic jet may have on the supernova, or what these jets could tell us about the diversity of surrounding environments, are questions still unclear. Answering these questions could be crucial in understanding the true contribution of these events towards the total abundance of heavy elements created via r-process. In particular since most broad-lined Ic are seen without GRB association but still show extremely similar behaviours. In this talk, I will give an overview of the GRB-SN association expanding to the new paradigm provided by Einstein Probe in which we are witnessing broad-lined Ic associated with high-energy emission with a wider diversity of relativistic jets, that is, fully launched, barely failed and fully choked."
       },
      { time: "14:30-14:50", task: "Contributed talk 20", speaker: "Wenxiong Li", type: "contributed",
        title: "Study Supernovae with The Einstein Probe",
        abstract: "I will present recent updates on prompt X-ray emission from supernovae with Einstein Probe. So far, about 10 SNe have been discovered by EP, all classified as broad-lined Type Ic (Ic-BL) SNe. Interestingly, their prompt X-ray emission exhibits unexpected diversity, with potential physical origins ranging from relativistic jets to (relativistic) shock breakouts. These observations offer valuable insights into a range of astrophysical processes, including mass loss, angular momentum transfer, jet formation, energy dissipation between relativistic outflows and stellar envelopes, and the mechanisms powering the initial kinetic energy of supernova explosions."
       },
      { time: "14:50-15:10", task: "Contributed talk 21", speaker: "Lingzhi Wang", type: "contributed",
        title: "CO and Dust formation in Supernovae",
        abstract: "The origins of cosmic dust remain a mystery, with supernovae (SNe) identified as significant contributors to dust production. Molecule formation following SNe explosions plays a crucial role in this process, as it efficiently cools the ejecta to a temperature suitable for dust condensation. To date, carbon monoxide (CO) molecules have been observed in only a few core-collapse SNe. In this talk, I will talk about CO and dust formation in core-collapse and Type Ia SNe.",
        links: [
          { label: "Nature Astronomy (2024)", url: "https://www.nature.com/articles/s41550-024-02197-9" },
        ],
       },
      { time: "15:10-15:30", task: "Contributed talk 22", speaker: "Runduo Liang", type: "contributed",
        title: "Optical Counterparts of Einstein Probe eFXTs: From Archival Surveys to Real-Time Discovery",
        abstract: String.raw`Extragalactic fast X-ray transients (eFXTs) are an emerging class of high-energy phenomena whose physical origins remain largely uncertain. The wide-field, high-sensitivity monitoring capability of the Einstein Probe (EP) has significantly increased the discovery rate of these events.
        We present an ongoing program aimed at identifying optical counterparts to EP-detected eFXT candidates through a systematic search of publicly available optical survey data and transient databases (such as ZTF, LSST, and TNS). We report the first results of this effort, focusing on EP240506a, which we associate with the UV/optical transient AT 2024ofs. Spectroscopic observations of its host galaxy with the Very Large Telescope (VLT) yield a redshift of $z = 0.120 \pm 0.002$. Combining archival survey data with early-time multiwavelength observations, we find that both the luminosity and light-curve evolution of AT 2024ofs are consistent with a core-collapse supernova origin
        Through detectability simulations, we estimate a local event rate density of $\rho = 8.8^{+21.2}_{-3.9}\ \mathrm{yr^{-1}\,Gpc^{-3}}$ for EP240506a-like events. After correcting for observational completeness, we infer a rate of approximately 36--78 $\mathrm{yr^{-1}\,Gpc^{-3}}$ for EP-detected X-ray transients associated with supernovae
        Our one-year search indicates that the main source of contamination arises from chance coincidences due to the large localization uncertainties and low signal-to-noise ratios. Long-term monitoring of eFXTs is crucial for identifying late-time thermal emission, particularly from supernovae, as illustrated by the recent case of EP260131a, which exhibited a prolonged plateau phase in both X-ray and optical bands, along with tight constraints on supernovae at late times.
        These results highlight EP’s unique capability to capture prompt high-energy emission from core-collapse supernovae and underscore the critical importance of rapid multiwavelength follow-up for future eFXT discoveries. They also demonstrate the strong potential for maximizing scientific return through coordinated wide-field survey efforts, such as those by WFST and LSST.`
       },
      { time: "15:30-16:00", task: "Break/Poster", speaker: "-", type: "break" },
      { time: "16:00-16:20", task: "Contributed talk 23", speaker: "Qinyu Wu", type: "contributed",
        title: "The First Catalog of Extragalactic Fast X-ray Transients Discovered by the Einstein Probe",
        abstract: "Extragalactic Fast X-ray Transients (EFXTs), characterized by brief, powerful X-ray flares, are critical probes of the universe's most extreme events. The Einstein Probe (EP) mission, with its advanced wide-field monitoring and rapid follow-up capabilities, enables the first systematic survey and characterization of these elusive events. We present the first comprehensive catalog of the bright EFXTs detected by EP during its first year and a half of operations, covering the in-orbit calibration phase and the first year of science nominal operations. The catalog comprises 107 candidate events with durations ranging from approximately 30 seconds to 2100 seconds and peak fluxes ranging from ~2×10⁻¹⁰ to 4×10⁻⁷ erg s⁻¹ cm⁻² in the 0.5–4 keV band. Through cross-matching with gamma-ray detectors, we assign 36 (34%) EFXTs to the gamma-ray burst (GRB)-associated group, including two tentative associations. The remaining 71 (66%) events, although lacking GRB counterparts, are covered by different gamma-ray monitors, for which we derive upper limits for each event. Notably, 32 of these EFXTs have obtained redshift measurements spanning from z = 0.12 to z = 4.859, enabled by the extensive follow-up observations by the broader astronomical community. Our systematic analysis reveals both the temporal and spectral properties of the EFXT population from the Wide-field X-ray Telescope (WXT) and their long-term X-ray counterparts from the Follow-up X-ray Telescope (FXT). The results provide crucial insights into the physical mechanisms driving these enigmatic transients and demonstrating EP's powerful capabilities in exploring the dynamic X-ray universe."
       },
      { time: "16:20-16:40", task: "Contributed talk 24", speaker: "Yen-Chen Pan", type: "contributed",
        title: "Exploring the Thermonuclear Supernova Zoo with TP2m",
        abstract: "Thermonuclear supernovae exhibit substantial diversity in their luminosities and spectral features, reflecting differences in their progenitor systems and explosion mechanisms. TP2m will  be a powerful facility for systematic follow-up of this thermonuclear supernova zoo. Rapid and high-cadence spectroscopy can precisely trace the early evolution of the ejecta, while long-term optical and infrared photometry can reveal unusual fading rates, delayed interaction, and dust formation. I will discuss potential observing strategies, science programs, and collaborative synergies that could be developed within TP2m."
       },
    ],
  },
  "Day 5": {
    date: "Aug 28",
    weekday: "Friday",
    events: [
      { time: "", task: "Morning Session", speaker: "-", type: "session", chair: "Sheng Yang" },
      { time: "-", task: "TP2m discussion 5", speaker: "-", type: "tp2m" },
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
                  const hasDetail = Boolean(item.title || item.abstract || item.agendaItems?.length || item.links?.length);
                  const isOpen = openIdx === idx;
                  
                  if (item.type === "session") {
                    return (
                      <div
                        key={idx}
                        className="!mt-12 mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b-2 border-blue-gray-200 px-6 pb-2"
                      >
                        {/* @ts-ignore */}
                        <Typography className="text-sm font-bold uppercase tracking-widest text-blue-gray-700">
                          {item.task}
                        </Typography>
                        {item.chair && item.chair !== "-" ? (
                          /* @ts-ignore */
                          <Typography className="text-base text-blue-gray-800">
                            <span className="mr-1.5 text-[14px] font-semibold uppercase tracking-wider text-blue-gray-400">
                              Chair
                            </span>
                            {item.chair}
                          </Typography>
                        ) : null}
                      </div>
                    );
                  }

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
                                    <MathText>{item.title}</MathText>
                                  </Typography>
                                </>
                              )}
                              {item.agendaItems?.length ? (
                                <div className="mb-4">
                                  {/* @ts-ignore */}
                                  <Typography className="text-[11px] font-bold uppercase tracking-widest text-blue-gray-400 mb-2">
                                    Topics
                                  </Typography>
                                  <ul className="space-y-1.5">
                                    {item.agendaItems.map((t, i) => (
                                      <li key={i} className="flex gap-2.5 text-blue-gray-800 text-[15px] leading-relaxed">
                                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-gray-800" />
                                        <span><MathText>{t}</MathText></span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : null}
                              {item.abstract && (
                                <>
                                  {/* @ts-ignore */}
                                  <Typography className="text-[11px] font-bold uppercase tracking-widest text-blue-gray-400 mb-1">
                                    Abstract
                                  </Typography>
                                  {/* @ts-ignore */}
                                  <Typography className="text-blue-gray-800 text-[15px] leading-relaxed whitespace-pre-line text-justify">
                                    <MathText>{item.abstract}</MathText>
                                  </Typography>
                                </>
                              )}
                              {item.links?.length ? (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {item.links.map((l, i) => (
                                  <a
                                    key={i}
                                    href={l.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
                                  >
                                    {l.label}
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                  </a>
                                ))}
                              </div>
                            ) : null}
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