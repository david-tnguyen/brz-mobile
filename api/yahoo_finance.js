export const fetchPrice = async (symbol) => {
  try {
    const response = await fetch(`http://localhost:5000/yahoo_price/${symbol}`)
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}

export const fetchQuote = async (symbol) => {
  try {
    const response = await fetch(`http://localhost:5000/yahoo_quotes/${symbol}`)
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}