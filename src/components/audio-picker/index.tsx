import React from 'react'
import * as types from './types'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import Waveform from "./WaveForm";
import c from 'classnames';

// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import activityStyles from '../find-in-image/styles.css';


import * as componentTypes from '../../types';
// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from './styles.css'

    /*
     *   }
     *   render() {
     *     return (
     *       <div className='waveform'>
     *         <div className='wave'></div>
     *       </div>
     *     )
     *   }
     * }
     * const Wave = ({ src }) => {
     *   const waveformRef = React.useRef();
     *
     *   React.useEffect(() => {
     *     if(waveformRef.current) {
     *       const wavesurfer = WaveSurfer.create({
     *         container: waveformRef.current,
     *         barWidth: 3,
     *         cursorWidth: 1,
     *         // backend: 'WebAudio',
     *         height: 80,
     *         progressColor: '#2D5BFF',
     *         responsive: true,
     *         waveColor: '#EFEFEF',
     *         cursorColor: 'transparent',
     *         xhr: { cache: 'default',
     *              mode: 'no-cors',
     *              method: 'GET',
     *              // credentials: 'same-origin',
     *              redirect: 'follow',
     *              referrer: 'client' }
     *  */
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
    data, }) => {
    //
    const { meta: { title, description },
      audios } = data;

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
            {audios.map(src =>
              <div className={styles.audioPicker}>
                <div className={styles.panelLeft}>
                  <Waveform url={src} />
                </div>
                <div className={styles.panelRight}>
                  <button className={c(styles.button, classes.button)}>Pick</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
         }

export default Component;

const data: types.Data = {
    meta: {
        title: "Voice cloning",
        description: "Listen carefully through the 3 audios. Two voices are synthetic just one voice is real - which one? ",
    },
    audios: [
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/1/1.mp3",
// "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3",
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/1/2.mp3",
        "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/voice-cloning/1/3.mp3",
    ]
}

export const Example =({...props}) => <Component data={data} {...props} />;
