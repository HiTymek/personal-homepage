import { delay, call, put, takeEvery } from "redux-saga/effects";
import { getProjects } from "./getProjects";
import { fetchProjects, fetchProjectsError, fetchProjectsSuccess } from "./projectsSlice";

export function* watchFetchProjectsHandler() {
    try {
        yield delay(2000);
        const projects = yield call(getProjects);
        yield put(fetchProjectsSuccess(projects));
    } catch (error) {
        yield put(fetchProjectsError);
    }
};

export function* watchFetchProjects() {
    yield takeEvery(fetchProjects.type, watchFetchProjectsHandler);
};