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
       const [messages, setMessages] = React.useState(["welcome to the game"])
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

       const addMessage = msg => setMessages([msg, ...messages])

       const Message = m => <li style={styles.message}>{m}</li>;
       const FirstMessage = m => <li style={{...styles.message, ...styles.firstMessage}}>{m}</li>;

       const Messages = () => {
         const [head, ...tail] = messages;
         // ... CSSProperties does not like "absolute" for some reason
         // @ts-ignore
         return <ul style={styles.messages}>
                  {FirstMessage(head)}
                  {take(10, tail.map(Message))}
                </ul>
         }

       const foundCount = size(types.onlyVisible(shapes));
       const totalCount = size(shapes);

       const clickFound =
         (s: Shape, c: Coords) =>
           { found(s);
             addMessage(s.description); }

       const clickFailed =
         (c: Coords) =>
           { addMessage('failed a click!');
             setFailed(failedAttemts + 1); }

       return (
         <div>
           <h3>Find in Image excersize</h3>
           <h5>found: {foundCount}/{totalCount}</h5>
           <h5>wrong clicks: {failedAttemts}</h5>
           <ClickImage
             image={data.image}
             shapes={shapes}
             successClick={clickFound}
             failedClick={clickFailed} />
           {Messages()}
         </div>
       );
     }

export default Component;
