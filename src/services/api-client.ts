import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// ccfgwofcwbyprdwbhh@ckptr.com
// ccfgwo
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bca5a352cc5a4cd9b6beb936fdef51a6',
  },
});
