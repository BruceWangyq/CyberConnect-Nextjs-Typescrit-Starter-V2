import { useWeb3 } from "@/context/web3Context";
import { Typography } from "@mui/material";
import React from "react";

function ProfileCard() {
  const { identity } = useWeb3();
  return (
    <div className="border border-gray-600 rounded-lg p-3">
      <Typography>ProfileCard</Typography>
      {identity && (
        <div className="flex">
          <div className="flex flex-col">
            <Typography variant="h6">{identity.followerCount}</Typography>
            <Typography color={"#989898"}>Followers</Typography>
          </div>
          <div className="flex flex-col">
            <Typography variant="h6">{identity.followingCount}</Typography>
            <Typography color={"#989898"}>Followers</Typography>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
