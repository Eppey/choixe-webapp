import * as queries from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

interface SectorInfo {
  data: any;
}

export const getSectorInfo = async (name: string, date: string): Promise<SectorInfo> => {
  try {
    const sectorInfo = await API.graphql(
      graphqlOperation(queries.getSectorInfo, {
        sectorName: name,
        startDate: date,
      }),
    );
    return sectorInfo.data;
  } catch (error: unknown) {
    return error.data;
  }
};
