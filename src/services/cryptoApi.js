import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '8fe0b369bemsh2e19d64801e26afp105b41jsncce8a01ce5f5'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     headers: {
//         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//         'x-rapidapi-key': '8fe0b369bemsh2e19d64801e26afp105b41jsncce8a01ce5f5'
//     }
// };

const createRequest = url => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
});

export const { useGetCryptosQuery } = cryptoApi;
