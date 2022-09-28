import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const swipesApi = createApi({
  reducerPath: 'swipes',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_PROD_BE,
    prepareHeaders: headers => {
      headers.set('x-access-token', localStorage.getItem('x-access-token'));
      return headers;
    }
  }),
  endpoints: builder => ({
    createSwipe: builder.mutation({
      query(body) {
        return {
          url: `swipe`,
          method: 'POST',
          body
        };
      }
    }),
    getAvailableSwipes: builder.query({
      query: (bool) => `swipes`
    })
  })
});

export const { useGetAvailableSwipesQuery, useCreateSwipeMutation } = swipesApi;
