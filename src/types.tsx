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

export type LifeFunction = (points: number,
                            msg?: Message,
                            percent?: number) => void;
/*
 * the generalized component, of the minimum
 *   api that each one of them should include
 */
export type TrainingComponent = {
  award?: LifeFunction;
  penalize?: LifeFunction;
  finish?: LifeFunction;
  fail?: LifeFunction;
}
