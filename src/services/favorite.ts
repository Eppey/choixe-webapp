import * as queries from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

interface FavoriteInfo {
  data: any;
}

export const getFavoriteInfo = async (ids: string[]) => {
  try {
    const favoriteInfo = await API.graphql(
      graphqlOperation(queries.getFavoriteInfo, {
        stockIds: ids,
      }),
    );
    return favoriteInfo.data;
  } catch (error) {
    return error.data;
  }
};
