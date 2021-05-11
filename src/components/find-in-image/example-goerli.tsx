import React from 'react';
import Component from './index';
import * as style from './styles';
// import * as images from "../../resources/images/index"

// currently, the visual representation of this data lives at:
// https://www.figma.com/file/4JO8CeRkvDWflXGdE5y6uh/KID%2FDIGGER-training-frameworks?node-id=117%3A4416
// see svg > example-goerli
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
        <g className="hover_group">
          <text x="652" y="706.9" font-size="20">First zone</text>
          <rect x="572" y="324.1" width="264.6" height="387.8"
                style={{...style.shape}}/>
        </g> },
    { description: "some random shape from figma",
      shape:
          <path d="M0.5 99V14L24.5 1.5V76.5L0.5 99Z"
                transform="translate(532.5, 1121.5)"
                style={{ ...style.shape }} /> }
  ]
}


/* Figma, for shapes, can also spit out CSS like:
/           in case the Path with the transform does not work */
/*
 * position: absolute;
 * left: 37.39%;
 * right: 60.92%;
 * top: 59.09%;
 * bottom: 35.77%;
 *
 * background: rgba(251, 255, 44, 0.61);
 * border: 1px solid #000000; */


export default () => <Component data={data} />;
