import { Shape, Image } from '../svg-click-image/types'

export type MetaData = {
  description?: string;
  title?: string;
}

export type Data = { meta: MetaData; image: Image; shapes: Shape[]; }
