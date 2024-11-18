import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const callsApi = createApi({
  reducerPath: "calls",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aircall-api.onrender.com",
  }),
  endpoints(builder) {
    return {
      fetchCalls: builder.query({
        providesTags: (result, error) => {
          const tags = result.map((call) => ({ type: "Call", id: call.id }));
          tags.push("All_Calls");
          return tags;
        },
        query: () => {
          return {
            method: "GET",
            url: "/activities",
          };
        },
      }),
      fetchCallDetails: builder.query({
        query: (call) => {
          return {
            method: "GET",
            url: `/activities/${call.id}`,
          };
        },
      }),
      archiveCall: builder.mutation({
        invalidatesTags: (result, error, call) => [
          {
            type: "Call",
            id: call.id,
          },
        ],
        query: (call) => {
          return {
            method: "PATCH",
            url: `activities/${call.id}`,
            body: {
              is_archived: true,
            },
          };
        },
      }),
      resetAllCalls: builder.mutation({
        invalidatesTags: (result, error, arg) => {
          return ["All_Calls"];
        },
        query: () => {
          return {
            method: "PATCH",
            url: "reset",
          };
        },
      }),
    };
  },
});

export const {
  useFetchCallsQuery,
  useArchiveCallMutation,
  useResetAllCallsMutation,
  useFetchCallDetailsQuery,
} = callsApi;
export { callsApi };
