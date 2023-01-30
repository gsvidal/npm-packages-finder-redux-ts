import { Action } from '../actions';
import { ActionType } from '../action-types';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
  beforeFirstSearch: boolean;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
  beforeFirstSearch: true,
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [], beforeFirstSearch: true };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
        beforeFirstSearch: false,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
        beforeFirstSearch: true,
      };
    default:
      return state;
  }
};

export default reducer;
