import axios from "axios";
import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from "./typeActions";

const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START,
  };
};

const fetchCollectionsSuccess = (collections) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

const fetchCollectionsFailure = (errorMess) => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMess,
  };
};

export const fetchCollectionsStartAsync = () => (dispatch) => {
  dispatch(fetchCollectionsStart());

  axios
    .get(
      "https://react-my-burger-4a0ef-default-rtdb.firebaseio.com/crownstore/-MR-Qryd-jKJq8PwkAEl.json"
    )
    .then((res) => dispatch(fetchCollectionsSuccess(res.data)))
    .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
};
