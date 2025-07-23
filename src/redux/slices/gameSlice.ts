import { getGameById, getGamesList, getSoonGamesList, postePurchase } from '@/services/api'
import { GameType } from '@/types/GameType'
import { PurchasePayLoad } from '@/types/PurchaseType'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface GamesState {
  gameById: GameType | null
  gamesList: GameType[]
  soonGamesList: GameType[]
  Purchase: PurchasePayLoad[]
  loading: boolean
  error: string | null
}

const initialState: GamesState = {
  gameById: null,
  gamesList: [],
  soonGamesList: [],
  Purchase: [],
  loading: false,
  error: null
}

export const fetchGameById = createAsyncThunk('games/fetchGameById', async (id: string) => {
  const data = await getGameById(id)
  return data
})

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const data = await getGamesList()
  return data
})

export const fetchSoonGames = createAsyncThunk('games/fetchSoonGames', async () => {
  const data = await getSoonGamesList()
  return data
})

export const fetchPurchase = createAsyncThunk('games/fetchPurchase', async (body: PurchasePayLoad) => {
  const data = await postePurchase(body)
  return data
})

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGames.pending, state => {
        state.loading = true
        state.error = null
      })

      .addCase(fetchGames.fulfilled, (state, action) => {
        state.gamesList = action.payload
        state.loading = false
      })

      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Erro ao buscar jogos'
      })

      .addCase(fetchSoonGames.fulfilled, (state, action) => {
        state.soonGamesList = action.payload
      })

      .addCase(fetchGameById.fulfilled, (state, action) => {
        state.gameById = action.payload
      })

      .addCase(fetchPurchase.fulfilled, (state, action) => {
        state.Purchase = action.payload
      })
  }
})

export default gamesSlice.reducer
