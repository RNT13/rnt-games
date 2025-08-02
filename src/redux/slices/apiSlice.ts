import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api'
  }),
  endpoints: builder => ({
    getFeaturedGame: builder.query<GameType, void>({
      query: () => 'games?highlight=true'
    }),
    getGamesList: builder.query<GameType[], void>({
      query: () => 'games'
    }),
    getGameById: builder.query<GameType, string>({
      query: id => `games/${id}`
    }),
    getUpcomingGames: builder.query<GameType[], void>({
      query: () => 'games/upcoming'
    }),
    postPurchase: builder.mutation<PurchaseResponse, PurchasePayLoad>({
      query: body => ({
        url: 'orders',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetFeaturedGameQuery, useGetGamesListQuery, usePostPurchaseMutation, useGetGameByIdQuery, useGetUpcomingGamesQuery } = apiSlice
