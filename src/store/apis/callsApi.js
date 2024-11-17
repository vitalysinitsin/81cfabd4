import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const callsApi = createApi({
  reducerPath: "calls",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aircall-api.onrender.com",
  }),
  endpoints(builder) {
    return {
      fetchCalls: builder.query({
        query: () => {
          return {
            method: "GET",
            url: "/activities",
          };
        },
      }),
      // fetchCallDetails: builder.query({}),
      // archiveCall: builder.mutation({}),
      // resetAllCalls: builder.mutation({}),
    };
  },
});

export const { useFetchCallsQuery } = callsApi;
export { callsApi };
