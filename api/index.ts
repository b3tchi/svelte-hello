import axios from 'axios';
import { BooksApi } from './books/generated';

export const axiosInstance = axios.create();

// const commonParams: any[] = [undefined, undefined, axiosInstance];

export default {
  Book: new BooksApi(undefined, "http://localhost:4000", axiosInstance),
};
