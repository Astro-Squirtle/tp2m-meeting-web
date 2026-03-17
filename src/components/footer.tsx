"use client";

import {Typography} from "@material-tailwind/react";

const SPONSORS = [
  { name: "NCU", logo: "/logos/NCU.png" },
  { name: "UNAM", logo: "/logos/UNAM.png" },
  { name: "SAO", logo: "/logos/SAO.png" }, 
  { name: "HNAS", logo: "/logos/HNAS.png" },
  { name: "LAM", logo: "/logos/LAM.png" },
  { name: "ASIAA", logo: "/logos/ASIAA.png" },
];

export function Footer() {
  return (
    <footer className="pb-10 pt-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-12">
          
          {/*Contact*/}
          <div>
            {/* @ts-ignore */}
            <Typography variant="h6" color="blue-gray" className="mb-4 uppercase">
              Contact Us
            </Typography>
            <div className="space-y-2">
              {/* @ts-ignore */}
              <Typography className="text-sm font-normal text-gray-600">
                <strong>Email:</strong> tm2m.meeting@gmail.com
              </Typography>
              {/* @ts-ignore */}
              <Typography className="text-sm font-normal text-gray-600">
                <strong>Location:</strong> 9F, Science Building 4, NCU
              </Typography>
              {/* @ts-ignore */}
              <Typography className="text-sm font-normal text-gray-600">
                <strong>Address:</strong> No. 300, Zhongda Rd., Zhongli Dist., Taoyuan City 320317, Taiwan
              </Typography>
            </div>
          </div>

          {/*Sponsors*/}
          <div className="flex flex-col md:items-end">
            {/* @ts-ignore */}
            <Typography variant="h6" color="blue-gray" className="mb-4 uppercase">
              Organized & Sponsored by
            </Typography>
            <div className="flex flex-wrap gap-6 opacity-70 grayscale hover:grayscale-0 transition-all">
              {/* Logo */}
              {SPONSORS.map((s) => (
                <div key={s.name} className="h-10 flex items-center">
                   <span className="text-sm font-bold text-gray-400">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;