import { User, UserDetail } from "./1_models";

export const SET_USER = 'SET_USER';
export const SET_USER_DETAIL = 'SET_USER_DETAIL';

interface setUserAction {
  type: typeof SET_USER;
  payload: User
}

interface setUserDetailAction {
  type: typeof SET_USER_DETAIL;
  payload: UserDetail
}
export type UserActionTypes = setUserAction | setUserDetailAction;