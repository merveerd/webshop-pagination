import { call, put, takeLatest, all, spawn } from "redux-saga/effects";

import {
  ITEMS_START,
  ITEMS_RECEIVED,
  ITEMS_FAILED,
  SELECTED_ITEMS_START,
  SELECTED_ITEMS_RECEIVED,
  SELECTED_ITEMS_FAILED,
  SEARCH_PARAMETERS_START,
  SEARCH_PARAMETERS_RECEIVED,
  SEARCH_PARAMETERS_FAILED,
} from "../actions/types";

import {
  requestDefaultItems,
  requestSelectedItems,
  requestAllItems,
} from "../actions/APIService";

function* fetchAllItems(data) {
  try {
    const response = yield call(requestAllItems, data.payload);

    let tags = {},
      companies = {};

    response.data.forEach((item) => {
      item.tags.forEach((tag) => {
        tags[tag] = tags[tag] + 1 || 1;
      });
    });
    response.data.forEach((item) => {
      companies[item.manufacturer] = companies[item.manufacturer] + 1 || 1;
    });

    yield put({
      type: SEARCH_PARAMETERS_RECEIVED,
      payload: { tags, companies },
    });
  } catch (err) {
    console.log("err", err);
    yield put({ type: SEARCH_PARAMETERS_FAILED });
  }
}

function* fetchDefaultItems(data) {
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
  yield takeLatest(ITEMS_START, fetchDefaultItems);
  yield takeLatest(SELECTED_ITEMS_START, fetchSelectedItems);
  yield takeLatest(SEARCH_PARAMETERS_START, fetchAllItems);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);

  // yield spawn(takeLatest(COMPANIES_START, fetchCompanies));
  // yield spawn(takeLatest(PAGE_CHANGE_START, fetchPage));
}
