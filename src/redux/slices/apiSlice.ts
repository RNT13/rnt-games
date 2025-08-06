import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include'
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
    }),
    registerUser: builder.mutation<RegisterResponse, RegisterPayLoad>({
      query: body => ({
        url: 'users',
        method: 'POST',
        body
      })
    }),
    loginUser: builder.mutation<LoginResponse, LoginPayLoad>({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body
      })
    }),
    logoutUser: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST'
      })
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetGamesListQuery,
  usePostPurchaseMutation,
  useGetGameByIdQuery,
  useGetUpcomingGamesQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation
} = apiSlice
