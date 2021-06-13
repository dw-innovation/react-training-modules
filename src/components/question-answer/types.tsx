
type Question = {
  type: "string" | "date";
  solution: string;
  question: string;
  placeholder: string;
}

export type Data = {
  meta: {
    title?: string;
    tips?: string;
    description?: string;
  },
  questions: Question[];
}
