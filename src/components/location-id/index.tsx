import React from 'react';
import { isEqual, pipe, size, take, lowerCase } from 'lodash/fp';
import * as types from './types';
import { Data } from './types';
import { Shape, Coords, onlyVisible } from '../svg-click-image/types';
import * as componentTypes from '../../types';
import { ClickImage } from '../svg-click-image';
import c from 'classnames';
import StringSimilarity from 'string-similarity';
import { ActionButtons, SuccessPanel } from "../shared/actionButtons";


// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from '../find-in-image/styles.css';

/*
 *   This component implements the api of the parent component, as
 *      well as requiring it's own data
 */
type Props =
  componentTypes.TrainingComponent
  & {
    data: Data; classes?: {
      button?: object;
      [key: string]: object;
    }
  }

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
    const { meta: { title, description, tips },
      solution,
      image,
      shapes } = data;

    const [text, setText] = React.useState("");

    const reset = () => setText("");

    const inputText =
      (t) => {
        const v = t?.target?.value;
        const sim = StringSimilarity.compareTwoStrings(lowerCase(v), lowerCase(solution))
        console.log(v)
        console.log(solution)
        console.log(sim)
        setText(v);
        const finished = (lowerCase(v) == lowerCase(solution));
        console.log(finished)
        award(10, null, sim*100);
        if (finished) award(10, null, 100);
      }

    const finished = (lowerCase(text) === lowerCase(solution));

    return (
      <div className={styles.activity}>
        <div className={styles.panel1}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>
            {description}
          </p>
          <p className={styles.tips} dangerouslySetInnerHTML={{__html: tips}}>
          </p>
        </div>
        <div className={styles.panel2}>
          <ClickImage image={image} shapes={shapes} />
          <a download={image.src} target="_blank" href={image.src}>Download media</a>
          <div className={styles.answerBox}>
            <input type="text"
                   className={styles.input}
                   onChange={inputText}
                   placeholder="Enter Street Name"
                   value={text}/>
          </div>
        </div>
        { finished &&
          <SuccessPanel onNext={() => finish(10, null, 100)}
                         onCancel={() => { reset(); award(10, null, 1) }}>
                You Guessed Correctly
          </SuccessPanel>
        }
      </div>
    );
  }

export default Component;
