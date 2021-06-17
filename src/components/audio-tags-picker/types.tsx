type Audio = string;

export type Data = {
  meta: {
    title?: string;
    tips?: string;
    description: string;
  },
  choices: string[];
  solutions: string[];
  audio: string;
}
