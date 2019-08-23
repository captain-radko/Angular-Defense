import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../../environments/environment";

type AuthState = {
  loggedIn: boolean;
  data: Object;
};

export interface AppState {
  auth: AuthState;
}

function authReducer() {}

// export const reducers: ActionReducerMap<AppState> = {
//   auth: authReducer
// };

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
