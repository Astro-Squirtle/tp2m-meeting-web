"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const routes = [
  {
    option: "Intercity Rail + Metro",
    steps: [
      "Airport B2 level",
      "Intercity train (C-series)",
      { text: "Zhengzhou East Station", strong: true },
      "Metro Line 1",
      "Longzihu Station",
      "900m walk / taxi to hotel",
    ],
    cost: "~15 CNY",
    costNote: "12 train + 3 metro",
    time: "50–70 min",
  },
  {
    option: "Metro only",
    steps: [
      "Airport B2: Chengjiao Line",
      "Nansihuan (Line 2)",
      "Zijing Mountain (Line 1)",
      { text: "Longzihu Station", strong: true },
      "walk / taxi",
    ],
    cost: "~10 CNY",
    time: "90–100 min",
  },
  {
    option: "Taxi / Ride-hailing",
    note: (
      <>
        Follow signs to the taxi stand and set your destination to{" "}
        <span className="font-medium text-gray-900">
          Your hotel
        </span>
        . Alternatively, download a ride-hailing app (e.g.{" "}
        <span className="font-medium text-gray-900">Didi Chuxing</span>) and enter
        your pickup location and destination.
      </>
    ),
    cost: "~60–150 CNY",
    time: "40–60 min",
  },
];

const Steps = ({ steps }: { steps: any[] }) => (
  <div className="flex flex-wrap items-center gap-y-2">
    {steps.map((s, i) => {
      const text = typeof s === "string" ? s : s.text;
      const strong = typeof s === "object" && s.strong;
      return (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span
            className={`rounded-md px-2.5 py-1 text-sm ${
              strong
                ? "bg-gray-900 text-white font-medium"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {text}
          </span>
          {i < steps.length - 1 && (
            <span className="mx-1.5 text-gray-400 select-none">→</span>
          )}
        </span>
      );
    })}
  </div>
);

type Hotel = {
  name: string;
  nameZh: string;
  address: string;
  contact: string;
  price: string;
  priceNote?: string;
};

const hotels: Hotel[] = [
  {
    name: "Atour Hotel Longzihu University District Zhengzhou",
    nameZh: "郑州东站龙子湖亚朵酒店",
    address:
      "150 meters east of the intersection of Boxue Road and Jingxue Street, Longzihu Area, Jinshui District, Zhengzhou, on the south side of the road.",
    contact: "+86 134 6226 7164",
    price: "380 – 720 CNY",
    priceNote:
      "Mention the Henan Academy of Sciences when booking to receive a discount.",
  },
  {
    name: "Zhengzhou Lake Heart Island Lake-View Hotel",
    nameZh: "郑州湖心岛观湖酒店",
    address:
      "From the intersection of Mingli Road and Ping'an Avenue in Longzi Lake, Jinshui District, Zhengzhou, go north 300 meters to Shigeng Street, then turn left — the destination is 20 meters on the left.",
    contact: "+86 (0371) 5559 1308",
    price: "205 – 420 CNY",
  },
  {
    name: "Mingting Hotel (Zhengzhou Longzi Lake University Area Branch)",
    nameZh: "明庭酒店（郑州龙子湖高校区店）",
    address:
      "25/F, Building 3, Zhengshang Boya Plaza, Longzi Lake, Jinshui District, Zhengzhou.",
    contact: "+86 188 3800 8200",
    price: "134 – 200 CNY",
  },
  {
    name: "Hanting Hotel Zhengzhou Longzi Lake",
    nameZh: "汉庭酒店",
    address:
      "Building D, Jianye Wisdom Port, No. 199 Ping'an Avenue, Longzi Lake, Zhengzhou.",
    contact: "+86 150 3816 9166",
    price: "325 – 472 CNY",
  },
  {
    name: "Siji Wenhua Hotel (Zhengzhou Longzi Lake Metro Station Boya Plaza Branch)",
    nameZh: "四季文华酒店",
    address: "1st Floor, Building 2, Boya Plaza, Ping'an Avenue, Zhengzhou.",
    contact: "+86 131 4008 8129",
    price: "156 – 511 CNY",
  },
];

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

      {/* Transportation */}
      <div className="container mx-auto px-8 py-8">
        <div className="w-full h-px bg-gray-200 mb-12" />

        <div className="mb-16">
          {/* @ts-ignore */}
          <Typography variant="h1" className="text-4xl font-bold text-gray-900 mb-6">
            Transportation Guide in Zhengzhou
          </Typography>

          {/* @ts-ignore */}
          <Typography className="text-xl font-normal text-gray-700 mb-8 leading-relaxed">
            Zhengzhou, the capital city of Henan Province, is located in central China.
            The Henan Academy of Sciences is the leading institution for natural sciences
            research in the province, boasting a long-standing history and deep research
            strengths.
          </Typography>
        </div>

        <div className="max-w-4xl">
          {/* @ts-ignore */}
          <Typography variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
            1. Arriving in Zhengzhou (By air)
          </Typography>

          {/* @ts-ignore */}
          <Typography className="text-xl font-normal text-gray-700 mb-8 leading-relaxed">
            From <span className="font-medium text-gray-900">Zhengzhou Xinzheng International Airport (CGO)</span> to Hotels:
          </Typography>

          <div className="max-w-6xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse table-auto">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-3 pr-6 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                      Option
                    </th>
                    <th className="py-3 pr-6 text-xs font-semibold uppercase tracking-wider text-gray-500 w-full">
                      Route Details
                    </th>
                    <th className="py-3 pr-6 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                      Cost
                    </th>
                    <th className="py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((r) => (
                    <tr key={r.option} className="border-b border-gray-100 align-middle">
                      <td className="py-5 pr-6 font-semibold text-gray-900 whitespace-nowrap">
                        {r.option}
                      </td>
                      <td className="py-5 pr-6">
                        {r.steps ? (
                          <Steps steps={r.steps} />
                        ) : (
                          <p className="text-gray-700 leading-relaxed text-[15px] max-w-xl">
                            {r.note}
                          </p>
                        )}
                      </td>
                      <td className="py-5 pr-6 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{r.cost}</div>
                        {r.costNote && (
                          <div className="text-xs text-gray-500 mt-0.5">{r.costNote}</div>
                        )}
                      </td>
                      <td className="py-5 text-gray-700 whitespace-nowrap tabular-nums">
                        {r.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Accommodation */}
          <div className="mt-16 max-w-6xl">
            {/* @ts-ignore */}
            <Typography variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
              2. Accommodation
            </Typography>

            {/* @ts-ignore */}
            <Typography className="text-xl font-normal text-gray-700 mb-8 leading-relaxed">
              The following hotels are all within the Longzi Lake area, close to the venue.
              Rooms can be booked on{" "}
              <span className="font-medium text-gray-900">Trip.com</span> or through the{" "}
              <span className="font-medium text-gray-900">Amap</span> app.
            </Typography>

            <div className="grid gap-4 sm:grid-cols-2">
              {hotels.map((h) => (
                <div
                  key={h.name}
                  className="rounded-xl border border-gray-200 p-6 transition-colors hover:border-gray-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                    {h.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{h.nameZh}</p>

                  <dl className="mt-5 space-y-3 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Address
                      </dt>
                      <dd className="mt-1 text-gray-800 leading-relaxed">{h.address}</dd>
                    </div>

                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Contact
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${h.contact.replace(/[^\d+]/g, "")}`}
                          className="text-gray-800 tabular-nums hover:text-gray-900 hover:underline"
                        >
                          {h.contact}
                        </a>
                      </dd>
                    </div>

                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Price
                      </dt>
                      <dd className="mt-1 font-medium text-gray-900 tabular-nums">
                        {h.price}
                      </dd>
                      {h.priceNote && (
                      <dd className="mt-1.5 text-sm font-semibold text-amber-700 tracking-wide leading-relaxed flex items-center gap-1">
                        <span>Note: {h.priceNote}</span>
                      </dd>
                    )}
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            {/* @ts-ignore */}
            <Typography className="text-xl font-normal text-gray-700 mt-8 leading-relaxed">
             The distances from each hotel to Henan Academy of Sciences are as shown in the figure:
            </Typography>
            <div className="w-full flex mt-4 items-center gap-3 mb-5">
                <Image
                  src="/image/HNAS_map.png"
                  alt="Amap app icon"
                  width={800}
                  height={800}
                  className="rounded-xl border border-gray-200"
                />
              </div>
          </div>

          <div className=" mt-16 max-w-4xl">
            <div className="w-full h-px bg-gray-300 mb-12" />
          {/* @ts-ignore */}
          <Typography variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
            3. Using Map Apps in China
          </Typography>

          {/* @ts-ignore */}
          <Typography className="text-xl font-normal text-gray-700 mb-8 leading-relaxed">
            Google Maps may not work reliably in China if you are connected to local networks or Wi-Fi due to regional restrictions. Here are solutions:
          </Typography>

          <ul className="space-y-8">
            <li>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                International Roaming
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Purchase an international roaming plan from your mobile carrier before
                arriving. Roaming data routes through your home country’s servers, allowing
                access to Google Maps.{" "}
                <span className="font-medium text-gray-900">
                  Check costs in advance — roaming fees can be high.
                </span>
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apple Maps</h3>
              <p className="text-gray-700 leading-relaxed">
                Works in China by connecting to local servers once you arrive.
              </p>
            </li>
            
            <li>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Amap <span className="font-normal text-gray-500">（高德地图）</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A popular local navigation app with English-language support.
              </p>

              <ol className="space-y-2.5 text-gray-700">
                {[
                  "Search for the app in your app store and install it.",
                  "After downloading, set Language to English.",
                  "Enter your phone number to receive a verification code.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="flex mt-4 items-center gap-3 mb-5">
                <Image
                  src="/image/Amap.png"
                  alt="Amap app icon"
                  width={400}
                  height={200}
                  className="rounded-xl border border-gray-200"
                />
              </div>
            </li>
          </ul>
        </div>
        
          {/* Practical Information: Mobile Payments */}
          <div className="mt-16 max-w-6xl">
            <div className="h-px bg-gray-300 mb-12" />
            
            <div className="max-w-4xl">
              {/* @ts-ignore */}
              <Typography variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
                4. Practical Information: Payments in China
              </Typography>
              
              {/* @ts-ignore */}
              <Typography className="text-lg font-normal text-gray-600 mb-8 leading-relaxed">
                Mobile payments are the primary method of transaction in China. Physical cash and foreign credit cards are rarely accepted in daily situations. We highly recommend downloading and setting up <span className="font-medium text-gray-900">Alipay</span> or <span className="font-medium text-gray-900">WeChat Pay</span> and binding your international credit card before your arrival.
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
                  <Typography className="text-gray-700 text-sm">
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
                  <Typography className="text-gray-700 text-sm">
                    A comprehensive step-by-step guide by Trip.com on how to set up WeChat Pay as an international traveler.
                  </Typography>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      

      

    </main>
  );
}