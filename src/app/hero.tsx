"use client";

import {Button, Typography} from "@material-tailwind/react";

function Hero() {
  return (
    // Background
    <div className="relative min-h-screen w-full bg-[url('/image/tp2m.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-black/55" />
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          
          {/* Title */}
          {/* @ts-ignore */}
          <Typography variant="h1" color="white" className="lg:max-w-4xl text-5xl lg:text-7xl font-bold mb-16 leading-tight">
            TP2M Project Kickoff Meeting
          </Typography>

          {/* Subtitle */}
          {/* @ts-ignore */}
          <Typography variant="h3" color="white" className="mb-6 text-3xl tracking-[0.02em] uppercase">
            August 24-28, 2026 <span className="mx-2">|</span> Henan Academy of Sciences
          </Typography>

          {/* Description */}
          {/* @ts-ignore */}
          <Typography variant="h2" color="white" className="mb-16 font-bold normal-case opacity-90 tracking-normal text-xl lg:text-2xl">
            Both in-person and virtual participation are welcome!
          </Typography>

          
          <div className="flex items-center gap-4">
            {/* @ts-ignore */}
            <Button 
              size="lg" 
              color="white" 
              variant="gradient"
              className="m px-9 py-3 text-xl font-bold hover:scale-105 transition-all active:scale-95 shadow-2xl"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSclHq2AZ6bX12VVfjhYMFYMPot5Lx7-sO62UuEelBvh2M5wNA/viewform?usp=publish-editor', '_blank')}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;