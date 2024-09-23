import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'sonner';
import {jwtDecode} from 'jwt-decode'
export const Register = createAsyncThunk(
  '/user/register',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post('http://localhost:3000/api/register', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userLogin = createAsyncThunk(
  '/user/login',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post('http://localhost:3000/api/login', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  token : null,
  role : null,
  name : null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    //first pending
    builder
      .addCase(Register.pending, (state) => {
        state.loading = true;
      })
      .addCase(Register.fulfilled, (state) => {
        state.loading = false;
        toast.success('✅Account created');
      })
      .addCase(Register.rejected, (state, action) => {
        console.log(action.payload);
        state.error = action.payload;
        toast.error(action.payload.response.data);
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        const {token} = action.payload
        console.log(jwtDecode(token))
        console.log(action.payload);
        toast.success('Login Successfull');
      })
      .addCase(userLogin.rejected, (state, action) => {
        console.log(action.payload);
        toast.success(action.payload.response.data);
      });
  },
});

export default userSlice.reducer;
