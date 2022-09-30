import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dogApi = createApi({
  reducerPath: 'dog',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sniffr-be.herokuapp.com'
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
    getDogById: builder.query<DogState, number>({
      query: (id: number) => `dog/${id}`
    })
  })
});

export const { useGetDogByIdQuery, useCreateDogMutation } = dogApi;
