import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import setHeaders from '../helpers/setHeaders';
import { apiPaths } from '../routes';

export const messagesApi = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: apiPaths.messages(), prepareHeaders: setHeaders, tagTypes: ['Messages'],
    },
  ),
  tagTypes: ['Messages'],
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => '',
    }),
    addMessage: builder.mutation({
      query: (message) => ({
        method: 'POST',
        body: message,
      }),
    }),
  }),
});

export const {
  useGetMessagesQuery, useAddMessageMutation,
} = messagesApi;
