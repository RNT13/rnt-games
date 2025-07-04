import { combineReducers, configureStore as toolkitConfigureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  redux: () => ({})
})

export type RootState = ReturnType<typeof rootReducer>

export function configureStore(preloadedState?: Partial<RootState>) {
  return toolkitConfigureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST']
        }
      })
  })
}

export const store = configureStore()

export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
export type RootReducer = typeof rootReducer
