import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiFetch from '@/utils/apiFetch';

const initialState = {
  isLoad: false,
  isLogin: true,
  id: 0,
  email: '',
  username: '',
  repository: [] as { id: string; name: string }[],
};

export const userFetchInfo = createAsyncThunk('user/fetchInfo', async () => {
  return (await apiFetch('/user/info', {}, { showError: false })) as any;
});
export const userLogout = createAsyncThunk('user/logout', async () => {
  return (await apiFetch('/user/logout')) as any;
});

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setState(state, action) {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userFetchInfo.rejected, (state, action) => {
      state.isLogin = false;
      state.isLoad = true;
    });
    builder.addCase(userFetchInfo.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
      state.isLogin = true;
      state.isLoad = true;
    });
    builder.addCase(userLogout.fulfilled, (state) => {
      Object.assign(state, initialState, { isLoad: true, isLogin: false });
    });
  },
});

export default user.reducer;
export const userActions = user.actions;
