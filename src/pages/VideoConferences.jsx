import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const VideoConferences = () => {
  const [requests, setRequests] = useState([
    { id: 1, studentName: "John Doe", reason: "Discuss health issues" },
    { id: 2, studentName: "Jane Smith", reason: "Follow-up consultation" },
  ]);

  const [history, setHistory] = useState([
    { id: 1, studentName: "Michael Johnson", date: "2025-01-08", time: "10:00 AM" },
    { id: 2, studentName: "Emma Williams", date: "2025-01-07", time: "2:00 PM" },
  ]);

  const navigate = useNavigate();

  const handleAccept = (id) => {
    const acceptedRequest = requests.find((req) => req.id === id);
    setHistory([...history, { ...acceptedRequest, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() }]);
    setRequests(requests.filter((req) => req.id !== id));
    navigate("/meet"); // Redirect to the video conference page
  };

  const handleReject = (id) => {
    setRequests(requests.filter((req) => req.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
    
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Video Conference Requests</h1>

        {/* Pending Requests */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Pending Requests</h2>
          {requests.length > 0 ? (
            <div className="space-y-4">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-800 font-medium">{req.studentName}</p>
                    <p className="text-gray-600 text-sm">{req.reason}</p>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleAccept(req.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(req.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No pending requests.</p>
          )}
        </div>

        {/* Conference History */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Conference History</h2>
          {history.length > 0 ? (
            <div className="space-y-4">
              {history.map((conf) => (
                <div key={conf.id} className="bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-gray-800 font-medium">{conf.studentName}</p>
                  <p className="text-gray-600 text-sm">
                    {conf.date} at {conf.time}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No past conferences.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoConferences;
