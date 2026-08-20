"use client";

import { Typography } from "@material-tailwind/react";

interface Participant {
  Name: string;
  Affiliation: string;
  Attendance?: string; // "In-person" | "Virtual"
}

function ParticipantSection({
  title,
  people,
}: {
  title: string;
  people: Participant[];
}) {
  if (people.length === 0) return null;

  return (
    <section className="mb-12 w-full max-w-5xl mx-auto">
      <div className="mb-4 flex items-baseline gap-3 px-1">
        {/* @ts-ignore */}
        <Typography variant="h5" color="blue-gray" className="font-bold">
          {title}
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="small" className="text-blue-gray-500">
          {people.length} {people.length === 1 ? "participant" : "participants"}
        </Typography>
      </div>

      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className="bg-blue-gray-50/50">
              {["#", "Name", "Affiliation"].map((head) => (
                <th key={head} className="border-b border-blue-gray-100 p-4">
                  {/* @ts-ignore */}
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4 border-b border-blue-gray-50">
                  {/* @ts-ignore */}
                  <Typography variant="small" color="blue-gray">
                    {index + 1}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {/* @ts-ignore */}
                  <Typography variant="small" className="font-bold">
                    {person.Name}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {/* @ts-ignore */}
                  <Typography variant="small" color="blue-gray">
                    {person.Affiliation}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function ParticipantsTable({ data }: { data: Participant[] }) {
  const norm = (v?: string) => (v ?? "").trim().toLowerCase();

  const inPerson = data.filter((p) => norm(p.Attendance) === "in-person");
  const virtual = data.filter((p) => norm(p.Attendance) === "virtual");
  const unlisted = data.filter(
    (p) => !["in-person", "virtual"].includes(norm(p.Attendance))
  );

  return (
    <div className="mt-12">
      <ParticipantSection title="In-person" people={inPerson} />
      <ParticipantSection title="Virtual" people={virtual} />
      <ParticipantSection title="Unspecified" people={unlisted} />
    </div>
  );
}