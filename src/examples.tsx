import React from 'react';
// this has to be imported like this, for some ts issue
// https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#jsx-factories
import * as ReactDOM from 'react-dom';

import GoerlitzerExample from './components/find-in-image/example-goerli';

const styles = {
  wrapper: {
    backgroundColor: 'lightgrey',
  },
  examples: {
    backgroundColor: 'white',
    margin: '0 auto',
    maxWidth: '30rem',
  }
}

// @ts-ignore
const Wrapper = ({ children }) => (
  <div style={styles.wrapper}>
    {children}
  </div>
)

// @ts-ignore
const Content = ({ children }) => (
  <div style={styles.examples}>
    {children}
  </div>
)

const thing = (
  <Wrapper>
    <Content>
      <h1>Training Module Examples</h1>
      <GoerlitzerExample />
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
   module.hot.accept('./examples.tsx', function() {
     console.log('Accepting the updated printMe module!');
     mount();
   })
 }
