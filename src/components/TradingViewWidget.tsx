"use client";

import { useEffect, useRef, memo } from "react";
import { Card } from "@/components/ui/card";

function TradingViewWidgetComponent() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof TradingView !== "undefined" && container.current) {
        new TradingView.widget({
          autosize: true,
          symbol: "BITSTAMP:BTCUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_chart",
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <Card className="p-6 bg-white">
      <div
        id="tradingview_chart"
        ref={container}
        style={{ height: "500px" }}
      />
    </Card>
  );
}

export const TradingViewWidget = memo(TradingViewWidgetComponent);