import {CreateMindDto, Mind} from '../../types/mind.interface';
import {createMind, getAllMinds} from '../api/mind';
import storage from '../storage';

const getMinds = async () => {
  // const minds: Mind[] = (await storage.getItem('minds')) || [];
  const minds: Mind[] = (await getAllMinds()) || [];
  return minds;
};

const setMinds = async (minds: Mind[]) => {
  await storage.setItem('minds', minds);
};

const addMind = async (mind: CreateMindDto) => {
  await createMind(mind);
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

export default {getMinds, setMinds, addMind, setMind};
