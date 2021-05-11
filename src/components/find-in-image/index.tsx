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

const svgProps = { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }

const Shapes = ({ successClick, shapes }) =>
  shapes.map(s =>
    <a href="#" onClick={successClick}>
      <g className="hover_group" opacity=".5">
        {s.shape}
      </g>
    </a>
  )

const ClickImage = ({ image, shapes, successClick, failedClick }) => {
  //
  const svgRef = React.useRef(null);
  const [markers, setMarkers] = React.useState([]);

  /* return the relative coordinates of where you clicked in the svg,
            assuming it's size has been changed by the browser window */
  const coords = evt => {
    const svg = svgRef.current // sometimes undefined, sometimes not
    const pt = svg?.createSVGPoint();  // Created once for document
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    // The cursor point, translated into svg coordinates
    var cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse());
    console.log("(" + cursorpt.x + ", " + cursorpt.y + ")");
    return {
      x: cursorpt.x,
      y: cursorpt.y,
    }
  }

  const failed = evt => {
    evt.preventDefault();
    const { x, y } = coords(evt);
    setMarkers([...markers, { x, y, color: "red" }]);
    failedClick(); // bounce up to parent
  }
  const succeeded = evt => {
    evt.preventDefault();
    const { x, y } = coords(evt);
    setMarkers([...markers, { x, y, color: "green" }]);
    successClick(); // bounce up to parent
  }

  return (
    <svg
      viewBox={`0 0 ${image.width} ${image.height}`}
      ref={svgRef}
      preserveAspectRatio="xMinYMin meet"
      {...svgProps}
    >
      <a href="#" onClick={failed}>
        <image width={image.width} height={image.height} href={image.src} />
      </a>
      <Shapes successClick={succeeded} shapes={shapes} />
      {markers.map(m =>
        <rect x={m.x} y={m.y} width="10" height="10" fill={m.color} />
      )}
    </svg>
  )
}


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
             successClick={() => addMessage('clicked a box')}
             failedClick={() => addMessage('failed!')} />
         </div>
       );
}

export default Component;
