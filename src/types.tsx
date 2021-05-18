export type Message = {
  id: number;
  content: string;
  type?: "warning" | "info" | string;
}

export const createMessage =
  (content: string, type?: string): Message =>
    ({ content,
       type,
       id: Date.now(), })

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
