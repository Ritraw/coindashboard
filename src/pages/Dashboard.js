import axios from 'axios';
import React from 'react'
import Header from "../components/header/Header"
import Tabs from "../components/dashboard/Tabs/Tabs"
import { useState, useEffect } from 'react'
import Search from '../components/dashboard/search/Search';


function Dashboard() {
  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState("");
  const onChange = (e)=>
  {
    setSearch(e.target.value);
  };
  var filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    ) {
      return coin;
    }
  });
  useEffect(()=>{
    getData();
  }, []);

  const getData = ()=>{
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response)=>{
        console.log("Response>>", response);
        if(response.status===200){
          setCoins(response.data)
        }
      })
      .catch((error)=>{
        console.log("Error>>",error);
      });
  };

  return (
    <div>
    <Header/>
    <Search search={search} onChange={onChange}/>
    <Tabs coins={filteredCoins}/>
    </div>
  )
}

export default Dashboard