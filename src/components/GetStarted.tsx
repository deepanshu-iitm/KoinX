"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function GetStarted() {
  return (
    <Card className="p-12 bg-[#0052FE] text-white text-center mt-12">
      <h2 className="text-[24px] font-bold mb-4">
        Get Started with KoinX <br /> for FREE
      </h2>
      <p className="mb-6 text-[14px]">
        With our range of features that you can equip for free,
        KoinX allows you to be more educated and aware of your tax reports.
      </p>
      <div className="flex flex-col items-center">
        <Image
          src="/get-started-image.svg"
          alt="Get Started"
          width={177.66}
          height={166.22}
          priority={true}
          className="mb-6"
        />
        <button className="h-[48px] w-[237px] flex items-center justify-center rounded-lg px-4 gap-[8px] bg-white text-[#0f1629] font-semibold">
          Get Started for FREE
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </Card>
  );
}
