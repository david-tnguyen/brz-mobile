import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchPrice, fetchQuote } from "../api/yahoo_finance";

export default DetailsScreen = (props) => {
  const [data, setData] = useState(null);
  const [quote, setQuote] = useState(null);

  const fetchPrices = async () => {
   const data = await fetchPrice(props.route.params.symbol);
   setData(data);
  };

  const fetchQuotes = async () => {
    const data = await fetchQuote(props.route.params.symbol);
    setQuote(data);
   };

  useEffect(() => {
    fetchPrices();
    fetchQuotes();
  }, [])


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {
        data && (
          <View>
            <Text>{data[0].price.shortName}</Text>
            <Text>{data[0].price.symbol}</Text>
            <Text>{data[0].price.marketCap.fmt}</Text>
            <Text>{`$${data[0].price.regularMarketOpen.fmt}`}</Text>
            <Text>{`$${data[0].price.regularMarketDayHigh.fmt}`}</Text>
            <Text>{`$${data[0].price.regularMarketDayLow.fmt}`}</Text>
            {/* <Text>{`${quote[0].trailingPE.toFixed(2)}`}</Text> */}
          </View>
        )
      }

    </View>
  );
}
