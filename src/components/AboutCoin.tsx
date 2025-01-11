"use client";

import { Card } from "@/components/ui/card";

export function AboutCoin() {
  return (
    <Card className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-[#0f1629]">About Bitcoin</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2 text-[#0b1426]">What is Bitcoin?</h3>
          <p className="text-[#3e424a]">
            Bitcoin's price today is US$46,953.04, with a 24-hour trading volume of $13.56 B. BTC is +0.36% in the last 24 hours. It is currently -7.21% from its 7-day all-time high of $50,814.34, and 7.79% from its 7-day all-time low of $43,561.27. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-semibold mb-2 text-[#0b1426]">Lorem ipsum dolor sit amet</h3>
          <p className="text-[#3e424a] mb-4">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p className="text-[#3e424a] mb-4">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat.
          </p>
          <p className="text-[#3e424a]">
            Id nibh non nisi nibh faucibus. A mattis consectetur nulla amet. Fermentum non egestas leo ultricies elementum iaculis.
          </p>
        </div>

    
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-2xl font-semibold mb-4 text-[#0f1629]">Already Holding Bitcoin?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-4 flex items-center gap-8 bg-gradient-to-r from-[#79f1a4] to-[#0e5cad]">
              <img
                src="/smartphone2.png"
                alt="Calculate your Profits"
                className="w-[128px] h-[128px] rounded-md"
              />
              <div>
                <h4 className="font-bold text-white text-[28px]">
                  Calculate your Profits
                </h4>
                <button className="mt-2 px-4 py-2 bg-white text-[#0f1629] font-semibold rounded-md text-sm flex items-center gap-1">
                  Check Now →
                </button>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-8 bg-gradient-to-r from-[#ff9865] to-[#ef3031]">
              <img
                src="/smartphone1.png"
                alt="Calculate your Tax Liability"
                className="w-[128px] h-[128px] rounded-md"
              />
              <div >
                <h4 className="font-bold text-white text-[28px]">
                  Calculate your tax liability
                </h4>
                <button className="mt-2 px-4 py-2 bg-white text-[#0f1629] font-semibold rounded-md text-sm flex items-center gap-1">
                  Check Now →
                </button>
              </div>
            </Card>
          </div>
        </div>
        <p className="text-[#3e424a]">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
          </p>
      </div>
    </Card>
  );
}
