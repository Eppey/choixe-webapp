import * as queries from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

interface FinancialInfo {
  data: any;
}

export const getFinancialInfo = async (id: string): FinancialInfo => {
  try {
    const financialInfo = await API.graphql(
      graphqlOperation(queries.getFinancialInfo, {
        stockId: id,
      }),
    );
    return financialInfo.data;
  } catch (error) {
    return error.data;
  }
};
