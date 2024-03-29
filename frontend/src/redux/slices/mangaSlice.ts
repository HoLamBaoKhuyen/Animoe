import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import {
  GET_MANGA_RANKING_ENDPOINT,
  MANGA_ENDPOINT,
  RECOMMENDATIONS_ENDPOINT,
} from "../../apis/endpoints";

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
};

export const mangaSlice = createSlice({
  name: "manga",
  initialState,
  reducers: {},
});

export const mangaApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMangaTypeRanking: build.query({
      query: (type) => ({
        url: `${GET_MANGA_RANKING_ENDPOINT}?type=${type}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getMangaFilterRanking: build.query({
      query: (filter) => ({
        url: `${GET_MANGA_RANKING_ENDPOINT}?filter=${filter}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getTopFiveManga: build.query({
      query: (filter) => ({
        url: `${GET_MANGA_RANKING_ENDPOINT}?filter=${filter}&limit=5`,
        method: "GET",
      }),
    }),
    getMangaById: build.query({
      query: (id) => ({
        url: `${MANGA_ENDPOINT}/${id}/full`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getMangaSearch: build.query({
      query: (params) => ({
        url: `${MANGA_ENDPOINT}?${params.params}&limit=${params.limit}&page=${params.page}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getRecentMangaRecommendations: build.query({
      query: (page) => ({
        url: `${RECOMMENDATIONS_ENDPOINT}${MANGA_ENDPOINT}`,
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getMangaEpisodes: build.query({
      query: (id) => ({
        url: `${MANGA_ENDPOINT}/${id}/episodes`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getMangaCharacters: build.query({
      query: (id) => ({
        url: `${MANGA_ENDPOINT}/${id}/characters`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getMangaStaff: build.query({
      query: (id) => ({
        url: `${MANGA_ENDPOINT}/${id}/staff`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getMangaReviews: build.query({
      query: (id) => ({
        url: `${MANGA_ENDPOINT}/${id}/reviews`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getMangaRecommendations: build.query({
      query: (id) => ({
        url: `${MANGA_ENDPOINT}/${id}/recommendations`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getMangaVideos: build.query({
      query: (id) => ({
        url: `${MANGA_ENDPOINT}/${id}/videos`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getMangaRelations: build.query({
      query: (id) => ({
        url: `${MANGA_ENDPOINT}/${id}/relations`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
  }),
});

export default mangaSlice.reducer;

export const {
  useGetMangaTypeRankingQuery,
  useGetMangaFilterRankingQuery,
  useGetTopFiveMangaQuery,
  useGetMangaByIdQuery,
  useGetMangaSearchQuery,
  useGetRecentMangaRecommendationsQuery,
  useGetMangaEpisodesQuery,
  useGetMangaCharactersQuery,
  useGetMangaStaffQuery,
  useGetMangaReviewsQuery,
  useGetMangaRelationsQuery,
  useGetMangaRecommendationsQuery,
  useGetMangaVideosQuery,
} = mangaApi;
