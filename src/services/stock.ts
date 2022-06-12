import * as queries from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

interface StockInfo {
  data: any;
}

export const getStockInfo = async (id: string, date: string): Promise<StockInfo> => {
  try {
    const stockInfo: any = await API.graphql(
      graphqlOperation(queries.getStockInfo, {
        stockId: id,
        startDate: date,
      }),
    );
    return stockInfo.data;
  } catch (error) {
    return error.data;
  }
};
