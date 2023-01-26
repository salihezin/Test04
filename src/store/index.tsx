import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { userDetailReducer, userReducer } from "./User/4_reducers";

const rootReducer = combineReducers({
    user : userReducer,
    userDetail: userDetailReducer
})

export type AppState = ReturnType<typeof rootReducer>
export default function configureStore(){
    const sagaMiddleware = createSagaMiddleware()
    const middleWareEnhancer = applyMiddleware(sagaMiddleware)
    const Store = createStore(rootReducer,middleWareEnhancer)
    return Store
}