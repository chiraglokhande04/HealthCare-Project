import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import FindDoctorPage from "./pages/Loading";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import VideoConfPage from "./pages/VideoConfPage";

const App = () => {
  return (
    <Router>
     
      <div className=" flex  my-5 justify-center ">
        {/* Content Wrapper */}
        <div className="bg-white w-full max-w-sm shadow-lg h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<FindDoctorPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/video" element={<VideoConfPage />} />
          </Routes>

          {/* Bottom Navigation */}
          
        </div>
      </div>


    </Router>
  );
};

export default App;
