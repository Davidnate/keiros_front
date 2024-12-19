import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBlocksData, toggleBlockState } from "@/service/bloqueService";

export const fetchBlocks = createAsyncThunk("blocks/fetchBlocks", async () => {
    const response = await fetchBlocksData();
    return response;
});


export const changeBlockState = createAsyncThunk("blocks/changeBlockState", async (id, {rejectWithValue}) => {
    const response = await toggleBlockState(id);
    if (response.success){
        return { id, updateData: response.data };
    }else {
        return rejectWithValue(response.message);
    }
})

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
            //fetchBlocks
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

            })

            //changeBlockState\
            .addCase(changeBlockState.pending, (state) => {
                state.loading = true;
            })

            .addCase(changeBlockState.fulfilled, (state, action) => {
                state.loading = false;
                const { id, updateBlock } = action.payload;

                const index = state.data.findIndex((block) => block.id === id);
                if (index !== -1){
                    state.data[index] = updateBlock;

                    state.metrics.enabled = state.data.filter(block => block.state).length;
                    state.metrics.disabled = state.data.filter(block => !block.state).length;
                }
            })

            .addCase(changeBlockState.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "No se pudo cambiar el estado del bloque.";
            });
    },
});

export default blocksSlice.reducer