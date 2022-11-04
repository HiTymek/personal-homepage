import { call, select, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./localStorage";
import { selectTheme, toggleTheme } from "./themeSlice";

export function* saveThemeInLocalStorageHandler() {
    const theme = yield select(selectTheme);
    yield call(saveThemeInLocalStorage, theme);
};

export function* themeSaga() {
    yield takeEvery(toggleTheme.type, saveThemeInLocalStorageHandler);
};