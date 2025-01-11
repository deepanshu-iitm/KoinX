"use client";

import { Card } from "@/components/ui/card";

export function Tokenomics() {
  return (
    <Card className="p-6 bg-white">
      <h2 className="text-2xl font-semibold text-[#0f1629] mb-6">Tokenomics</h2>
      <div className="space-y-6">
        <h3 className="font-semibold text-lg">Initial Distribution</h3>
        <div className="flex items-center gap-8">
          <div className="w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#0082ff"
                strokeWidth="15"
                strokeDasharray="251.2"
                strokeDashoffset="62.8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#FAA002"
                strokeWidth="15"
                strokeDasharray="251.2"
                strokeDashoffset="188.4"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-[#202020] w-3 h-3 rounded-full bg-[#0082ff]" />
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[#202020] w-3 h-3 rounded-full bg-[#FAA002]" />
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>
        <p className="text-[#3e424a]">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </Card>
  );
}