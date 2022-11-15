import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "initial",
    projects: null,
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        fetchProjects: () => ({
            status: "loading",
            projects: null,
        }),
        fetchProjectsSuccess: (_, { payload: projects }) => ({
            status: "success",
            projects,
        }),
        fetchProjectsError: () => ({
            status: "error",
            projects: null,
        }),
    },
});

export const { fetchProjects, fetchProjectsError, fetchProjectsSuccess } = projectsSlice.actions;

export const selectProjectsState = state => state.projects;
export const selectProjects = state => selectProjectsState(state).projects;
export const selectStatus = state => selectProjectsState(state).status;

export default projectsSlice.reducer;