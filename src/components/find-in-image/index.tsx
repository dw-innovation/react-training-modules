import React from 'react';
// import * as images from "../../resources/images/index"

type Shape = {
  description: string;
  visible?: boolean; // not true is falsy
  shape: React.ReactElement;
}

type ImageData = {
  src: string;
  height: number;
  width: number;
}

type Data = { image: ImageData; shapes: Shape[]; }

type Props = {
  award?: (points: number, msg?: string) => void;
  penalize?: (points: number, msg?: string) => void;
  finish?: (points: number, msg?: string) => void;
  fail?: (points: number, msg?: string) => void;
  data: Data;
}

const svgProps = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
}


const Shapes = ({ successClick, shapes }) =>
  shapes.map(s =>
    <a href="#" onClick={successClick}>
      <g className="hover_group" opacity=".5">
        {s.shape}
      </g>
    </a>
  )

const ClickImage = ({ image, shapes, successClick, failedClick }) => (
  <svg
    viewBox={`0 0 ${image.width} ${image.height}`}
    preserveAspectRatio="xMinYMin meet" {...svgProps}
  >
    <a href="#" onClick={failedClick}>
      <image width={image.width} height={image.height} href={image.src} />
    </a>
    <Shapes successClick={successClick} shapes={shapes} />
  </svg>
  )



const Component
// the function signature/types:
: (p: Props) => React.ReactElement
// the function itself
= ({ award = () => {},
     penalize = () => {},
     finish = () => {},
     fail = () => {},
     data, }) => {
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
             image={data.image}
             shapes={data.shapes}
             successClick={() => addMessage("clicked a box")}
             failedClick={() => addMessage("failed to click a box")} />
         </div>
       );
}

export default Component;
