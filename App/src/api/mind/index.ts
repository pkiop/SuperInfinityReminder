import axios from 'axios';
import {CreateMindDto} from '../../../types/mind.interface';

const mind = axios.create({
  baseURL: 'http://localhost:3000/mind',
});

const getAllMinds = async () => {
  const {data} = await mind.get('/');
  return data;
};

const createMind = async (payload: CreateMindDto) => {
  const {data} = await mind.post('/', payload);
  return data;
};

const deleteMind = async (id: number) => {
  const {data} = await mind.delete(`/${id}`);
  return data;
};

export default {getAllMinds, createMind, deleteMind};
