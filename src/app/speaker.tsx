"use client";
import React from "react";
import {Typography, Card, CardBody, Avatar} from "@material-tailwind/react";

// Speaker info
const SPEAKERS_DATA = [
  {
    name: "TBD",
    affiliation: "",
    avatar: "", // figure
    bio: [
      {
        text: ""
      },
      {
        text: ""
      },
      {
        text: ""
      }
    ],
    fields: [""]
  },
  // more...
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
                    alt={s.name} 
                    className="h-[240px] w-[240px] rounded-3xl border-4 border-gray-100 shadow-xl"
                  />
                </div>

                {/* name & info */}
                <div>
                  {/* @ts-ignore */}
                  <Typography variant="h1" color="blue-gray" className="mb-1 text-5xl font-extrabold tracking-tighter">
                    {s.name}
                  </Typography>
                  {/* @ts-ignore */}
                  <Typography className="text-gray-700 text-lg font-medium mb-10 pb-4 border-b border-gray-100">
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