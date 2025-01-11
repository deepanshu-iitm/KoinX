"use client";

import { Card } from "@/components/ui/card";
import { Info, TrendingUp, Newspaper } from "lucide-react";

export function Sentiment() {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-[24px] font-semibold">Sentiment</h2>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-gray-700 font-semibold text-[20px]">Key Events</h3>
          <Info className="w-4 h-4 text-gray-400" />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          <div className="min-w-[400px] bg-blue-50 p-4 rounded-lg flex gap-4">
            <div className="shrink-0">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-sm">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>

          <div className="min-w-[400px] bg-green-50 p-4 rounded-lg flex gap-4">
            <div className="shrink-0">
              <div className="w-10 h-10 bg-[#0fba83] rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-sm">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-gray-700 font-semibold text-[20px]">Analyst Estimates</h3>
          <Info className="w-4 h-4 text-gray-400" />
        </div>

        <div className="flex items-center gap-8">
          <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center">
            <span className="text-4xl font-semibold text-[#0fba83]">76<span className="text-2xl">%</span></span>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-12 text-sm text-gray-500">Buy</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '76%' }}></div>
              </div>
              <span className="w-12 text-sm text-gray-500">76%</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-12 text-sm text-gray-500">Hold</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-gray-300 rounded-full" style={{ width: '8%' }}></div>
              </div>
              <span className="w-12 text-sm text-gray-500">8%</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-12 text-sm text-gray-500">Sell</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '16%' }}></div>
              </div>
              <span className="w-12 text-sm text-gray-500">16%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}