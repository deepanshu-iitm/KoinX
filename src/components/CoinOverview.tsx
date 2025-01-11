"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface CoinOverviewProps {
  data: any;
}

export function CoinOverview({ data }: CoinOverviewProps) {
  if (!data) return null;

  const isPositiveChange = data.usd_24h_change > 0;

  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
          alt="Bitcoin"
          className="w-8 h-8"
        />
        <h1 className="text-2xl font-bold">Bitcoin</h1>
        <span className="text-gray-500">BTC</span>
        <span className="ml-6 px-3 py-2 bg-gray-500 text-white rounded">
          Rank #1
        </span>
      </div>

      <div className="flex items-start gap-8">
        <div>
          <div className="text-3xl font-bold">${data.usd.toLocaleString()}</div>
          <div className="text-lg text-gray-500">
            ₹{data.inr.toLocaleString()}
          </div>
        </div>
        <div
          className={`flex items-center gap-2 px-3 py-1 rounded ${
            isPositiveChange ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {isPositiveChange ? (
            <ArrowUpIcon className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 text-red-500" />
          )}
          <span
            className={`font-medium ${
              isPositiveChange ? "text-green-500" : "text-red-500"
            }`}
          >
            {Math.abs(data.usd_24h_change).toFixed(2)}%
          </span>
        </div>
        <span className="text-gray-500">(24H)</span>
      </div>
    </Card>
  );
}