import React from 'react';
import { isEqual, pipe, size } from 'lodash/fp'
import * as types from './types'
import * as componentTypes from '../../types'
import { ClickImage } from './svg-components'

/*
 *   This component implements the api of the parent component, as
 *      well as requiring it's own data
 */
type Props =
  componentTypes.TrainingComponent
  & { data: types.Data; }

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
       const [messages, setMessages] = React.useState(["welcome to the game"])

       const [shapes, setShapes] = React.useState(data.shapes)
       //       shape equality is by the uniqueness of it's description and shape
       // note, _isEqual(shapes[0], shapes[0]) -> true
       //       _isEqual(shapes[0], shapes[1]) -> false

       // given a shape, update that shape in our state
       // with visible: true
       // annoying that js doesn't have nicer ways to do this
       const found =
         (s: types.Shape) => {
           const newShapes =
             shapes
               .map(s2 =>
                 (isEqual(s, s2)) // if it's equal to the one we want
                   ? {...s2, visible: true, } // return with visible true
                   : s2) // otherwide leave it alone
           setShapes(newShapes) // update the state
         }

       const addMessage = msg => setMessages([...messages, msg])
       const Message = m => <li>{m}</li>;
       const Messages = <ul>{messages.map(Message)}</ul>;

       const foundCount = size(types.onlyVisible(shapes));
       const totalCount = size(shapes);

       const clickFound =
         (s: types.Shape, c: types.Coords) =>
           found(s)

       const clickFailed =
         (c: types.Coords) =>
           addMessage('failed a click!')

       return (
         <div>
           <h3>Find in Image excersize</h3>
           <h5>found: {foundCount}/{totalCount}</h5>
           <ClickImage
             image={data.image}
             shapes={shapes}
             successClick={clickFound}
             failedClick={clickFailed} />
           {Messages}
         </div>
       );
}

export default Component;
