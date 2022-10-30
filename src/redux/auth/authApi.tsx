import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sniffr-be.herokuapp.com'
    // baseUrl: "http://localhost:8080"
  }),
  endpoints: builder => ({
    login: builder.mutation<AuthResponse, any>({
      query(body) {
        return {
          url: `login`,
          method: 'POST',
          body
        };
      }
    }),
    registration: builder.mutation<AuthResponse, any>({
      query(body) {
        return {
          url: `register`,
          method: 'POST',
          body
        };
      }
    })
  })
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
