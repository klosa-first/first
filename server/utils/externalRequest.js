/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import config from '../config/index';


export const verifyTransaction = async (ref) => {
  const response = await axios.get(`https://api.paystack.co/transaction/verify/${ref}`, {
    headers: {
      Authorization: `Bearer ${config.Paystack_secret}`
    }
  });
  console.log(response, 'response response response response response');
  return response;
};


export const verifyAccountNUmber = async (accountNumber, bankCode) => {
  const response = await axios.get(`https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`, {
    headers: {
      Authorization: `Bearer ${config.Paystack_secret}`
    }
  });
  console.log(response);
  return response.data;
};


export const bvnLookUp = async (bvn, account_number, bank_code, first_name, last_name) => {
  const data = {
    bvn,
    account_number,
    bank_code,
    first_name,
    last_name,
  };
  const response = await axios.post('https://api.paystack.co/bvn/match', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.Paystack_secret}`
    }
  }).then(res => res.data).catch(err => err.response.data);
  return response;
};

export const getBanks = async () => {
  const response = await axios.get('https://api.paystack.co/bank', {
    headers: {
      Authorization: `Bearer ${config.Paystack_secret}`
    }
  });
  return response.data;
};
