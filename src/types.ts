export type Message = {
  content: string;
  type?: "warning" | "info" | string;
}

/*
 * the generalized component, of the minimum
 *   api that each one of them should include
 */
export type TrainingComponent = {
  award?: (points: number, msg?: Message) => void;
  penalize?: (points: number, msg?: Message) => void;
  finish?: (points: number, msg?: Message) => void;
  fail?: (points: number, msg?: Message) => void;
}
