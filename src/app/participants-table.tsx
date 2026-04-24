"use client";

import { Typography } from "@material-tailwind/react";

interface Participant {
  Name: string;
  Affiliation: string;
}

export default function ParticipantsTable({ data }: { data: Participant[] }) {
  return (
    <div className="mt-12 mb-12 w-full max-w-5xl mx-auto overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr className="bg-blue-gray-50/50">
            {["#", "Name", "Affiliation"].map((head) => (
              <th key={head} className="border-b border-blue-gray-100 p-4">
                {/* @ts-ignore */}
                <Typography variant="small" color="blue-gray" className="font-bold leading-none opacity-70">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4 border-b border-blue-gray-50">
                {/* @ts-ignore */}
                <Typography variant="small" color="blue-gray">{index + 1}</Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                {/* @ts-ignore */}
                <Typography variant="small" className="font-bold">{person.Name}</Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                {/* @ts-ignore */}
                <Typography variant="small" color="blue-gray">{person.Affiliation}</Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}