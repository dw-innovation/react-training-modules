import React from 'react';
import { isEqual, pipe, size, take } from 'lodash/fp';
import * as types from './types';
import { Data } from './types';
import { Shape, Coords, onlyVisible } from '../svg-click-image/types';
import * as componentTypes from '../../types';
import { ClickImage } from '../svg-click-image';
import c from 'classnames';

// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from '../find-in-image/styles.css';

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
       classes = { },
       data, }) => {
    //
    const { meta: { title, description },
            image: {
              original: originalImage,
              altered: alteredImage,
              shapes: originalShapes }} = data;

    const [failedAttempts, setFailed] = React.useState(0)

    const [shapes, setShapes] = React.useState(originalShapes)

    const reset = () => { setFailed(0);
                          setShapes(originalShapes); }

    // given a shape, update that shape in our state
    // with visible: true
    // annoying that js doesn't have nicer ways to do this
    const found =
      (s: Shape) => {
        const newShapes =
          shapes
            .map(s2 =>
              (isEqual(s, s2)) // if it's equal to the one we want
                ? { ...s2, visible: true, } // return with visible true
                : s2) // otherwide leave it alone
        setShapes(newShapes); // update the state
        return newShapes;
      }

    const foundCount = size(onlyVisible(shapes));
    const totalCount = size(shapes);

    const finished = (foundCount === totalCount)

    const getPercent = (ss) => {
      const foundCount = size(onlyVisible(ss));
      const totalCount = size(ss);
      return foundCount / totalCount * 100;
    }

    const clickFound =
      (s: Shape, c: Coords) => {
        const newShapes = found(s);
        const msg = componentTypes.createMessage(`found an object: ` + s.description);
        award(10, msg, getPercent(newShapes));
      }

    const clickFailed =
      (c: Coords) => {
        const msg = componentTypes.createMessage(`failed a click`);
        penalize(10, msg, foundCount / totalCount * 100);
        setFailed(failedAttempts + 1);
      }

    return (
      <div className={c(styles.activity, styles.activityDiffs)}>
        <div className={styles.row1}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>
              {description}
            </p>
        </div>
        <div className={styles.row2}>
          <div className={styles.panel1}>
          <img className={styles.panelImage} src={originalImage.src} />
          </div>
          <div className={styles.panel2}>
            <div className={styles.stats}>
              <div className={styles.stat_found}>
                <span className={styles.count_found}>
                  {foundCount}
                </span>/{totalCount} found
          </div>
              <div className={styles.stat_failed}>
                <span className={styles.count_failed}>{failedAttempts} </span>
            misclicks
          </div>
            </div>
            <ClickImage
              image={alteredImage}
              shapes={shapes}
              successClick={clickFound}
              failedClick={clickFailed} />
          </div>
          {finished &&
            <div className={styles.success}>
              <div className={styles.successInner}>
                <div className={styles.completedTitle}>Completed</div>
                <p className={styles.completedText}>
                  You found all {totalCount} hints. You guessed wrong
            <span className={styles.count_failed}> {failedAttempts}</span> times
          </p>
                <button className={c(styles.button, classes.button)}
                  onClick={_ => finish(10, null, 100)}>
                  Next
              </button>
                <button className={c(styles.button, classes.button)}
                  onClick={_ => {
                    reset();
                    award(10, null, 1);
                  }}>
                  Try Again
              </button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }

export default Component;
