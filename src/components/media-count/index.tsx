import React from 'react';
import { merge } from 'lodash/fp';
import * as types from './types';
import * as componentTypes from '../../types';

// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from '../find-in-image/styles.css';
import c from 'classnames';

type Props =
  componentTypes.TrainingComponent
  & { data: types.Data; classes?: { button?: object;
                                    [key:string]: object; } }

const updateAt = (i: number, o: object, a: Array<any>): Array<any> => {
  const obj = a[i];
  const updated = merge(obj, o);
  const copy = [ ...a ];
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
       classes = { },
       data, }) =>
{
    //
    const { meta: { title, description, solution, options: dataOptions },
            media: { type, src }, } = data;

    const initialOptions = dataOptions.map(o => ({ correct: (o === solution),
                                                   value: o,
                                                   clicked: false, }))

    const [ options, setOptions ] = React.useState(initialOptions);

    const Media =
      (type === "image")
      ? (<img className={styles.panelImage} src={src} />)
      : (<video className={styles.panelVideo} controls width="250">
           <source src={src} />
         </video>)


  const Buttons = options.map((o, i) => {
    const {clicked, correct, value} = o;
    const cs = c((classes.button || styles.button),
                 (clicked && correct) ? styles.buttonCorrect : null,
                 (clicked && !correct) ? styles.buttonWrong : null);

    const click = _ => { setOptions(updateAt(i, { clicked: true }, options));
                         if (value === solution) finish(10, null, 100) }

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
            <div className={styles.options}>{Buttons}</div>
          </p>
        </div>
        <div className={styles.panel2}>
          {Media}
          <a download={src} target="_blank" href={src}>Download media</a>
        </div>
      </div>
    );
  }

export default Component;
