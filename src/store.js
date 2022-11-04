import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import themeReducer from "./themeSlice";
import { themeSaga } from "./themeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(themeSaga);

export default store;