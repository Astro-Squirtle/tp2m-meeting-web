"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";

export default function VenuePage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* Background */}
      <div className="relative h-[60vh] w-full bg-[url('/image/tp2m.png')] bg-cover bg-[center_27%] bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/65" />
        
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center px-4">
          {/* @ts-ignore */}
          <Typography variant="h1" color="white" className="mb-6 text-4xl lg:text-7xl font-bold tracking-tight">
            Venue & Transport
          </Typography>
          {/* @ts-ignore */}
          <Typography variant="h4" color="white" className="text-3xl opacity-80 font-normal">
            Henan Academy of Sciences
          </Typography>
        </div>
      </div>

      {/* location info */}
      <div className="container mx-auto px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="flex flex-col">
            <div className="mb-10">
              {/* @ts-ignore */}
              <Typography 
                variant="h1" 
                className="text-5xl lg:text-4xl font-black text-gray-900 tracking-tighter leading-tight">
                Henan Academy of Sciences
              </Typography>
              {/* @ts-ignore */}
              <Typography 
                className="text-4xl lg:text-4xl font-bold text-gray-800 mt-2 tracking-tight">
                河南省科學院
              </Typography>
            </div>
            
            {/* Location */}
            <div className="mb-12">
              {/* @ts-ignore */}
              <Typography className="text-2xl lg:text-3xl font-medium text-gray-600 italic">
                TBD
              </Typography>
            </div>

            <div className="w-full h-px bg-gray-200 mb-12" />

            {/* Address */}
            <div>
              {/* @ts-ignore */}
              <Typography className="text-xl lg:text-2xl font-normal text-gray-700 leading-relaxed max-w-2xl mb-6">
                No. 228 Chongshi Li, Jinshui District, <br className="hidden md:block" />
                Zhengzhou City, Henan Province, China
              </Typography>
              {/* @ts-ignore */}
              <Typography className="text-xl lg:text-2xl font-normal text-gray-700 leading-relaxed max-w-2xl">
                河南省郑州市郑东新区崇实里228号
              </Typography>
            </div>
          </div>

          {/* Map */}
          <div className="w-full">
            <div className="h-[500px] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3276.3462009243913!2d113.80662307473536!3d34.79723097288549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ3JzUwLjAiTiAxMTPCsDQ4JzMzLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1773472969451!5m2!1szh-TW!2stw" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Practical Information: Mobile Payments */}
      <div className="container mx-auto px-8 py-8">
        <div className="w-full h-px bg-gray-200 mb-12" />
        
        <div className="max-w-4xl">
          {/* @ts-ignore */}
          <Typography variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
            Practical Information: Payments in China
          </Typography>
          
          {/* @ts-ignore */}
          <Typography className="text-lg text-gray-700 mb-8 leading-relaxed">
            Mobile payments are the primary method of transaction in China. Physical cash and foreign credit cards are rarely accepted in daily situations. We highly recommend downloading and setting up <span className="font-semibold">Alipay</span> or <span className="font-semibold">WeChat Pay</span> and binding your international credit card <strong>before your arrival</strong>.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Link Card 1 */}
            <a 
              href="https://www.trip.com/guide/phone/how-to-use-alipay.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300"
            >
              {/* @ts-ignore */}
              <Typography variant="h5" color="blue-gray" className="mb-2 group-hover:text-blue-500 transition-colors">
                Alipay Guide ↗
              </Typography>
              {/* @ts-ignore */}
              <Typography className="text-gray-600 text-sm">
                A comprehensive step-by-step guide by Trip.com on how to set up Alipay as an international traveler.
              </Typography>
            </a>

            {/* Link Card 2 */}
            <a 
              href="https://www.trip.com/guide/phone/wechat-pay-for-foreigners.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300"
            >
              {/* @ts-ignore */}
              <Typography variant="h5" color="blue-gray" className="mb-2 group-hover:text-blue-500 transition-colors">
                WeChat Pay Guide ↗
              </Typography>
              {/* @ts-ignore */}
              <Typography className="text-gray-600 text-sm">
                A comprehensive step-by-step guide by Trip.com on how to set up WeChat Pay as an international traveler.
              </Typography>
            </a>
          </div>

        </div>
      </div>

    </main>
  );
}