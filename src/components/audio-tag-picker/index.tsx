import React from 'react'
import { merge, some, map, identity } from 'lodash/fp';
import * as types from './types'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import Waveform from "../audio-picker/WaveForm";
import { ActionButtons, SuccessPanel } from "../shared/actionButtons";
import c from 'classnames';

// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import activityStyles from '../find-in-image/styles.css';


import * as componentTypes from '../../types';
// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from '../audio-picker/styles.css'

const updateAt = (i: number, o: object, a: Array<any>): Array<any> => {
  const obj = a[i];
  const updated = merge(obj, o);
  const copy = [ ...a ];
  copy.splice(i, 1, updated);
  return copy;
}

/*
 *   This component implements the api of the parent component, as
 *      well as requiring it's own data
 */
type Props =
  componentTypes.TrainingComponent
  & { data: types.Data; classes?: { button?: object;
                             [key:string]: object; } }

const Component
  // the function signature/types:
  : (p: Props) => React.ReactElement
  // the function itself
  = ({ award = () => { },
       penalize = () => { },
       finish = () => { },
       fail = () => { },
       classes = {},
       active = false,
       data, }) => {
    //
    const { meta: { title, description },
            choices: initialChoices,
            solution,
            audio, } = data;

    const _choices = initialChoices.map((a, i) => ({ text: a }));

    const [choices, setChoices] = React.useState(_choices);
    const reset = () => setChoices(_choices);

    const clicked = (n, text) => { const ass = updateAt(n, { correct: (text === solution) }, choices);
                             console.log(n, solution)
                             setChoices(ass);
                             const finished = some(identity, map("correct", ass));
                             if (finished) award(10, null, 100); }

    const finished = some(identity, map("correct", choices));

    return (
      <div className={c(activityStyles.activity, activityStyles.activityDiffs)}>
        <div className={activityStyles.row1}>
          <h3 className={activityStyles.title}>{title}</h3>
          <p className={activityStyles.description}>
            {description}
          </p>
        </div>
        <div className={activityStyles.row1}>
          <Waveform url={audio} redraw={active} />
          <div className={styles.choices}>
            {choices.map((a, i) => {
              const cs = c(styles.button,
                           classes.button,
                           // @ts-ignore - undefined is not clicked yet, false is clicked and wrong
                           (a?.correct === false) ? activityStyles.buttonWrong : null,
                           // @ts-ignore - undefined is not clicked yet, false is clicked and wrong
                           (a?.correct === true) ? activityStyles.buttonCorrect : null)
              return (
                    <button className={cs}
                      onClick={_ => clicked(i, a.text)}>
                      {a.text}
                  </button>
              )
            })}
          </div>
        </div>
        { finished &&
          <SuccessPanel onNext={() => finish(10, null, 100)}
                         onCancel={() => { reset(); award(10, null, 1) }}>
                You're right, it was {solution}
          </SuccessPanel>
        }
      </div>
    )
         }

export default Component;

const data: types.Data = {
    meta: {
        title: "Critical Listening",
        description: "Listen carefully through the audio. Out of the 4 which sound can you detect? Select 1",
    },
    choices: ["Notification", "Birds", "Mouse Clicking", "Table Tennis",],
    solution: "Mouse Clicking",
    audio: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/critical-listening/1.mp3",
}


const data2: types.Data = {
    meta: {
        title: "Critical Listening",
        description: "Listen carefully through the audio. Out of the 4 which sound can you detect? Select 1",
    },
    choices: ["Raidrops", "Waves", "Fountain", "Water Running"],
    solution: "Water Running",
    audio: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/critical-listening/2.mp3",
}

const data3: types.Data = {
    meta: {
        title: "Critical Listening",
        description: "Listen carefully through the audio. Out of the 4 which sound can you detect? Select 1",
    },
    choices: ["Washing Mashine", "Escalator", "Ambulance", "Mixer"],
    solution: "Escalator",
    audio: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/critical-listening/3.mp3",
}



export const Example1 =({...props}) => <Component data={data} {...props} />;

export const Example2 =({...props}) => <Component data={data2} {...props} />;

export const Example3 =({...props}) => <Component data={data3} {...props} />;
