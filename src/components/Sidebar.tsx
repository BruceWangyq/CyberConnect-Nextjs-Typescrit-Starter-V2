import { useWeb3 } from "@/context/web3Context";
import { Typography } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileCard";

function Sidebar() {
  const { address } = useWeb3();
  return (
    <div className="space-y-2 min-w-max max-w-lg w-1/4">
      <Typography>Sidebar</Typography>
      <ProfileCard />
    </div>
  );
}

export default Sidebar;
