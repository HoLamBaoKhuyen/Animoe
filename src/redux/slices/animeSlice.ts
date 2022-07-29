import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import {
  GET_ANIME_RANKING_ENDPOINT,
  ANIME_ENDPOINT,
  RECOMMENDATIONS_ENDPOINT
} from "../../apis/endpoints";

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
};

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
});

export const animeApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTypeRanking: build.query({
      query: (type) => ({
        url: `${GET_ANIME_RANKING_ENDPOINT}?type=${type}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getFilterRanking: build.query({
      query: (filter) => ({
        url: `${GET_ANIME_RANKING_ENDPOINT}?filter=${filter}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getTopFiveAnime: build.query({
      query: (filter) => ({
        url: `${GET_ANIME_RANKING_ENDPOINT}?filter=${filter}&limit=4`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getAnimeSearch: build.query({
      query: (params) => ({
        url: `${ANIME_ENDPOINT}?q=${params.strQuery}&limit=${params.limit}&page=${params.page}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getAnimeById: build.query({
      query: (id) => ({
        url: `${ANIME_ENDPOINT}/${id}/full`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getAnimeEpisodes: build.query({
      query: (id) => ({
        url: `${ANIME_ENDPOINT}/${id}/episodes`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getRecentAnimeRecommendations: build.query({
      query: (page) => ({
        url: `${RECOMMENDATIONS_ENDPOINT}${ANIME_ENDPOINT}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
  }),
});

export default animeSlice.reducer;

export const {
  useGetTypeRankingQuery,
  useGetFilterRankingQuery,
  useGetTopFiveAnimeQuery,
  useGetAnimeSearchQuery,
  useGetAnimeByIdQuery,
  useGetAnimeEpisodesQuery,
  useGetRecentAnimeRecommendationsQuery,
} = animeApi;
