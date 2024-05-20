import TrainModelZone from "@/components/TrainModelZone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { CloseIcon } from "@/components/ui/close-icon";

export default async function Index() {
  return (
    <div className="m-2 relative w-full mx-auto bg-white py-10 rounded-2xl shadow-2xl shadow-red-700/30">
        <Link href="/overview" className="text-sm w-fit">
          <Button variant={"ghost"} className="text-xs absolute top-2 right-0" size="sm">
            <CloseIcon/>
          </Button>
        </Link>
      <div
        id="train-model-container"
        className="flex flex-1 flex-col px-2 relative "
      >
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="grid gap-6">
            <TrainModelZone />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




