"use client";

import { Card } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRef } from "react";

interface YouMayLikeProps {
  coins: any[];
}

export function YouMayLike({ coins }: YouMayLikeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-white p-10 px-20 py-20">
      <h2 className="text-[24px] font-semibold mb-8 text-[#202020]">You May Also Like</h2>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full shadow-lg p-2"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {coins.map((coin, index) => (
          <Card key={index} className="min-w-[300px] p-6 pt-10 pb-10">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="w-8 h-8"
              />
              <span className="font-medium text-lg">{coin.item.symbol}</span>
              <span
                className={`ml-4 ${
                  coin.item.data.price_change_percentage_24h.usd > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.item.data.price_change_percentage_24h.usd > 0 ? "+" : ""}
                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </span>
            </div>
            <div className="text-xl font-bold mb-6">
              ${coin.item.data.price}
            </div>
            <img
              src={coin.item.data.sparkline}
              alt="Price graph"
              className="w-full h-16"
            />
          </Card>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full shadow-lg p-2"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
