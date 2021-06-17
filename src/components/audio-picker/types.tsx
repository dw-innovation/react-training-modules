type Audio = string;

export type Data = {
  meta: {
    title?: string;
    description: string;
    tips?: string;
  },
  solution: number;
  audios: string[];
}
