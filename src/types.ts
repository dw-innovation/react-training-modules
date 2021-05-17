
/*
 * the generalized component, of the minimum
 *   api that each one of them should include
 */
export type TrainingComponent = {
  award?: (points: number, msg?: string) => void;
  penalize?: (points: number, msg?: string) => void;
  finish?: (points: number, msg?: string) => void;
  fail?: (points: number, msg?: string) => void;
}
