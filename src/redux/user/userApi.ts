// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sniffr-be.herokuapp.com',
    prepareHeaders: headers => {
      headers.set('x-access-token', localStorage.getItem('x-access-token'));
      return headers;
    }
  }),
  endpoints: builder => ({
    createUser: builder.mutation<UserState, Partial<UserState>>({
      query(body) {
        return {
          url: 'user',
          method: 'POST',
          body
        };
      }
    })
  }),
  // FIXME: Type mismatch:
  getUserById: builder.query<UserState, number>({
    query: (id: number) => `user/${id}`
  })
});

export const { useGetUserByIdQuery, useUpdateUserMutation } = userApi;
