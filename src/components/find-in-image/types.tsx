/*
 *   Component Data -
 *     the data this component requires consists of an image, with a specified height and width,
 *      and a list of svg elements (paths, rectangles, whatever), that _place themselves_
 *      along this height and this width!  styles are handled by the component, but position
 *      needs to be handled in the data itself
 */
export type Shape = {
  description: string;
  visible?: boolean; // not true is falsy
  shape: React.ReactElement;
}

export type ImageData = {
  src: string;
  height: number;
  width: number;
}

export type Data = { image: ImageData; shapes: Shape[]; }

export type Coords = { x: number; y: number }

// There is a super weird bug by, when you import one of the followint functions
// in another file, you get an error that the types are not exported any more,
// when you try to compile the ts
//
// so, DO NOT IMPORT
export const isVisible = (s: Shape): boolean => !!s.visible;
export const isNotVisible = (s: Shape): boolean => !s.visible;
export const onlyVisible = (ss: Shape[]): Shape[] => ss.filter(isVisible);
export const notVisible = (ss: Shape[]): Shape[] => ss.filter(isNotVisible);
export const k = "kjsdksadjdsakjadsdsakjads";
