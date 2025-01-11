"use client";

import { useEffect, useState } from "react";
import { TrendingCoins } from "@/components/TrendingCoins";
import { CoinOverview } from "@/components/CoinOverview";
import { TradingViewWidget } from "@/components/TradingViewWidget";
import { Performance } from "@/components/Performance";
import { Sentiment } from "@/components/Sentiment";
import { AboutCoin } from "@/components/AboutCoin";
import { Team } from "@/components/Team";
import { Tokenomics } from "@/components/Tokenomics";
import { YouMayLike } from "@/components/YouMayLike";
import { GetStarted } from "@/components/GetStarted";
import { Header } from "@/components/Header";

const CoinNavigation = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'fundamentals', label: 'Fundamentals' },
    { id: 'news-insights', label: 'News Insights' },
    { id: 'sentiments', label: 'Sentiments' },
    { id: 'team', label: 'Team' },
    { id: 'technicals', label: 'Technicals' },
    { id: 'tokenomics', label: 'Tokenomics' }
  ];

  return (
    <div className="w-full border-b border-gray-200">
      <nav className="flex overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-semibold whitespace-nowrap hover:text-blue-600 transition-colors
              ${activeTab === tab.id 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default function Home() {
  const [bitcoinData, setBitcoinData] = useState<any>(null);
  const [trendingCoins, setTrendingCoins] = useState<any[]>([]);
  const [activeView, setActiveView] = useState('overview');

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
        );
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchBitcoinData();
    fetchTrendingCoins();
  }, []);


  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      <Header />
      <main className="container mx-auto px-12 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[70%] space-y-5">
            <div className="flex items-center gap-2 text-gray-600">
              <span>Cryptocurrencies</span>
              <span>&gt;&gt;</span>
              <span className="text-black">Bitcoin</span>
            </div>
            <CoinOverview data={bitcoinData} />
            <TradingViewWidget />
            <CoinNavigation />
            <Performance />
            <Sentiment />
            <AboutCoin />
            <Tokenomics />
            <Team />
          </div>

          <div className="lg:w-[30%] space-y-5">
            <GetStarted />
            <TrendingCoins coins={trendingCoins} />
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <YouMayLike coins={trendingCoins} />
        </div>
      </main>
    </div>
  );
}