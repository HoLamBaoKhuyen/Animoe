import { createSlice } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import {GET_ANIME_RANKING_ENDPOINT, SEARCH_ANIME_ENDPOINT} from '../../apis/endpoints'

const initialState = {
	ranking: {
		ona: [],
		airing: [],
		upcoming: [],
		tv: [],
		ova: [],
		movie: [],
		special: [],
		popularity: [],
		favorite: [],
	},
}

export const animeSlice = createSlice({
	name: 'anime',
	initialState,
	reducers: {},
})

const animeApi = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		getTypeRanking: build.query({
			query: (type) => ({
				url: `${GET_ANIME_RANKING_ENDPOINT}?type=${type}`,
				method: 'GET',
			}),
		}),
		getFilterRanking: build.query({
			query: (filter) => ({
				url: `${GET_ANIME_RANKING_ENDPOINT}?filter=${filter}`,
				method: 'GET',
			}),
		}),
		getTopFiveAnime: build.query({
			query: (filter) => ({
				url: `${GET_ANIME_RANKING_ENDPOINT}?filter=${filter}&limit=5`,
				method: 'GET',
			}),
		}),
		searchAnime: build.query({
			query: (strQuery) => ({
				url: `${SEARCH_ANIME_ENDPOINT}?q=${strQuery}`,
				method: 'GET',
			}),
		}),
	}),
})

export default animeSlice.reducer

export const { useGetTypeRankingQuery, useGetFilterRankingQuery, useGetTopFiveAnimeQuery, useSearchAnimeQuery } = animeApi
