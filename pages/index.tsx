import type { NextPage } from "next";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="flex justify-center">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Home;
