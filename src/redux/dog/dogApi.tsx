// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dogApi = createApi({
  reducerPath: 'dog',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sniffr-be.herokuapp.com',
    prepareHeaders: headers => {
      headers.set('x-access-token', localStorage.getItem('x-access-token'));
      return headers;
    }
  }),
  endpoints: builder => ({
    createDog: builder.mutation<DogState, Partial<DogState>>({
      query(body) {
        return {
          url: `dogs`,
          method: 'POST',
          body
        };
      }
    }),
    getDog: builder.query<Any, boolean>({
      query: (arg: boolean) => `dogs/user`
    }),
    getDogById: builder.query<DogState, number>({
      query: (id: number) => `dog/${id}`
    })
  })
});

export const { useGetDogByIdQuery, useCreateDogMutation, useGetDogQuery } =
  dogApi;
