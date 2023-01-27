import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface Item {
  name: string;
}

interface Package {
  package: Item;
}

interface Response {
  results: Package[];
}

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    const fetchData = async () => {
      const BASE_URL = 'https://api.npms.io/v2/search?q=react';
      const { results }: Response = await axios.get(BASE_URL, {
        params: {
          text: term,
        },
      });
      const packageNames = results.map((item: any) => item.package.name);
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: packageNames,
      });
    };

    try {
      await fetchData();
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
