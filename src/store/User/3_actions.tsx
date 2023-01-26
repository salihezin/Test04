import {User, UserDetail} from './1_models';
import {UserActionTypes, SET_USER, SET_USER_DETAIL} from './2_actionTypes';

export function setUser(user: User): UserActionTypes {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function setUserDetail(userDetail: UserDetail): UserActionTypes {
  return {
    type: SET_USER_DETAIL,
    payload: userDetail,
  };
}
