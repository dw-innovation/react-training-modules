import React from 'react';
import * as images from "../../resources/images/index"

type Props = {
  award?: (points: number, msg?: string) => void;
  penalize?: (points: number, msg?: string) => void;
  finish?: (points: number, msg?: string) => void;
  fail?: (points: number, msg?: string) => void;
}

const Component
// the function signature/types:
: (p: Props) => React.ReactElement
// the function itself
= ({ award = () => {},
     penalize = () => {},
     finish = () => {},
     fail = () => {} }) => {
       const rectangles = [];
       const image = images.goerlitzer;
       return (
         <div>
           <img src={image} />
         </div>
       );
}

export default Component;
