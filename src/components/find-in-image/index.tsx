import React from 'react';
// import * as images from "../../resources/images/index"

type Props = {
  award?: (points: number, msg?: string) => void;
  penalize?: (points: number, msg?: string) => void;
  finish?: (points: number, msg?: string) => void;
  fail?: (points: number, msg?: string) => void;
}

const style = {
  shape: {
    backgroundColor: 'yellow',
  }
} as const;

const Rectangles = ({ successClick }) => (
  <React.Fragment>
    <g className="hover_group" style={style.shape} opacity="1">
      <a href="#" onClick={successClick}>
        <text x="652" y="706.9" font-size="20">First zone</text>
        <rect x="572" y="324.1" opacity="1" fill={style.shape.backgroundColor} width="264.6" height="387.8"></rect>
      </a>
    </g>
    <g className="hover_group" opacity="1">
      <a href="#" onClick={successClick}>
        <text x="1230.7" y="952" font-size="20">Second zone</text>
        <rect x="1081.7" y="507" opacity="1" fill="#FFFFFF" width="390.2" height="450"></rect>
      </a>
    </g>
  </React.Fragment>
)

const ClickImage = ({ successClick, failedClick }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" preserveAspectRatio="xMinYMin meet" >
    <a href="#" onClick={failedClick}>
      <image width="1920" height="1080" href="http://placehold.it/1920x1080" />
    </a>
    <Rectangles successClick={successClick} />
  </svg>
  )

const Component
// the function signature/types:
: (p: Props) => React.ReactElement
// the function itself
= ({ award = () => {},
     penalize = () => {},
     finish = () => {},
     fail = () => {} }) => {
       //
       const [messages, setMessages] = React.useState(["welcome to the game"]);

       const addMessage = msg => setMessages([msg, ...messages]);

       const Message = m => <li>{m}</li>
       const Messages = <ul>{messages.map(Message)}</ul>

       return (
         <div>
           <h3>Find in Image excersize</h3>
           {Messages}
           <ClickImage
             successClick={() => addMessage("clicked a box")}
             failedClick={() => addMessage("failed to click a box")} />
         </div>
       );
}

export default Component;
