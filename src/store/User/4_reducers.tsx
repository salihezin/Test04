import {User, UserDetail} from './1_models';
import {UserActionTypes, SET_USER, SET_USER_DETAIL} from './2_actionTypes';

const initialUserState: User = {
  email: '',
  uid: '',
};

const initialUserDetailState: UserDetail = {
displayName: ''
}; 

export function userReducer(
  state = initialUserState,
  action: UserActionTypes,
): User {
  switch (action.type) {
    case SET_USER:
      return {
        email: action.payload.email,
        uid : action.payload.uid,
      };
    default:
      return state;
  }
}

export function userDetailReducer(
  state = initialUserDetailState,
  action: UserActionTypes,
): UserDetail {
  switch (action.type) {
      case SET_USER_DETAIL:
        return {
          displayName : action.payload.displayName
        }
    default:
      return state;
  }
}
