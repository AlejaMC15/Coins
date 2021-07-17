import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/search";

const CoinApi = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    getDataCoinApi();
  }, []);

  const getDataCoinApi = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    );
    setCoin(response);
  };

  return (
    <div>
      <Search coin={coin} />
    </div>
  );
};

export default CoinApi;
