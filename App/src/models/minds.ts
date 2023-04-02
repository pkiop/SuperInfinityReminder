import {CreateMindDto, Mind} from '../../types/mind.interface';
import mindApi from '../api/mind';
import storage from '../storage';

const getMinds = async () => {
  // const minds: Mind[] = (await storage.getItem('minds')) || [];
  const minds: Mind[] = (await mindApi.getAllMinds()) || [];
  return minds;
};

const setMinds = async (minds: Mind[]) => {
  await storage.setItem('minds', minds);
};

const addMind = async (mind: CreateMindDto) => {
  await mindApi.createMind(mind);
};

const deleteMind = async (id: number) => {
  await mindApi.deleteMind(id);
};

const setMind = async (mind: Mind) => {
  const minds = await getMinds();
  const newMinds = minds.map(m => {
    if (m.id === mind.id) {
      return mind;
    }
    return m;
  });
  setMinds(newMinds);
};

export default {getMinds, setMinds, addMind, setMind, deleteMind};
