
export type Data = {
  meta: {
    description?: string;
    title?: string;
    tips?: string;
    solution: number;
    options: number[];
  },
  media: {
    type: "image" | "video";
    src: string;
  },
}
