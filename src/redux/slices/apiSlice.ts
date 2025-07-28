import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay/'
  }),
  endpoints: builder => ({
    getFeaturedGame: builder.query<GameType, void>({
      query: () => 'destaque'
    }),
    getGameById: builder.query<GameType, string>({
      query: id => `jogos/${id}`
    }),
    getGamesList: builder.query<GameType[], void>({
      query: () => 'promocoes'
    }),
    getSoonGamesList: builder.query<GameType[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<GameType[], void>({
      query: () => 'acao'
    }),
    getSportGames: builder.query<GameType[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<GameType[], void>({
      query: () => 'simulacao'
    }),
    postPurchase: builder.mutation<PurchaseResponse, PurchasePayLoad>({
      query: body => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetGamesListQuery,
  useGetSoonGamesListQuery,
  useGetGameByIdQuery,
  usePostPurchaseMutation,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery
} = apiSlice
