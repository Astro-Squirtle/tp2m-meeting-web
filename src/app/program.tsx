"use client";
import React, {useState} from "react";
import {Typography, Button, Card, CardBody} from "@material-tailwind/react";

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

// Program data
const AGENDA_DATA = {
  "Day 1": {
    date: "Aug 24",
    weekday: "Monday",
    events: [
      { time: "-", task: "TP2m discussion (Details Coming Soon)", speaker: "-", type: "others" },
    ]
  },
  "Day 2": {
    date: "Aug 25",
    weekday: "Tuesday",
    events: [
      { time: "08:30-08:50", task: "Registration", speaker: "-", type: "general" },
      { time: "08:50-09:00", task: "Opening remark", speaker: "-", type: "general" },
      { time: "09:00-09:30", task: "TP2m overview talk", speaker: "-", type: "tp2m" },
      { time: "09:30-09:50", task: "Contributed talk 1", speaker: "-", type: "contributed" },
      { time: "09:50-10:10", task: "Contributed talk 2", speaker: "-", type: "contributed" },
      { time: "10:10-10:30", task: "Contributed talk 3", speaker: "-", type: "contributed" },
      { time: "10:30-11:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "11:00-11:30", task: "Invited talk 1", speaker: "Ramandeep Gill", type: "invited" },
      { time: "11:30-11:50", task: "Contributed talk 4", speaker: "Laurence Sabin", type: "contributed" },
      { time: "11:50-14:00", task: "Lunch", speaker: "-", type: "general" }, 
      { time: "14:00-14:30", task: "Invited talk 2", speaker: "Lise", type: "invited" },
      { time: "14:30-14:50", task: "Contributed talk 5", speaker: "-", type: "contributed" },
      { time: "14:50-15:10", task: "Contributed talk 6", speaker: "-", type: "contributed" },
      { time: "15:10-15:30", task: "Contributed talk 7", speaker: "-", type: "contributed" },
      { time: "15:30-16:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "16:00-16:20", task: "Contributed talk 8", speaker: "-", type: "contributed" },  
      { time: "16:20-16:40", task: "Contributed talk 9", speaker: "-", type: "contributed" }, 
      { time: "16:40-17:00", task: "Contributed talk 10", speaker: "-", type: "contributed" }, 
    ]
  },
  "Day 3": {
    date: "Aug 26",
    weekday: "Wednesday",
    events: [
      { time: "09:10-09:40", task: "Invited talk 3", speaker: "Fabio De Colle", type: "invited" },
      { time: "09:40-10:00", task: "Contributed talk 11", speaker: "-", type: "contributed" },
      { time: "10:00-10:30", task: "Invited talk 4", speaker: "Bing Zhang", type: "invited" },
      { time: "10:30-11:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "11:00-11:30", task: "Invited talk 5", speaker: "Christina Thöne", type: "invited" },
      { time: "11:30-11:50", task: "Contributed talk 12", speaker: "-", type: "contributed" },
      { time: "11:50-14:00", task: "Lunch", speaker: "-", type: "general" }, 
      { time: "14:00-14:30", task: "Invited talk 6", speaker: "Shiang-Yu Wang", type: "invited" },
      { time: "14:30-14:50", task: "Contributed talk 13", speaker: "-", type: "contributed" },
      { time: "14:50-15:10", task: "Contributed talk 14", speaker: "-", type: "contributed" },
      { time: "15:10-15:30", task: "Contributed talk 15", speaker: "-", type: "contributed" },
      { time: "15:30-16:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "16:00-18:00", task: "TP2m discussions", speaker: "-", type: "tp2m" }, 
      { time: "19:00-", task: "conference dinner", speaker: "-", type: "general" }, 
    ]
  },
  "Day 4": {
    date: "Aug 27",
    weekday: "Thursday",
    events: [
      { time: "09:10-09:40", task: "Invited talk 7", speaker: "-", type: "invited" },
      { time: "09:40-10:00", task: "Contributed talk 16", speaker: "-", type: "contributed" },
      { time: "10:00-10:30", task: "Invited talk 8", speaker: "Juan Venancio", type: "invited" },
      { time: "10:30-11:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "11:00-11:30", task: "Invited talk 9", speaker: "Kaew Samaporn Tinyanont", type: "invited" },
      { time: "11:30-11:50", task: "Contributed talk 17", speaker: "-", type: "contributed" },
      { time: "11:50-14:00", task: "Lunch", speaker: "-", type: "general" }, 
      { time: "14:00-14:30", task: "Invited talk 10", speaker: "Antonio Martín-Carrillo", type: "invited" },
      { time: "14:30-14:50", task: "Contributed talk 18", speaker: "-", type: "contributed" },
      { time: "14:50-15:10", task: "Contributed talk 19", speaker: "-", type: "contributed" },
      { time: "15:10-15:30", task: "Contributed talk 20", speaker: "-", type: "contributed" },
      { time: "15:30-16:00", task: "break/poster", speaker: "-", type: "break" },
      { time: "16:00-16:20", task: "Contributed talk 21", speaker: "-", type: "contributed" },  
      { time: "16:20-16:40", task: "Contributed talk 22", speaker: "-", type: "contributed" }, 
      { time: "16:40-17:00", task: "Contributed talk 23", speaker: "-", type: "contributed" }, 
    ]
  },
  "Day 5": {
    date: "Aug 28",
    weekday: "Friday",
    events: [
      { time: "-", task: "Cultural excursion (Details Coming Soon)", speaker: "-", type: "others" },
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
                    className={`group flex flex-col md:flex-row md:items-center gap-6 py-5 px-6 rounded-2xl transition-all hover:shadow-md ${TYPE_STYLES[item.type] || "bg-white"}`}
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
                      <Typography variant="h5" color="blue-gray" className="group-hover:text-blue-800 transition-colors leading-tight">
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
