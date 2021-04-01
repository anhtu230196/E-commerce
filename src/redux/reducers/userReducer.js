import {
  AUTH_FAILED,
  AUTH_START,
  AUTH_SUCCESS,
  LOGOUT,
} from "../actions/typeActions";

const initialState = {
  email: null,
  token: null,
  userId: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      const { idToken, localId, email } = action.payload;
      return {
        ...state,
        email: email,
        token: idToken,
        userId: localId,
        loading: false,
      };
    case AUTH_FAILED:
      return { ...state, loading: false };
    case LOGOUT:
      return { ...state, email: null, token: null, userId: null };
    default:
      return state;
  }
};

export default userReducer;
