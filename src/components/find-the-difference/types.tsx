import { Shape, Image } from '../svg-click-image/types'

export type Data = {
  meta: {
    description?: string;
    title?: string;
  },
  image: {
    original: Image,
    altered: Image,
    shapes: Shape[],
  }
}
