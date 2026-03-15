
import { Typography, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    /* @ts-ignore */
    <Card color="transparent" shadow={false}>
      {/* @ts-ignore */}
      <Typography variant="h1" className="font-bold" color="blue-gray">
        {count}
      </Typography>
      {/* @ts-ignore */}
      <Typography variant="h6" color="blue-gray" className="mt-1 font-medium">
        {title}
      </Typography>
    </Card>
  );
}


export default StatsCard;
