import React from 'react'
import { merge, some, map, identity } from 'lodash/fp';
import * as types from './types'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import Waveform from "./WaveForm";
import c from 'classnames';

import { ActionButtons, SuccessPanel } from "../shared/actionButtons";

// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import activityStyles from '../find-in-image/styles.css';


import * as componentTypes from '../../types';
// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from './styles.css'

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
            solution,
            audios: initialAudios, } = data;

    const _audios = initialAudios.map((a, i) => ({ src: a }));

         const [audios, setAudios] = React.useState(_audios);
         const reset = () => setAudios(_audios);

    console.log(audios);

    const clicked = (n) => { const ass = updateAt(n, { correct: (n === solution) }, audios);
                             setAudios(ass);
                             const finished = some(identity, map("correct", ass));
                             if (finished) award(10, null, 100); }


    const finished = some(identity, map("correct", audios));

    return (
      <div className={c(activityStyles.activity, activityStyles.activityDiffs)}>
        <div className={activityStyles.row1}>
          <h3 className={activityStyles.title}>{title}</h3>
          <p className={activityStyles.description}>
            {description}
          </p>
        </div>
        <div className={activityStyles.row2}>
          <div className={styles.audios}>
            {audios.map((a, i) => {
              const bb =
                // @ts-ignore - undefined is not clicked yet, false is clicked and wrong
                (a?.correct === false) ? "wrong" :
                    // @ts-ignore - undefined is not clicked yet, false is clicked and wrong
                    (a?.correct === true) ? "right" : "pick";
              const cs = c(styles.button,
                           classes.button,
                           // @ts-ignore - undefined is not clicked yet, false is clicked and wrong
                           (a?.correct === false) ? activityStyles.buttonWrong : null,
                           // @ts-ignore - undefined is not clicked yet, false is clicked and wrong
                           (a?.correct === true) ? activityStyles.buttonCorrect : null)
              return (
                <div className={styles.audioPicker}>
                  <div className={styles.panelLeft}>
                    <Waveform url={a.src} redraw={active} />
                  </div>
                  <div className={styles.panelRight}>
                    <button className={cs}
                      onClick={_ => clicked(i)}>
                      {bb}
                  </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        { finished &&
          <SuccessPanel onNext={() => finish(10, null, 100)}
                         onCancel={() => { reset(); award(10, null, 1) }}>
                You Guessed Correctly
          </SuccessPanel>
        }
      </div>
    )
         }

export default Component;

const data: types.Data = {
    meta: {
        title: "Voice cloning",
        description: "Listen carefully through the 3 audios. Two voices are synthetic just one voice is real - which one? ",
    },
    solution: 2,
    audios: [
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/1/1.mp3",
        // confirmed working audio for testing:
        // "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3",
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/1/2.mp3",
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/1/3.mp3",
    ]
}

const data2: types.Data = {
    meta: {
        title: "Voice cloning",
        description: "Listen carefully through the 3 audios. Two voices are synthetic just one voice is real - which one? ",
    },
    solution: 0,
    audios: [
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/2/1.mp3",
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/2/2.mp3",
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/2/3.mp3",
    ]
}

const data3: types.Data = {
    meta: {
        title: "Voice cloning",
        description: "Listen carefully through the 3 audios. Two voices are synthetic just one voice is real - which one? ",
    },
    solution: 0,
    audios: [
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/2/1.mp3",
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/2/2.mp3",
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/2/3.mp3",
    ]
}

export const Example1 =({...props}) => <Component data={data} {...props} />;

export const Example2 =({...props}) => <Component data={data2} {...props} />;

export const Example3 =({...props}) => <Component data={data3} {...props} />;
