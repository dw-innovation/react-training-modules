import React from 'react';
import { merge, some, map, identity } from 'lodash/fp';
import * as types from './types';
import * as componentTypes from '../../types';

import { ActionButtons, SuccessPanel } from "../shared/actionButtons";

// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from '../find-in-image/styles.css';
import c from 'classnames';

type Props =
  componentTypes.TrainingComponent
  & {
    data: types.Data; classes?: {
      button?: object;
      [key: string]: object;
    }
  }

const updateAt = (i: number, o: object, a: Array<any>): Array<any> => {
  const obj = a[i];
  const updated = merge(obj, o);
  const copy = [...a];
  copy.splice(i, 1, updated);
  return copy;
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
    const { meta: { title, description, solution, options: dataOptions, tips },
      media: { type, src }, } = data;

    const initialOptions = dataOptions.map(o => ({
      correct: (o === solution),
      value: o,
      clicked: false,
    }))

    const [options, setOptions] = React.useState(initialOptions);

    const reset = () => setOptions(initialOptions);

    // calculate if the user has clicked correctly
    const finished = some(identity, map(o => (o.clicked && o.correct), options));

    const Media =
      (type === "image")
        ? (<img className={styles.panelImage} src={src} />)
        : (<video className={styles.panelVideo} controls width="250">
          <source src={src} />
        </video>)


    const Buttons = options.map((o, i) => {
      const { clicked, correct, value } = o;
      const cs = c((classes.button || styles.button),
        (clicked && correct) ? styles.buttonCorrect : null,
        (clicked && !correct) ? styles.buttonWrong : null);

      const click = _ => { const os = updateAt(i, { clicked: true }, options);
                           setOptions(os);
                           const finished = some(identity, map(o => (o.clicked && o.correct), os));
                           if (finished) { console.log("heyyyyyy"); console.log(award); award(10, null, 100) } };

      return <button className={cs} onClick={click}>{o.value}</button>
    })

    return (
      <div className={styles.activity}>
        <div className={styles.panel1}>
          <h3 className={styles.title}>
            {title}
          </h3>
          <p className={styles.description}>
            {description}
          </p>
          <p className={styles.tips} dangerouslySetInnerHTML={{__html: tips}}>
          </p>
            <div className={styles.options}>{Buttons}</div>
        </div>
        <div className={styles.panel2}>
          {Media}
          <a download={src} target="_blank" href={src}>Download media</a>
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
