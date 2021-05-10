import React from 'react';

type Props = {
  award?: (points: number, msg?: string) => void;
  penalize?: (points: number, msg?: string) => void;
  finish?: (points: number, msg?: string) => void;
  fail?: (points: number, msg?: string) => void;
}

const Component
: (p: Props) => React.ReactElement
= ({ award = () => {},
     penalize = () => {},
     finish = () => {},
     fail = () => {} }) => {
      return (<div />);
}

export default Component;
