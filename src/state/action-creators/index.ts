import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface Item {
  name?: string;
  links: { npm: string };
}

interface Package {
  package: Item;
}

interface ResponseData {
  results: Package[];
}

interface Response {
  data: ResponseData;
}

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    const fetchData = async () => {
      const BASE_URL = 'https://api.npms.io/v2/search';
      const { data }: Response = await axios.get(BASE_URL, {
        params: {
          q: term,
        },
      });

      const packageLinks = data.results.map(
        (item: Package) => item.package.links.npm
      );
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: packageLinks,
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
