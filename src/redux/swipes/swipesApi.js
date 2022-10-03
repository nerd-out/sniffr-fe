import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const swipesApi = createApi({
  reducerPath: 'swipes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sniffr-be.herokuapp.com',
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
    getSwipe: builder.query({
      query: bool => `swipes`
    })
  })
});

export const { useGetSwipeQuery, useCreateSwipeMutation } = swipesApi;
