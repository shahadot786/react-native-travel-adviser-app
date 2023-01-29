import axios from 'axios';

export const getPlaceData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : '23.66127037347851',
          tr_latitude: tr_lat ? tr_lat : '23.90000252575925',
          bl_longitude: bl_lng ? bl_lng : '90.32954684784485',
          tr_longitude: tr_lng ? tr_lng : '90.5090165691367',
          limit: '50',
          currency: 'USD',
          lunit: 'km',
          lang: 'en_US',
        },
        headers: {
          'X-RapidAPI-Key':
            '69ae9bcf46mshe82120ad73c8122p1b5850jsn86662fbf3898',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );
    return data;
  } catch (error) {
    return console.log(error);
  }
};
