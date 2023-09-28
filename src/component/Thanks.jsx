import React from "react";

const Thanks = () => {
  return (
    <div className="centered-image-container">
      <img
        src="https://th.bing.com/th/id/R.41d23e9b321a39530461716b511d2149?rik=bKm4ayyacNiRYg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgreen-tick-png-green-tick-icon-image-14141-1000.png&ehk=3U0tpIObVeYbY2T%2b%2bzARLcBcgQNB1ZRTyxFNRackJhg%3d&risl=&pid=ImgRaw&r=0"
        alt="Centered"
        className="centered-image"
        height={100}
      />
      <div>
        <h4>Application link is sent on your whatsapp</h4>
        <h4>I hope your day gets better</h4>

        <button onClick={() => window.location.reload(false)}>Restart</button>
      </div>
    </div>
  );
};

export default Thanks;
