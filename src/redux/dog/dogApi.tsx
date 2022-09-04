// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const dogApi = createApi({
  reducerPath: 'dog',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_PROD_BE,
  }),
  endpoints: (builder) => ({
    createDog: builder.mutation<DogState, Partial<DogState>>({
      query(body) {
        return {
          url: `dogs`,
          method: 'POST',
          body,
        };
      },
    }),
    getDogById: builder.query<DogState, number>({
      query: (id: number) => `dog/${id}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints

export const { useGetDogByIdQuery, useCreateDogMutation } = dogApi;
