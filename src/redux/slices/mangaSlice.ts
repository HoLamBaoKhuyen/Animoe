import { createSlice } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import { GET_MANGA_RANKING_ENDPOINT } from '../../apis/endpoints'

const initialState = {
	ranking: {
		manga: [],
		novel: [],
		lightnovel: [],
		oneshot: [],
		doujin: [],
		manhwa: [],
		manhua: [],
		publishing: [],
		upcoming: [],
		popularity: [],
		favorite: [],
	},
}

export const mangaSlice = createSlice({
	name: 'manga',
	initialState,
	reducers: {},
})

const mangaApi = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		getMangaTypeRanking: build.query({
			query: (type) => ({
				url: `${GET_MANGA_RANKING_ENDPOINT}?type=${type}`,
				method: 'GET',
			}),
			transformResponse: (response: { data: any }, meta: any, arg: any) => {
				return response.data
			},
		}),
		getMangaFilterRanking: build.query({
			query: (filter) => ({
				url: `${GET_MANGA_RANKING_ENDPOINT}?filter=${filter}`,
				method: 'GET',
			}),
			transformResponse: (response: { data: any }, meta: any, arg: any) => {
				return response.data
			},
		}),
		getTopFiveManga: build.query({
			query: (filter) => ({
				url: `${GET_MANGA_RANKING_ENDPOINT}?filter=${filter}&limit=5`,
				method: 'GET',
			}),
		}),
	}),
})

export default mangaSlice.reducer

export const { useGetMangaTypeRankingQuery, useGetMangaFilterRankingQuery, useGetTopFiveMangaQuery } = mangaApi
