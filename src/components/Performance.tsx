"use client";

import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

export function Performance() {
  return (
    <Card className="p-6 bg-white">
      <div>
        <h2 className="text-[24px] font-semibold mb-6">Performance</h2>
        <div className="space-y-6 mb-8">
          <div>
            <div className="flex justify-between mb-2">
              <div>
                <span className="text-sm text-gray-500">Today's Low</span>
                <p className="font-normal">46,930.22</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">Today's High</span>
                <p className="font-normal">49,343.83</p>
              </div>
            </div>
            <div className="relative">
              <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
              <div className="absolute w-full text-center mt-2">
                <span className="text-sm">$48,637.83</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <div>
                <span className="text-sm text-gray-500">52W Low</span>
                <p className="font-normal">16,930.22</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">52W High</span>
                <p className="font-normal">49,743.83</p>
              </div>
            </div>
            <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-[20px] font-semibold">Fundamentals</h2>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Bitcoin Price</span>
                <span>$16,815.46</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">24h Low / 24h High</span>
                <span>$16,382.07 / $16,874.12</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">7d Low / 7d High</span>
                <span>$16,382.07 / $16,874.12</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Trading Volume</span>
                <span>$23,249,202,782</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Market Cap Rank</span>
                <span>#1</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Market Cap</span>
                <span>$323,507,290,047</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Market Cap Dominance</span>
                <span>38.343%</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Volume / Market Cap</span>
                <span>0.0718</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">All-Time High</span>
                <div className="text-right">
                  <div>
                    $69,044.77 <span className="text-red-500">-75.6%</span>
                  </div>
                  <div className="text-xs text-gray-500">Nov 10, 2021 (about 1 year)</div>
                </div>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">All-Time Low</span>
                <div className="text-right">
                  <div>
                    $67.81 <span className="text-green-500">24729.1%</span>
                  </div>
                  <div className="text-xs text-gray-500">Jul 06, 2013 (over 9 years)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Card>
  );
}