// import React, { useRef, useState, useEffect } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { APP_ID, SECRET } from "../../config";
// import "./Room.css";

// function Room() {
//   const { roomId } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const zpRef = useRef(null);
//   const videoContainerRef = useRef(null);
//   const [joined, setJoined] = useState(false);
//   const [callType, setCallType] = useState(""); 

//   const myMeeting = (type) => {
//     const appID = APP_ID;
//     const serverSecret = SECRET;
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomId,
//       Date.now().toString(),
//       "You Name"
//     );

//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     zpRef.current = zp;

//     zp.joinRoom({
//       container: videoContainerRef.current,
//       sharedLinks: [
//         {
//           name: "Video Call Link",
//           url:
//             window.location.protocol +
//             "//" +
//             window.location.host +
//             window.location.pathname +
//             "?type=" + encodeURIComponent(type),
//         },
//       ],
//       scenario: {
//         mode:
//           type === "one-on-one"
//             ? ZegoUIKitPrebuilt.OneONoneCall
//             : ZegoUIKitPrebuilt.OneONoneCall,
//       },
//       maxUsers: type === "one-on-one" ? 2 : 10,
//       onJoinRoom: () => {
//         setJoined(true);
//       },
//       onLeaveRoom: () => {
//         navigate("/");
//       },
//     });
//   };

//   const handleExit = () => {
//     if (zpRef.current) {
//       zpRef.current.destroy();
//     }
//     navigate("/");
//   };

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const type = query.get("type");

//     setCallType(type);
//   }, [location.search]);


//   useEffect(() => {
//     if (callType) {
//       myMeeting(callType);
//     }


//     return () => {
//       if (zpRef.current) {
//         zpRef.current.destroy();
//       }
//     };
//   }, [callType, roomId, navigate]);

//   return (
//     <div className="room-container">
//       {!joined && (
//         <>
//           <header className="room-header">
//             {callType === "one-on-one"
//               ? "One-on-One Video Call"
//               : "Group Video Call"}
//           </header>
//           <button className="exit-button" onClick={handleExit}>
//             Exit
//           </button>
//         </>
//       )}
//       <div ref={videoContainerRef} className="video-container" />
//     </div>
//   );
// }

// export default Room;

import React, { useRef, useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SECRET } from "../../config";
import "./Room.css";

function Room() {
  const { roomId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const zpRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [joined, setJoined] = useState(false);
  const [callType, setCallType] = useState(""); 
  const [videoQuality, setVideoQuality] = useState("High");

  const myMeeting = (type) => {
    const appID = APP_ID;
    const serverSecret = SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "You Name"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zpRef.current = zp;

    zp.joinRoom({
      container: videoContainerRef.current,
      sharedLinks: [
        {
          name: "Video Call Link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?type=" + encodeURIComponent(type),
        },
      ],
      scenario: {
        mode:
          type === "one-on-one"
            ? ZegoUIKitPrebuilt.OneONoneCall
            : ZegoUIKitPrebuilt.OneONoneCall,
      },
      maxUsers: type === "one-on-one" ? 2 : 10,
      onJoinRoom: () => {
        setJoined(true);
        manageStreamQuality(); // Manage stream quality based on initial setting
      },
      onLeaveRoom: () => {
        navigate("/");
      },
    });
  };

  // Switch between video and audio-only streams using available methods
  const manageStreamQuality = () => {
    if (videoQuality === "Low") {
      if (zpRef.current.mutePublishStream) {
        zpRef.current.mutePublishStream(); // Mute the local video stream (audio-only mode)
      } else {
        console.error("mutePublishStream method not found on zpRef.current");
      }
    } else {
      if (zpRef.current.unmutePublishStream) {
        zpRef.current.unmutePublishStream(); // Restore the local video stream (high-quality mode)
      } else {
        console.error("unmutePublishStream method not found on zpRef.current");
      }
    }
  };

  // Toggle video quality
  const toggleVideoMode = () => {
    if (videoQuality === "High") {
      setVideoQuality("Low");
      if (zpRef.current.mutePublishStream) {
        zpRef.current.mutePublishStream(); // Switch to audio-only mode
      } else {
        console.error("mutePublishStream method not found on zpRef.current");
      }
    } else {
      setVideoQuality("High");
      if (zpRef.current.unmutePublishStream) {
        zpRef.current.unmutePublishStream(); // Switch to video mode
      } else {
        console.error("unmutePublishStream method not found on zpRef.current");
      }
    }
  };

  const handleExit = () => {
    if (zpRef.current) {
      zpRef.current.destroy();
    }
    navigate("/");
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get("type");

    setCallType(type);
  }, [location.search]);

  useEffect(() => {
    if (callType) {
      myMeeting(callType);
    }
    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
      }
    };
  }, [callType, roomId, navigate]);

  useEffect(() => {
    if (zpRef.current) {
      console.log("Available methods on zpRef.current:", Object.keys(zpRef.current));
    }
  }, [zpRef.current]);

  return (
    <div className="room-container">
      {!joined && (
        <>
          <header className="room-header">
            {callType === "one-on-one"
              ? "One-on-One Video Call"
              : "Group Video Call"}
          </header>
          <button className="exit-button" onClick={handleExit}>
            Exit
          </button>
        </>
      )}
      <div ref={videoContainerRef} className="video-container" />

      <div className="video-call-controls">
        <button onClick={toggleVideoMode}>
          {videoQuality === "High"
            ? "Switch to Low Bandwidth Mode"
            : "Switch to High Quality Mode"}
        </button>
      </div>
    </div>
  );
}

export default Room;
