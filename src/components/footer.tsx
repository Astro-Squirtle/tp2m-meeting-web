"use client";

import {Typography} from "@material-tailwind/react";

const SPONSORS = [
  { name: "TBD", logo: "/logos/great-lab.png" },
  { name: "TBD", logo: "/logos/ntu.png" },
  { name: "TBD", logo: "/logos/nstc.png" }, 
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
                <strong>Email:</strong> TBD
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
              {/* 這裡放 Logo 圖片 */}
              {SPONSORS.map((s) => (
                <div key={s.name} className="h-10 flex items-center">
                   {/* 如果還沒準備好圖片，可以用文字代替 */}
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