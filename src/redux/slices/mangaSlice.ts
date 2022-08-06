import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { GET_MANGA_RANKING_ENDPOINT, MANGA_ENDPOINT, RECOMMENDATIONS_ENDPOINT} from "../../apis/endpoints";

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

const mangaApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTypeRanking: build.query({
      query: (type) => ({
        url: `${GET_MANGA_RANKING_ENDPOINT}?type=${type}`,
        method: "GET",
      }),
    }),
    getFilterRanking: build.query({
      query: (filter) => ({
        url: `${GET_MANGA_RANKING_ENDPOINT}?filter=${filter}`,
        method: "GET",
      }),
    }),
    getTopFiveManga: build.query({
      query: (filter) => ({
        url: `${GET_MANGA_RANKING_ENDPOINT}?filter=${filter}&limit=5`,
        method: "GET",
      }),
    }),
    getMangaSearch: build.query({
      query: (params) => ({
        url: `${MANGA_ENDPOINT}?q=${params.strQuery}&limit=${params.limit}&page=${params.page}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }, meta: any, arg: any) => {
        return response.data;
      },
    }),
    getRecentMangaRecommendations: build.query({
      query: (page) => ({
        url: `${RECOMMENDATIONS_ENDPOINT}${MANGA_ENDPOINT}`,
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
  useGetTypeRankingQuery,
  useGetFilterRankingQuery,
  useGetTopFiveMangaQuery,
  useGetMangaSearchQuery,
  useGetRecentMangaRecommendationsQuery,
} = mangaApi;
