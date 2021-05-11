import React from 'react';
// import * as images from "../../resources/images/index"

type Props = {
  award?: (points: number, msg?: string) => void;
  penalize?: (points: number, msg?: string) => void;
  finish?: (points: number, msg?: string) => void;
  fail?: (points: number, msg?: string) => void;
}

const svgProps = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",

}

const style = {
  shape: {
    backgroundColor: 'yellow',
  }
} as const;

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

type Data = {
  image: ImageData;
  shapes: Shape[];
}

/* <svg width="25" height="101" viewBox="0 0 25 101" fill="none" xmlns="http://www.w3.org/2000/svg">
 * <path d="M0.5 99V14L24.5 1.5V76.5L0.5 99Z" fill="#FBFF2C" fill-opacity="0.61" stroke="black"/>
 * </svg> */


const data = {
  image: {
    // src: "https://lh3.google.com/u/0/d/1qbBq6NdC3v-WekqjMm5QAY-KXRG_IBiA=w1875-h1898-iv2",
    src: "https://lh3.googleusercontent.com/fife/ABSRlIp4SXYBH7sehH2CeXeoN_yaw0eDJELBamP4xxRhU6pzDrk_URt5F2myTjfnvPmQn96hVACYxzcUoh_Vpx6CVyRxQAtjopJdNe8HtZh0qDYVMe_QC_0es3_FH-Gmqi8kr9kgcy-wzwbFzWTH3bA2Oz7dfbus6gxaNmpUg2maqr6Z5yDgkRBERx2gGqrRij6HBhSA7FLdov-e14KyUWHNGY_x8Ykm7E0O0opeFev1AyqWIx-WHCEae-L-uQIYXeejsbCvyW4mfmJWQT8orbFoevc1Bpz5Emeprys981zJX_JJtYkKukvf1QCPHlEKUHNzbmELfYNZF7Wwb4kg7Dx9afn8J_qDUP5Gfy1fcTzUEgaLvSIpZ1d5OiouOxtN715nhgUty31jkYbS23tr0bmejPzl0fjz6Fz_sJoAZMrIctibLEHKpfmkzd1BS80YUTB7W_g44aJrjJ1VoNAZ9BH-Sj8lDI5gNEaSvcSR0Tm4j9Ib5Ob5iU0Ke02d6T2RPujeJBJ0_m_SnLBulYZqcM85FFijNZAVHPX42Mrh7EmsWHZS2hiKTLxfRa4hx8YuSjI85xuCceoCgT5tsPMiJAQXyXM4B1QpbYZinEIIgVhSYUk8lGPKIqDGhZRQaWqOJLmXJufSWsVGlzTW7UQwVlT0WrvmiCrl1Y4ywqieAaw0tLJLIP2Z65ldHWD_ZlhtFDd9cGqlyFIxtwxNKuN9ecmuNOsrmgy9CFbAAd4=w1875-h1898-ft",
    height: 1898,
    width: 1424,
  },
  shapes: [
    { description: "this is the first box of the image, and this is the description of it",
      shape:
        <g className="hover_group" style={style.shape} opacity="1">
          <text x="652" y="706.9" font-size="20">First zone</text>
          <rect x="572" y="324.1" opacity="1" fill={style.shape.backgroundColor} width="264.6" height="387.8" />
        </g> },
    { description: "here's another box!!!",
      shape:
        <g className="hover_group">
          <text x="1230.7" y="952" font-size="20">Second zone</text>
          <rect x="1081.7" y="507" opacity="1" fill="#FFFFFF" width="390.2" height="450" />
        </g> },
    { description: "some random shape from figma",
      shape: <path d="M0.5 99V14L24.5 1.5V76.5L0.5 99Z" fill="#FBFF2C" fill-opacity="0.61" stroke="black"/> }
  ]
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
             image={data.image}
             shapes={data.shapes}
             successClick={() => addMessage("clicked a box")}
             failedClick={() => addMessage("failed to click a box")} />
         </div>
       );
}

export default Component;
