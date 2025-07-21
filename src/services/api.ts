import { GameType } from '@/types/GameType'
import { fakeApi } from './axios'

export const getGameById = async (id: string): Promise<GameType> => {
  const response = await fakeApi.get(`/jogos/${id}`)
  return response.data
}

export const getGamesList = async (): Promise<GameType[]> => {
  const response = await fakeApi.get('/promocoes')
  return response.data
}

export const getSoonGamesList = async (): Promise<GameType[]> => {
  const response = await fakeApi.get('/em-breve')
  return response.data
}
