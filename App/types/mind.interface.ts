export type Mind = {
  id: number;
  text: string;
  completed: boolean;
};

export type CreateMindDto = Omit<Mind, 'id'>;
