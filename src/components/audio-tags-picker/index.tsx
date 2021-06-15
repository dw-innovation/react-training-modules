import React from 'react'
import { merge, some, map, identity, size, filter } from 'lodash/fp';
import * as types from './types'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import Waveform from "../audio-picker/WaveForm";
import c from 'classnames';

import { ActionButtons, SuccessPanel } from "../shared/actionButtons";

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
            solutions,
            audio, } = data;

    const _choices = initialChoices.map((a, i) => ({ text: a }));

    const [choices, setChoices] = React.useState(_choices);
    const reset = () => setChoices(_choices);

    const clicked = (n, text) => { const ass = updateAt(n, { correct: (solutions.includes(text)) }, choices);
                             setChoices(ass);
                             const finished = size(solutions) === size(filter(x => x.correct, ass));
                             if (finished) award(10, null, 100); }

    const finished = size(solutions) === size(filter(x => x.correct, choices));

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
                You're right, it was {solutions.join(" and ")}
          </SuccessPanel>
        }
      </div>
    )
         }

export default Component;

const data: types.Data = {
    meta: {
        title: "Sound Collector",
        description: "Listen carefully through the  audio. There are 2 different sounds. Pick 2 out of the 10.",
    },
    choices: ["Cars", "Birds", "Bells", "Mixer", "Washing Machine", "Paper", "Raindrops", "Elevator", "Wind", "Leaves"],
    solutions: ["Washing Machine", "Birds"],
    audio: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/sound-collector/1.mp3",
}


const data2: types.Data = {
    meta: {
        title: "Sound Collector",
        description: "Listen carefully through the  audio. There are 3 different sounds. Pick 3 out of the 10.",
    },
    choices: ["Skateboard", "Cars", "Hair Dryer", "Steps", "Toothbrush", "Mouse Clicking", "Clapping", "Coffee Machine", "Train", "Clock"],
    solutions: ["Steps", "Train", "Hair Dryer"],
    audio: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/sound-collector/2.mp3",
}

const data3: types.Data = {
    meta: {
        title: "Sound Collector",
        description: "Listen carefully through the  audio. There are 4 different sounds. Pick 4 out of the 10.",
    },
    choices: ["Music", "Drinking", "Construction", "Cutlery", "Church", "Waves", "Wind", "Market", "Bottle Opening", "Toothbrush"],
    solutions: ["Toothbrush", "Church", "Market", "Drinking"],
    audio: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/sound-collector/3.mp3",
}



export const Example1 =({...props}) => <Component data={data} {...props} />;

export const Example2 =({...props}) => <Component data={data2} {...props} />;

export const Example3 =({...props}) => <Component data={data3} {...props} />;
