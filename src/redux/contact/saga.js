import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import ContactActions from "./actions";
import { getContactData } from "./service";

export function* fetchdata() {
  yield takeEvery(ContactActions.GET_CONTACT_LIST, function* () {
    try {
      const response = yield call(getContactData);
      const contactData = yield call(response.json.bind(response));
      console.log("contactData", contactData);
      if (contactData) {
        yield put({
          type: ContactActions.GET_CONTACT_LIST_SUCCESS,
          data: contactData,
          message: "Data Fetched Successfull",
        });
      } else {
        yield put({
          type: ContactActions.GET_CONTACT_LIST_FAIL,
          message: "Something went wrong..!",
        });
      }
    } catch (error) {
      yield put({
        type: ContactActions.FETCH_RROR,
        message: "Something went wrong..!",
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(fetchdata)]);
}
