import { useQuery } from 'react-query';
import { getData } from '../services';

export const useGetData = () => useQuery('GET_DATA', getData());

export default useGetData;
