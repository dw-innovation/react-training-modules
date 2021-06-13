type Audio = string;

export type Data = {
  meta: {
    title?: string;
    description: string;
  },
  choices: string[];
  solution: string;
  audio: string;
}
