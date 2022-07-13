import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'animeApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.jikan.moe/v4/',
	}),
	endpoints: () => ({}),
})
