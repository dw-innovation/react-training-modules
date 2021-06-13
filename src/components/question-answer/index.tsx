import React from 'react'
import { mean, lowerCase, merge, some, map, identity, every } from 'lodash/fp';
import * as types from './types'
import ReactDOM from 'react-dom'
import c from 'classnames';
import StringSimilarity from 'string-similarity';

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
    const { meta: { title, description, tips },
            questions: initialQuestions } = data;

    const [questions, setQuestions] = React.useState(initialQuestions);
    const reset = () => setQuestions(initialQuestions);

    const answered = (qi, answer) =>
      { const q = questions[qi];
        const correct = lowerCase(answer) == lowerCase(q.solution);
        const percent = StringSimilarity.compareTwoStrings(lowerCase(answer), lowerCase(q.solution))
        console.log(percent);
        const ass = updateAt(qi, { correct, percent }, questions);
        setQuestions(ass);

        const totalPercent = mean(ass.map(a => (a.percent * 100) || 0) || 0);
        award(10, null, totalPercent )
        const finished = every(identity, map("correct", ass));
        if (finished) award(10, null, 100); }

    const finished = every(identity, map("correct", questions));

    return (
      <div className={c(activityStyles.activity, activityStyles.activityDiffs)}>
        <div className={activityStyles.row1}>
          <h3 className={activityStyles.title}>{title}</h3>
          <p className={activityStyles.description}>
            {description}
          </p>
          <p dangerouslySetInnerHTML={{__html: tips}} />
        </div>
        <div className={activityStyles.row2}>
          <div className={styles.questions}>
            {questions.map((q, i) => {
              const cs = c(styles.button,
                           classes.button,
                           // @ts-ignore - undefined is not clicked yet, false is clicked and wrong
                           (q?.correct === false) ? activityStyles.buttonWrong : null,
                           // @ts-ignore - undefined is not clicked yet, false is clicked and wrong
                           (q?.correct === true) ? activityStyles.buttonCorrect : null)
              return (
                <div className={activityStyles.question}>
                  <div className={activityStyles.questionText}>
                    {q.question}
                  </div>
                  <div className={activityStyles.questionAnswer}>
                    <input type="text"
                           className={activityStyles.input}
                           onChange={({target: { value }}) => answered(i, value)}
                           placeholder={q.placeholder} />
                  </div>
                  <div className={activityStyles.answerButton}>
                    <button className={cs}>✔</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        { finished &&
          <div className={activityStyles.success}>
            <div className={activityStyles.successInner}>
              <div className={activityStyles.completedTitle}>Completed</div>
              <p className={activityStyles.completedText}>
                You Guessed Correctly
          </p>
              <button className={c(activityStyles.button, classes.button)}
                onClick={_ => finish(10, null, 100)}>
                Next
              </button>
              <button className={c(activityStyles.button, classes.button)}
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
    )
         }

export default Component;

const data: types.Data = {
    meta: {
        title: "Find the Original",
        description: "We have three sentences. Find the original speech and the correct answer.",
    },
  questions: [
    { type: "string" as const,
      question: "“I am also very proud to announce the United States is again becoming a key leader in Mission Innovation.”",
      placeholder: "Name of Person",
      solution: "Biden"
    },
    { type: "date" as const,
      question: "When did UN Secretary General Guterres say: “We are in this together – and we will get through this, together.”",
      placeholder: "Date (YYYY-MM-DD)",
      solution: "2020-03-13",
    },
    { type: "string" as const,
      question: "Wenn ich mich aber heute direkt bei Symptombeginn teste, dann gibt es doch eine gewisse Wahrscheinlichkeit, dass der Antigentest noch nicht positiv ist.",
      placeholder: "Number of Podcast",
      solution: "84",
    },
  ]
}

export const Example1 =({...props}) => <Component data={data} {...props} />;

