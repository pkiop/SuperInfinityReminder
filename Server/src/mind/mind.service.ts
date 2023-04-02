import { Injectable } from '@nestjs/common';
import { CreateMindDto } from './dto/create-mind.dto';
import { UpdateMindDto } from './dto/update-mind.dto';

const minds = [];
let cid = 1;
@Injectable()
export class MindService {
  create(createMindDto: CreateMindDto) {
    minds.push({ ...createMindDto, id: cid++ });
    return 'success';
  }

  findAll() {
    return minds;
  }

  findOne(id: number) {
    return minds.find((mind) => mind.id === id);
  }

  update(id: number, updateMindDto: UpdateMindDto) {
    return minds.map((mind) => {
      if (mind.id === id) {
        return {
          ...mind,
          ...updateMindDto,
        };
      }
      return mind;
    });
  }

  remove(id: number) {
    const idx = minds.findIndex((mind) => mind.id === id);
    minds.splice(idx, 1);
    return minds;
  }
}
