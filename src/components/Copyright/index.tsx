import React from "react";

function Copyright() {
  return (
    <div style={{ width: "100%", height: "90%", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        
      <h1>????</h1>
      <video width="70%" height="100%" autoPlay loop muted>
        <source src={"./video/video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Copyright;
