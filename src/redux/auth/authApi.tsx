import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sniffr-be.herokuapp.com",
  }),
  endpoints: (builder) => ({
    login: builder.query<AuthState, Partial<AuthState>>({
      query(body) {
        return {
          url: `login`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useLoginQuery } = authApi;