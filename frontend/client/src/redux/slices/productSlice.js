import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
};


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/api/products'); 
            return data;
        } catch (error) {
            
            return rejectWithValue(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            );
        }
    }
);


export const fetchProductDetails = createAsyncThunk(
    'products/fetchProductDetails',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/products/${id}`);
            return data; 
        } catch (error) {
        
            return rejectWithValue(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            );
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
        resetProductState: (state) => {
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.products = []; 
            })
            
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.product = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.product = null;
            });
    },
});

export const { resetProductState } = productSlice.actions;
export default productSlice.reducer;