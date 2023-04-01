import axios from 'axios';
import {CreateMindDto} from '../../../types/mind.interface';

const mind = axios.create({
  baseURL: 'http://localhost:3000/mind',
});

export const getAllMinds = async () => {
  const {data} = await mind.get('/');
  return data;
};

export const createMind = async (payload: CreateMindDto) => {
  const {data} = await mind.post('/', payload);
  return data;
};
