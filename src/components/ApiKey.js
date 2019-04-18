import React from "react";

const ApiKey = () => {
  const getNewApiKey = () => {
    fetch(`https://www.forverkliga.se/JavaScript/api/crud.php?requestKey`)
      .then(resp => resp.json())
      .then(data => localStorage.setItem("ApiKey", data.key));
    console.log("Get new key...");
  };

  const buttonStyle = {
    width: "250px"
  };

  return (
    <button
      onClick={getNewApiKey}
      type="button"
      className="btn btn-primary btn-lg btn-block"
      style={buttonStyle}
    >
      Hämta ny API-Nyckel
    </button>
  );
};

export default ApiKey;
