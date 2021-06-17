type Audio = string;

export type Data = {
  meta: {
    title?: string;
    tips?: string;
    description: string;
  },
  choices: string[];
  solution: string;
  audio: string;
}
