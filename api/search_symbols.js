export const fetchSymbols = async (symbol) => {
  try {
    const response = await fetch(`http://localhost:5000/tiingo_search/${symbol}`)
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}