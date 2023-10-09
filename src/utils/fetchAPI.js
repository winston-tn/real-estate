import axios from 'axios';

export const fetchAPI = async ({
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
      'X-RapidAPI-Key': '70ee507d19msh5c16a5be76fe3f5p133be0jsn6cf59756da56',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };

  try {
    // console.log(options);
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(`Error fetching..`, error);
  }
};
