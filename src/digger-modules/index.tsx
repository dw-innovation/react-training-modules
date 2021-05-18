import React from 'react';
import { tail, delay, remove, isEqual } from 'lodash/fp';
// this has to be imported like this, for some ts issue
// https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#jsx-factories
import * as ReactDOM from 'react-dom';
import * as types from '../types';

import GoerlitzerExample from './find-in-goerli';

// @ts-ignore
import styles from './styles.css';

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

const Modules = ({...props}) => {
  //
  const [messages, setMessages] = React.useState<types.Message[]>([])
  /* remove the given message from the messages array */
  const removeMessage = (m: types.Message) => { const newMessages = remove(isEqual(m));
                                                setMessages(newMessages) }
  /* add a message to the messages array */
  const addMessage = (m: types.Message) => { setMessages([m, ...messages]);
                                             delay(5000, () => removeMessage(m)) }

  const award = (_, msg) => addMessage(msg);
  const penalize = (_, msg) => addMessage(msg);

  return (
    <div className="diggerModules">
      <Messages messages={messages}
                removeMessage={removeMessage} />
      <h2>The Art of Perception 👁️</h2>
      <GoerlitzerExample award={award}
                         penalize={penalize} />
    </div>
  );
}


const thing = (
  <Wrapper>
    <Content>
      <h1>Digger Training Modules</h1>
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
