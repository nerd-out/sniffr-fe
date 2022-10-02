import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const matchesApi = createApi({
  reducerPath: 'matches',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sniffr-be.herokuapp.com',
    prepareHeaders: headers => {
      headers.set('x-access-token', localStorage.getItem('x-access-token'));
      return headers;
    }
  }),
  endpoints: builder => ({
    getMatches: builder.query({
      query: bool => `matches`
    })
  })
});

export const { useGetMatchesQuery } = matchesApi;
