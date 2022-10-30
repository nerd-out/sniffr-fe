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
    updateUser: builder.mutation<UserState, Partial<UserState>>({
      query(body) {
        return {
          url: 'user/edit',
          method: 'POST',
          body
        };
      }
    }),

    // Untested. Unimplemented on backend.
    getCurrentUser: builder.query({
      query: () => `user`
    }),

    // Untested. Unimplemented on backend.
    getUserById: builder.query<UserState, number>({
      query: (id: number) => `user/${id}`
    }),

    // Untested. No access to this feature on frontend.
    deleteUser: builder.mutation<UserState, number>({
      query: (id: number) => ({
        url: `user/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useUpdateUserMutation,
  useGetCurrentUserQuery,
  useDeleteUserMutation
} = userApi;
