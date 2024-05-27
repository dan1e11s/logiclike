import axios from 'axios';
import { GetCoursesResponse } from '../types';

const BASE_URL = import.meta.env.VITE_BASE_API;

export const getCourses = async () => {
  try {
    const { data } = await axios.get<GetCoursesResponse>(BASE_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
