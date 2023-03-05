import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../../models/models";

export const placeholderApi = createApi({
    reducerPath: "placeholder/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    endpoints: build => ({
        getPosts: build.query<IPost[], void>({
            query: () => ({
                url: "posts"
            })
        }),
        getPost: build.query<IPost, number>({
            query: (id: number) => ({
                url: `posts/${id}`
            })
        })
    })
})

export const {useGetPostsQuery, useLazyGetPostQuery} = placeholderApi;