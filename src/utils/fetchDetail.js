import axios from 'axios';

export const fetchDetail = async (externalID) => {
  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/detail',
    params: {
      externalID
    },
    headers: {
      'X-RapidAPI-Key': '92d8461160mshe3c4ed750fb8e96p17da10jsn6cbd44ae1925',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };

  try {
    // console.log(options);
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(`Error fetching detail..`, error);
  }
};
