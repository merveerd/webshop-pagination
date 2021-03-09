import { call, put, takeLatest, all, spawn } from "redux-saga/effects";

import {
  COMPANIES_START,
  COMPANIES_RECEIVED,
  COMPANIES_FAILED,
  PAGE_CHANGE_START,
  ITEMS_RECEIVED,
  ITEMS_FAILED,
} from "../actions/types";

import { requestCompanies, requestItems } from "../actions/APIService";

function* fetchCompanies() {
  try {
    const companies = yield call(requestCompanies);

    yield put({ type: COMPANIES_RECEIVED, payload: companies });
  } catch (err) {
    console.log("err", err);
    yield put({ type: COMPANIES_FAILED });
  }
}

function* fetchPage(data) {
  try {
    const response = yield call(requestItems, data.payload);

    yield put({ type: ITEMS_RECEIVED, payload: response.data });
  } catch (err) {
    console.log("err", err);
    yield put({ type: ITEMS_FAILED });
  }
}

function* actionWatcher() {
  yield takeLatest(COMPANIES_START, fetchCompanies);
  yield takeLatest(PAGE_CHANGE_START, fetchPage);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);

  // yield spawn(takeLatest(COMPANIES_START, fetchCompanies));
  // yield spawn(takeLatest(PAGE_CHANGE_START, fetchPage));
}
