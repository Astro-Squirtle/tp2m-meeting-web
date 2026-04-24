import fs from "fs";
import path from "path";
import Papa from "papaparse";
import ParticipantsHeader from "../participants-header";
import ParticipantsTable from "../participants-table";

export default function ParticipantsPage() {
  // Capture the file path of the CSV file and read its content
  const filePath = path.join(process.cwd(), "src/data/participants.csv");
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data } = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  return (
    <div className="pt-20">
      <main className="min-h-screen bg-gray-50">
      {/* Participants Header */}
        <ParticipantsHeader />
      {/* Participants Table */}
        <ParticipantsTable data={data as any} />
      </main>
    </div>
  );
}