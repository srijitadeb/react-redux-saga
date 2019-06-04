import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';


export function* fatchData(){
    const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
    const res = yield call(fetch,endpoint);
    const data = yield res.json();
    yield put({
        type: RENDER_TODO_LIST,
        toDoList: data
    })
}

export function* loadDataList() {
    yield takeEvery(LOAD_TODO_LIST, fatchData);
}

export default function* rootSaga(){
    yield all([loadDataList()]);
}