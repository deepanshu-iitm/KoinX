"use client";

import { Card } from "@/components/ui/card";

interface TrendingCoinsProps {
  coins: any[];
}

export function TrendingCoins({ coins }: TrendingCoinsProps) {
  return (
    <Card className="p-6 bg-white">
      <h2 className="text-[24px] font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {coins.map((coin, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="w-6 h-6"
              />
              <span className="text-[14px]">{coin.item.name}</span>
            </div>
            <div
              className={`flex items-center gap-1 px-3 py-1 rounded-md ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? "bg-green-100"
                  : "bg-red-100"
              }`}
            >
              <div
                className={`w-2 h-2 transform ${
                  coin.item.data.price_change_percentage_24h.usd > 0
                    ? "rotate-0"
                    : "rotate-180"
                }`}
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  backgroundColor:
                    coin.item.data.price_change_percentage_24h.usd > 0
                      ? "green"
                      : "red",
                }}
              ></div>
              <span
                className={`text-[14px] font-medium ${
                  coin.item.data.price_change_percentage_24h.usd > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {Math.abs(
                  coin.item.data.price_change_percentage_24h.usd
                ).toFixed(2)}
                %
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
