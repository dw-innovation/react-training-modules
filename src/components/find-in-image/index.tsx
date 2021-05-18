import React from 'react';
import { isEqual, pipe, size, take } from 'lodash/fp';
import * as types from './types';
import {Data, Shape, Coords} from './types';
import {k} from './types';
import { styles } from './styles';
import * as componentTypes from '../../types';
import { ClickImage } from './svg-components';

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
                   ? {...s2, visible: true, } // return with visible true
                   : s2) // otherwide leave it alone
           setShapes(newShapes) // update the state
         }

       const foundCount = size(types.onlyVisible(shapes));
       const totalCount = size(shapes);

       const clickFound =
         (s: Shape, c: Coords) =>
           { found(s);
             award(10, { content: `found an object: ` + s.description }); }

       const clickFailed =
         (c: Coords) =>
           { penalize(10, { content: 'failed a click!' });
             setFailed(failedAttemts + 1); }

       return (
         <div className="trainingmodulesFindInImageModule">
           <h3 className="trainingmodulesModuleTitle">
             {data.meta?.title}
           </h3>
           <p className="trainingmodulesModuleDescription">
             {data.meta?.description}
           </p>
           <div className="trainingmodulesFoundCount">
             found: {foundCount}/{totalCount}
           </div>
           <div className="trainingmodulesMisclickCount">
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
