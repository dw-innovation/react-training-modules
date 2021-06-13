import React from 'react';
import {  swap, Atom, deref, useAtom } from "@dbeining/react-atom";
import { flatten, map, size, values, tail, delay, remove, isEqual, set, mean, pipe, get, merge } from 'lodash/fp';
// this has to be imported like this, for some ts issue
// https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#jsx-factories
import * as ReactDOM from 'react-dom';
import c from 'classnames';

import * as types from '../types';

import AudioPicker, { Example1, Example2, Example3 } from '../components/audio-picker';
import AudioTagPicker, { Example1 as AudioTag1, Example2 as AudioTag2, Example3 as AudioTag3 } from '../components/audio-tag-picker';
import AudioTagsPicker, { Example1 as AudioTags1, Example2 as AudioTags2, Example3 as AudioTags3 } from '../components/audio-tags-picker';

import GoerlitzerExample from './activities/20-hints-1-goerli';
import BikesExample from './activities/20-hints-2-bikes';
import GasStation from './activities/20-hints-3-gas-station';

import Intelligence1 from './activities/intelligence-1';
import {Example1 as Question1} from '../components/question-answer';

import Bubble1 from './activities/bubble-mix-1';
import Bubble2 from './activities/bubble-mix-2';
import Bubble3 from './activities/bubble-mix-3';

import Differences71 from './activities/7-differences-1';
import Differences72 from './activities/7-differences-2';
import Differences73 from './activities/7-differences-3';

// @ts-ignore
import styles from './styles.css';
// @ts-ignore
import tocStyles from './styles-toc.css';

const Progress = ({ percent }) =>
  <div className={styles.progress}>
    <div className={styles.progressInner} style={{width: `${percent}%`}}>

    </div>
  </div>


// @ts-ignore
const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
)

// @ts-ignore
const Content = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
)

const Messages
  : (p: {messages: types.Message[], removeMessage: (m: types.Message) => void}) => React.ReactElement
  = ({ messages, removeMessage }) => (
    <div className={styles.messages}>
      {messages.map(
        m =>
          <div key={m.id} className={styles.message}>
            {m.content}
            <span onClick={() => removeMessage(m)}
                  className={styles.removeButton}>
              x
            </span>
          </div>
      )}
    </div>
  );

const defaultModus = [ { title: "Art of Perception",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pulvinar est. ",
                         modules: [ { title: "Bubble Count",
                                      activities: [{ title: "Easy",
                                                     component: Bubble1,},
                                                   { title: "Medium",
                                                     component: Bubble2,},
                                                   { title: "Advanced",
                                                     component: Bubble3,}]},
                                    { title: "20 Hints",
                                      activities: [ { title: "Easy",
                                                      component: GoerlitzerExample },
                                                    { title: "Medium",
                                                      component: BikesExample },
                                                    { title: "Advanced",
                                                      component: GasStation }]},
                                    { title: "7 Differences",
                                      activities: [ { title: "Easy",
                                                      component: Differences71 },
                                                    { title: "Medium",
                                                      component: Differences72 },
                                                    { title: "Advanced",
                                                      component: Differences73 }]}]},
                       { title: "Hone your Ears",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pulvinar est. ",
                         modules: [ { title: "Voice cloning",
                                      activities: [{ title: "Easy",
                                                     component: Example1 },
                                                   { title: "Medium",
                                                     component: Example2 },
                                                   { title: "Advanced",
                                                     component: Example3 }], },
                                    { title: "Critical Listening",
                                      activities: [{ title: "Easy",
                                                     component: AudioTag1 },
                                                   { title: "Medium",
                                                     component: AudioTag2 },
                                                   { title: "Advanced",
                                                     component: AudioTag3 }], },
                                    { title: "Sound Collector",
                                      activities: [{ title: "Easy",
                                                     component: AudioTags1 },
                                                   { title: "Medium",
                                                     component: AudioTags2 },
                                                   { title: "Advanced",
                                                     component: AudioTags3 }], }, ], },
                       { title: "Sharpen your Brain",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pulvinar est. ",
                         modules: [ { title: "Intelligence",
                                      activities: [ { title: "Easy",
                                                      component: Intelligence1 }], },
                                    { title: "Find The Original",
                                      activities: [ { title: "Easy",
                                                      component: Question1, }], }, ], }, ];

const defaultState = { modules: defaultModus }

const appState = Atom.of(defaultState);

const updateAt =
  dotPath => obj =>
    swap(appState, state =>
                      pipe(() => get(dotPath, state),
                            o => merge(o, obj),
                            o => set(dotPath, o, state))())

const Modules = ({...props}) => {
  //
  const { modules } = useAtom(appState);

  const [messages, setMessages] = React.useState<types.Message[]>([])
  /* remove the given message from the messages array */
  const removeMessage = (m: types.Message) => { const newMessages = remove(isEqual(m));
                                                setMessages(newMessages) }
  /* add a message to the messages array */
  const addMessage = (m: types.Message) => { setMessages([m, ...messages]);
                                             delay(5000, () => removeMessage(m)) }

  const award =
    (dotPath) =>
      (_, message, percent) => { addMessage(message);
                                 if (percent) updateAt(dotPath)({ percent }) }

  const penalize =
    (dotPath) =>
      (_, message, percent) => { addMessage(message);
                                 if (percent) updateAt(dotPath)({ percent }) }

  console.log(deref(appState))
  /*
 <Messages messages={messages}
        removeMessage={removeMessage} />
  */

  const activities = flatten(map("activities", flatten(map("modules", modules))));
  // @ts-ignore
  const percent = mean(activities.map(a => a.percent || 0) || 0)

  return (
    <div className="diggerModules">
      <div id="toc" className={tocStyles.wrapper}>
        <Progress percent={percent} />
        <div className={tocStyles.modules}>
        {modules.map((theme, i) => {
          const { title, description, modules } = theme;
          const activities = flatten(map("activities", modules));
          // @ts-ignore
          const percent = mean(activities.map(a => a.percent || 0) || 0)

          return (
            <div className={tocStyles.theme}>
              <h3 className={tocStyles.title}>{title}</h3>
              <p className={tocStyles.description}>
                {description}
              </p>

              {modules.map((module, j) => {
                const { activities,
                  title,
                  } = module;

                const moduleDotPath = `modules.${i}.modules.${j}`;

                // @ts-ignore, if percent isn't there choose 0
                const percents = activities.map(a => a.percent || 0)
                const percent = mean(percents) || 0;

                return (
                  <a href={`#module${j}`}>
                  <div className={tocStyles.module}>
                    <div className={tocStyles.backProgress} style={{width: `${percent}%`}} />
                    <div className={tocStyles.moduleTitle}>{title}</div>
                  </div>
                  </a>
                );
              })}


            </div>
          )


        })}
        </div>
      </div>


      <div className={styles.modules}>
        {modules.map((theme, i) => {
          const { title, modules } = theme;
          const activities = flatten(map("activities", modules));

          // @ts-ignore
          const percent = mean(activities.map(a => a.percent || 0) || 0)

          return (
            <div className={styles.theme}>
              {modules.map((module, j) => {
                const { activities,
                  title,
                  // @ts-ignore, if it's not there choose 0
                  selectedActivity = 0 } = module;

                const [direction, setDirection] = React.useState("right"); // not the biggest fan of this

                const moduleDotPath = `modules.${i}.modules.${j}`;

                const hasNext = selectedActivity < size(activities) - 1;
                const hasPrev = selectedActivity > 0;

                const next = () => {
                  updateAt(moduleDotPath)({ selectedActivity: selectedActivity + 1 });
                  setDirection("right");
                } // not super happy with this, but naja
                const prev = () => {
                  updateAt(moduleDotPath)({ selectedActivity: selectedActivity - 1 });
                  setDirection("left");
                }

                // @ts-ignore, if percent isn't there choose 0
                const percents = activities.map(a => a.percent || 0)
                const percent = mean(percents) || 0;

                // TODO activity local state gets lost when you only render one
                // console.log(percents)


                const ActivityHeaders = activities.map((activity, y) => {
                  const { title } = activity
                  const active = (y === selectedActivity)
                  return (
                    <div className={c(styles.activityHeader, active ? styles.active : null)}>
                      { title}
                    </div>
                  )
                })


                const Activities = activities.map((activity, y) => {
                  // how to navigate back to this activity in the tree of things?
                  //    get the dotpath of how we cycled in to get here, so we
                  //      can update ourselves in the state directly
                  const activityDotPath = `modules.${i}.modules.${j}.activities.${y}`

                  const _award = award(activityDotPath);
                  const _penalize = penalize(activityDotPath);
                  const _finish = (...args) => {
                  // @ts-ignore typescript looses types with ...spread apparently
                    award(activityDotPath)(...args);
                    next();
                  }

                  //@ts-ignore
                  const { percent,
                    title } = activity

                  const active = (y === selectedActivity)

                  const classes = c(styles.activity,
                    (active ? styles.active : styles.notActive),
                    (direction === "left" ? styles.fromLeft : styles.fromRight))

                  return (
                    <div className={classes}>
                      <activity.component
                        classes={{ button: styles.buttonPrimary }}
                        award={_award}
                        active={active}
                        penalize={_penalize}
                        finish={_finish} />
                    </div>
                  )
                })

                return (
                  <div id={`module${j}`} className={styles.module}>
                    <div className={styles.moduleHeader}>
                      <div className={styles.moduleHeaderItem}>
                        {hasPrev &&
                          <a href="#" onClick={e => {e.preventDefault(); prev(); }}>back</a>
                        }
                      </div>
                      <div className={c(styles.moduleHeaderItem, styles.moduleHeaderItemCenter)}>
                        <div className={styles.activityHeaders}>
                          <div className={styles.activityModuleTitle}>{title}: </div> {ActivityHeaders}
                        </div>
                      </div>
                      <div className={styles.moduleHeaderItem}>
                        <a href="#toc">Home</a>
                      </div>
                    </div>
                    <Progress percent={percent} />
                    { Activities}
                    <div className={styles.moduleFooter}>
                      <div className={styles.moduleHeaderItem}>
                        {hasPrev && <button className={styles.buttonSecondary} onClick={_ => prev()}>back</button>}
                      </div>
                      <div className={c(styles.moduleHeaderItem, styles.moduleHeaderItemCenter)}>
                      </div>
                      <div className={styles.moduleHeaderItem}>
                        {hasNext && <button className={styles.buttonSecondary} onClick={_ => next()}>next</button>}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}

/*

      <GoerlitzerExample award={award}
                         penalize={penalize} />
*/

const thing = (
  <Wrapper>
    <Content>
      <h1>Digger Training Modules - feature attempt</h1>
      <Modules />
    </Content>
  </Wrapper>
)


const mount = () => {
  const element = document.createElement('div');
  element.id = "app";
  // attach the react app to the element
  ReactDOM.render(thing, element);
  document.body.appendChild(element);
}

mount();

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./index.tsx', function() {
    console.log('Accepting the updated printMe module!');
    mount();
  })
}
