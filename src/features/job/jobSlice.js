import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJobs, deleteJobs, editJobs, getJobs } from "./jobApi";

// initial State
const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {}
}

// asyng thunk functions
export const fetchJobs = createAsyncThunk("job/fetchJobs", async () => {
    const Jobs = await getJobs();
    return Jobs;
});

export const createJob = createAsyncThunk("job/createJob", async (data) => {
    const job = await addJobs(data);
    return job;
});

export const changeJob = createAsyncThunk("job/changeJob", async ({ id, data }) => {
    const job = await editJobs(id, data);
    return job;
});

export const removeJob = createAsyncThunk("job/removeJob", async (id) => {
    const job = await deleteJobs(id);
    return job;
});

// Slice

const jobSlice = createSlice(
    {
        name: "job",
        initialState,
        reducers: {
            editActive: (state, action) => {
                state.editing = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchJobs.pending, (state, action) => {
                    state.isLoading = true;
                    state.isError = false;
                })
                .addCase(fetchJobs.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isError = false;
                    state.jobs = action.payload;
                })
                .addCase(fetchJobs.rejected, (state, action) => {
                    state.error = action.error?.message;
                    state.isError = true;
                    state.isLoading = false;
                    state.jobs = []
                })
                .addCase(createJob.pending, (state, action) => {
                    state.isLoading = true;
                    state.isError = false;
                })
                .addCase(createJob.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isError = false;
                    state.jobs.push(action.payload);
                })
                .addCase(createJob.rejected, (state, action) => {
                    state.error = action.error?.message;
                    state.isError = true;
                    state.isLoading = false;
                })
                .addCase(changeJob.pending, (state, action) => {
                    state.isLoading = true;
                    state.isError = false;
                })
                .addCase(changeJob.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isError = false;
                    const indexToUpdate = state.jobs.findIndex(t => t.id === action.payload.id);

                    state.jobs[indexToUpdate] = action.payload
                })
                .addCase(changeJob.rejected, (state, action) => {
                    state.error = action.error?.message;
                    state.isError = true;
                    state.isLoading = false;
                })
                .addCase(removeJob.pending, (state, action) => {
                    state.isLoading = true;
                    state.isError = false;
                })
                .addCase(removeJob.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isError = false;
                    state.jobs = state.jobs.filter(t => t.id !== action.meta.arg);
                })
                .addCase(removeJob.rejected, (state, action) => {
                    state.error = action.error?.message;
                    state.isError = true;
                    state.isLoading = false;
                })
        }
    }
)

export const {editActive} = jobSlice.actions;
export default jobSlice.reducer;