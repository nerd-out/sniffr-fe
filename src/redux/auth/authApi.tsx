import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_PROD_BE
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
    })
  })
});

export const { useLoginMutation } = authApi;
