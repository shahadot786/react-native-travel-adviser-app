import axios from 'axios';

export const getPlaceData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: '23.66127037347851',
          tr_latitude: '23.90000252575925',
          bl_longitude: '90.32954684784485',
          tr_longitude: '90.5090165691367',
          limit: '30',
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
