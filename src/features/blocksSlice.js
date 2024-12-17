import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBlocksData } from "@/service/bloqueService";

export const fetchBlocks = createAsyncThunk("blocks/fetchBlocks", async () => {
    const response = await fetchBlocksData();
    return response;
});

const blocksSlice = createSlice({
    name: "blocks",
    initialState: {
        data: [],
        metrics: { total:0, enabled:0, disabled:0 },
        loading:false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlocks.pending, (state) =>{
                state.loading = false;
            })
            .addCase(fetchBlocks.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.success){
                    state.data = action.payload.data;
                    state.metrics = action.payload.metrics;
                }else{
                    state.error = action.payload.message;
                }
            })
            .addCase(fetchBlocks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default blocksSlice.reducer