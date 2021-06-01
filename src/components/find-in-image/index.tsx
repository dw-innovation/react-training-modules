import React from 'react';
import { isEqual, pipe, size, take } from 'lodash/fp';
import * as types from './types';
import { Data } from './types';
import { Shape, Coords, onlyVisible } from '../svg-click-image/types';
import * as componentTypes from '../../types';
import { ClickImage } from '../svg-click-image';

// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from './styles.css';

/*
 *   This component implements the api of the parent component, as
 *      well as requiring it's own data
 */
type Props =
  componentTypes.TrainingComponent
  & { data: Data; }

const Component
// the function signature/types:
: (p: Props) => React.ReactElement
// the function itself
= ({ award = () => {},
     penalize = () => {},
     finish = () => {},
     fail = () => {},
     data, }) => {
       //
       const [failedAttemts, setFailed] = React.useState(0)

       const [shapes, setShapes] = React.useState(data.shapes)
       //       shape equality is by the uniqueness of it's description and shape
       // note, _isEqual(shapes[0], shapes[0]) -> true
       //       _isEqual(shapes[0], shapes[1]) -> false

       // given a shape, update that shape in our state
       // with visible: true
       // annoying that js doesn't have nicer ways to do this
       const found =
         (s: Shape) => {
           const newShapes =
             shapes
               .map(s2 =>
                 (isEqual(s, s2)) // if it's equal to the one we want
                   ? { ...s2, visible: true, } // return with visible true
                   : s2) // otherwide leave it alone
           setShapes(newShapes); // update the state
           return newShapes;
         }

       const foundCount = size(onlyVisible(shapes));
       const totalCount = size(shapes);

       const getPercent = (ss) => {
         const foundCount = size(onlyVisible(ss));
         const totalCount = size(ss);
         return foundCount/totalCount*100;
       }

       const clickFound =
         (s: Shape, c: Coords) =>
           { const newShapes = found(s);
             const msg = componentTypes.createMessage(`found an object: ` + s.description);
             award(10, msg, getPercent(newShapes)); }

       const clickFailed =
         (c: Coords) =>
           { const msg = componentTypes.createMessage(`failed a click`);
             penalize(10, msg, foundCount/totalCount*100);
             setFailed(failedAttemts); }

       return (
         <div className={styles.module}>
           <h3 className={styles.title}>
             {data.meta?.title}
           </h3>
           <p className={styles.description}>
             {data.meta?.description}
           </p>
           <div className={styles.count_found}>
             found: {foundCount}/{totalCount}
           </div>
           <div className={styles.count_failed}>
             wrong clicks: {failedAttemts}
           </div>
           <ClickImage
             image={data.image}
             shapes={shapes}
             successClick={clickFound}
             failedClick={clickFailed} />
         </div>
       );
     }

export default Component;
