import { all } from "redux-saga/effects";
import { watchFetchProjects } from "./features/Projects/projectsSaga";
import { themeSaga } from "./themeSaga";

export default function* rootSaga() {
    yield all([
        themeSaga(),
        watchFetchProjects(),
    ]);
};