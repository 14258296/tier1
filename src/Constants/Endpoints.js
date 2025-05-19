export const API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;

export const ETHERSCAN_API = {
  ETH_PRICE: 'https://api.etherscan.io/api?module=stats&action=ethprice',
  GAS_PRICE: 'https://api.etherscan.io/api?module=gastracker&action=gasoracle',
  TRANSACTIONS: (account) => `https://api.etherscan.io/api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&sort=desc`,
};
