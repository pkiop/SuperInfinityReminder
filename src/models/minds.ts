import {Mind} from '../../types/mind.interface';
import storage from '../storage';

const getMinds = async () => {
  const minds: Mind[] = (await storage.getItem('minds')) || [];
  return minds;
};

const setMinds = async (minds: Mind[]) => {
  await storage.setItem('minds', minds);
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

export default {getMinds, setMinds, setMind};
