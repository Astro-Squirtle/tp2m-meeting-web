"use client";
import React, {useState} from "react";
import {Typography, Button, Card, CardBody} from "@material-tailwind/react";

// Program data
const AGENDA_DATA = {
  "Day 1": {
    date: "Aug 24",
    weekday: "Monday",
    events: [
      { time: "-", task: "Coming Soon", speaker: "-" },
    ]
  },
  "Day 2": {
    date: "Aug 25",
    weekday: "Tuesday",
    events: [
      { time: "-", task: "Coming Soon", speaker: "-" },
    ]
  },
  "Day 3": {
    date: "Aug 26",
    weekday: "Wednesday",
    events: [
      { time: "-", task: "Coming Soon", speaker: "-" },
    ]
  },
  "Day 4": {
    date: "Aug 27",
    weekday: "Thursday",
    events: [
      { time: "-", task: "Coming Soon", speaker: "-" },
    ]
  },
  "Day 5": {
    date: "Aug 28",
    weekday: "Friday",
    events: [
      { time: "-", task: "Coming Soon", speaker: "-" },
    ]
  }
};

type DayKey = keyof typeof AGENDA_DATA;

export default function ProgramPage() {
  const [activeDay, setActiveDay] = useState<DayKey>("Day 1");

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Background Section */}
      <div className="relative h-[60vh] w-full bg-[url('/image/tp2m.png')] bg-cover bg-[center_27%] bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/60" />
        
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
              onClick={() => setActiveDay(day)}
              variant={activeDay === day ? "gradient" : "gradient"}
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
                {AGENDA_DATA[activeDay].events.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group flex flex-col md:flex-row gap-6 border-b border-gray-50 py-8 last:border-0 hover:bg-blue-50/40 transition-colors px-6 -mx-6 rounded-2xl"
                  >
                    {/* Time Column */}
                    <div className="md:w-32 shrink-0">
                      {/* @ts-ignore */}
                      <Typography className="text-2xl font-bold text-blue-600">
                        {item.time}
                      </Typography>
                    </div>
                    
                    {/* Task details */}
                    <div className="flex-1">
                      {/* @ts-ignore */}
                      <Typography variant="h4" color="blue-gray" className="mb-3 group-hover:text-blue-800 transition-colors leading-tight">
                        {item.task}
                      </Typography>
                      
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-md bg-blue-gray-50 text-blue-gray-700 text-xs font-bold uppercase tracking-wider">
                          Speaker
                        </span>
                        
                        {/* @ts-ignore */}
                        <Typography className="text-blue-gray-900 text-lg font-semibold">
                          {item.speaker}
                        </Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}