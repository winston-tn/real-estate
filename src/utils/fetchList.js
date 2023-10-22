import axios from 'axios';

export const fetchList = async ({
  purpose,
  locationExternalIDs = "5002,6020",
  hitsPerPage,
  page = "0",
  lang = "en",
  rentFrequency,
  priceMin,
  priceMax,
  sort = "price-desc",
  areaMax,
  roomsMin,
  bathsMin,
  furnishingStatus,
  categoryExternalID
}) => {
  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/list',
    params: {
      locationExternalIDs,
      purpose,
      hitsPerPage,
      page,
      lang,
      rentFrequency,
      priceMin,
      priceMax,
      sort,
      areaMax,
      roomsMin,
      bathsMin,
      furnishingStatus,
      categoryExternalID
    },
    headers: {
      'X-RapidAPI-Key': '92d8461160mshe3c4ed750fb8e96p17da10jsn6cbd44ae1925',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(`Error fetching list..`, error);
  }
};
