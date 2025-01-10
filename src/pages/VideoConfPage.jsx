import React from "react";
import BottomBar from "../components/BottomBar";

const VideoConfPage = () => {
  return (
    <div className="flex flex-col items-center bg-blue-50 h-full py-8">
      <h1 className="text-2xl font-semibold text-gray-700">Video Conference</h1>
      <p className="text-gray-500 mt-4">This is the video conference page.</p>
      <BottomBar/>
    </div>
  );
};

export default VideoConfPage;
