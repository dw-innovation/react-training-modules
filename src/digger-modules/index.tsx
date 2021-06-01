import React from 'react';
import { swap, Atom, deref, useAtom } from "@dbeining/react-atom";
import { values, tail, delay, remove, isEqual, set, mean } from 'lodash/fp';
// this has to be imported like this, for some ts issue
// https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#jsx-factories
import * as ReactDOM from 'react-dom';
import * as types from '../types';

import GoerlitzerExample from './activities/20-hints-1-goerli';
import BikesExample from './activities/20-hints-2-bikes';

// @ts-ignore
import styles from './styles.css';

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
                         modules: [ { title: "Bubble Count",
                                      activities: []},
                                    { title: "20 Hints",
                                      activities: [ { title: "Easy",
                                                      component: GoerlitzerExample },
                                                    { title: "Medium",
                                                      component: BikesExample }]}]}]

const defaultState = { modules: defaultModus }

const appState = Atom.of(defaultState);

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
                                 if (percent) swap(appState, set(dotPath + '.percent', percent))}

  const penalize =
    (dotPath) =>
      (_, message, percent) => { addMessage(message);
                                 if (percent) swap(appState, set(dotPath + '.percent', percent))}

  console.log(deref(appState))

  return (
    <div className="diggerModules">
      <Messages messages={messages}
        removeMessage={removeMessage} />

      {modules.map((theme, i) =>
        <div>
          <h3>{theme.title}</h3>
          {theme.modules.map((module, j) => {
            const { activities, title } = module;
            // @ts-ignore
            const percent = mean(activities.map(a => a.percent || 0) || 0)

            return (
              <div>
                <h5>{title}</h5>
                <Progress percent={percent} />
                {module.activities.map((activity, y) => {
                  // how to navigate back to this activity in the tree of things?
                  //    get the dotpath of how we cycled in to get here, so we
                  //      can update ourselves in the state directly
                  const dotPath = `modules.${i}.modules.${j}.activities.${y}`
                  //@ts-ignore
                  const { percent, title } = activity

                  return (
                    <div>
                      <h6>{title}</h6>
                      <activity.component
                        award={award(dotPath)}
                        penalize={penalize(dotPath)} />
                    </div>
                  )
                })}
              </div>
            )
          })}




        </div>
      )}
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
