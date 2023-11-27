import userAPI from '../../api/userAPI';

const {createSlice, createAsyncThunk}=require('@reduxjs/toolkit');

// First, create the thunk
export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      // call api to register
      const data  =await userAPI.register(payload);
      //save data to localsrorage
      localStorage.setItem('access_token', data.token);
      localStorage.setItem('refresh_token', data.refreshToken);
      localStorage.setItem('user', JSON.stringify(data.infoUser));
    
      //return user data
      return data.infoUser
    }
  )

export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
      // call api to register
      const data  =await userAPI.login(payload);
      //save data to localsrorage
      localStorage.setItem('access_token', data.token);
      localStorage.setItem('refresh_token', data.refreshToken);
      localStorage.setItem('user', JSON.stringify(data.infoUser));
    
      //return user data
      return data.infoUser
    }
  )

const useSlice=createSlice({
    name:'user',
    initialState:{
        current:{},
        settings:{},
    },
    reducers:{},
    extraReducers:{
        [register.fulfilled]:(state, action)=>{
            state.current=action.payload;
        },

        [login.fulfilled]:(state, action)=>{
            state.current=action.payload;
        }
    }
});

const {reducer}=useSlice;
export default reducer;