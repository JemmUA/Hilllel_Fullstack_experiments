import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {}
})

export type RootState = ReturnType<typeof store.getState>;  // ReturnType - це утиліта TypeScript,
// яка робить з store.getState тайпскриптовий тип (type),  відповідно RootState - це тип для нашого state.

export type AppDispatch = typeof store.dispatch; // AppDispatch - це тип dispatch

// Наступним кроком огортаємо наш App в Provider