import * as queries from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

interface MainInfo {
  data: any;
}

export const getMainInfo = async (text: string): Promise<MainInfo> => {
  try {
    const mainInfo = await API.graphql(
      graphqlOperation(queries.getMainInfo, {
        keyword: text,
      }),
    );
    return mainInfo.data;
  } catch (error) {
    return error.data;
  }
};
