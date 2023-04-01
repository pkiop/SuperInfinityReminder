export type Mind = {
  id: string;
  text: string;
  completed: boolean;
};

export type CreateMindDto = Omit<Mind, 'id'>;
