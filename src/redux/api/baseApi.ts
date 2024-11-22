// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const baseApi = createApi({
//     reducerPath: 'baseApi',
//     baseQuery: fetchBaseQuery({
//         // baseUrl: `https://antu-portfolio-backend.vercel.app/api/`,
//         baseUrl: `http://localhost:4000/api/`,
//         credentials: 'include',
//     }),
//     tagTypes: ['admin'],
//     endpoints: () => ({}),
// });

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:4000/api/`,
        credentials: "include",
    }),
    tagTypes: ["admin"],
    endpoints: () => ({}),
});
