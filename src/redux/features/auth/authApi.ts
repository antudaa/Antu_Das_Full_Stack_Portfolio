import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo: { email: string; password: string }) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo,
            }),
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
        }),
        getAntuDaaData: builder.query({
            query: () => ({
                url: `/personal-info`,
                method: "GET",
            }),
            providesTags: ["admin"],
        }),
    }),
});

export const {
    useLoginMutation,
    useLogoutUserMutation,
    useGetAntuDaaDataQuery,
} = authApi;
