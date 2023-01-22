import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchData() {
    try {
        // const data = yield call(signInService)
        console.log('try')
        // yield put(getSignInRequestSuccess(data))
    } catch (error) {
        console.log('error', error)
        // yield put(getSignInRequestFailure())
    }
}

export default function* saga() {
    console.log('saga')    
    // yield takeEvery(GET_SIGN_IN_REQUEST, fetchData)
}