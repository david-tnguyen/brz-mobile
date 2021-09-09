export const fetchPrice = async () => {
  try {
    const response = await fetch()
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}