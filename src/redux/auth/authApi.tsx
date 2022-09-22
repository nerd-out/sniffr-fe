import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sniffr-be.herokuapp.com'
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
    register: builder.mutation<AuthResponse, any>({
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

export const { useLoginMutation, useRegisterMutation } = authApi;
