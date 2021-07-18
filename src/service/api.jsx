import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "../components/home";

const CoinApi = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getDataCoinApi();
  }, []);

  const getDataCoinApi = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    );
    setCoins(response.data);
  };

  return (
    <div>
      <Home coins={coins} />
    </div>
  );
};

export default CoinApi;
