import { call, put, takeLatest, all, spawn } from "redux-saga/effects";

import {
  COMPANIES_START,
  COMPANIES_RECEIVED,
  COMPANIES_FAILED,
  ITEMS_START,
  ITEMS_RECEIVED,
  ITEMS_FAILED,
  SELECTED_ITEMS_START,
  SELECTED_ITEMS_RECEIVED,
  SELECTED_ITEMS_FAILED,
  SORTED_ITEMS_START,
  SORTED_ITEMS_RECEIVED,
  SORTED_ITEMS_FAILED,
} from "../actions/types";

import {
  requestCompanies,
  requestDefaultItems,
  requestSelectedItems,
  requestSortedItems,
} from "../actions/APIService";

function* fetchCompanies() {
  try {
    const companies = yield call(requestCompanies);

    yield put({ type: COMPANIES_RECEIVED, payload: companies });
  } catch (err) {
    console.log("err", err);
    yield put({ type: COMPANIES_FAILED });
  }
}

function* fetchPageItems(data) {
  try {
    const response = yield call(requestDefaultItems, data.payload);

    yield put({
      type: ITEMS_RECEIVED,
      payload: {
        data: response.data,
        dataCount: response.headers["x-total-count"],
      },
    });
  } catch (err) {
    console.log("err", err);
    yield put({ type: ITEMS_FAILED });
  }
}

function* fetchSelectedItems(data) {
  try {
    const response = yield call(requestSelectedItems, data.payload);
    yield put({
      type: SELECTED_ITEMS_RECEIVED,
      payload: {
        data: response.data,
        dataCount: response.headers["x-total-count"],
      },
    });
  } catch (err) {
    console.log("err", err);
    yield put({ type: SELECTED_ITEMS_FAILED });
  }
}
function* actionWatcher() {
  yield takeLatest(COMPANIES_START, fetchCompanies);
  yield takeLatest(ITEMS_START, fetchPageItems);
  yield takeLatest(SELECTED_ITEMS_START, fetchSelectedItems);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);

  // yield spawn(takeLatest(COMPANIES_START, fetchCompanies));
  // yield spawn(takeLatest(PAGE_CHANGE_START, fetchPage));
}
