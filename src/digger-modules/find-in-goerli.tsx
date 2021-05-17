import React from 'react'
import FindInImage from '../components/find-in-image'

// @ts-ignore
import image from './resources/images/20-hints-goerli.jpg'

// currently, the visual representation of this data lives at:
// https://www.figma.com/file/4JO8CeRkvDWflXGdE5y6uh/KID%2FDIGGER-training-frameworks?node-id=117%3A4416
// see svg > example-goerli
const data = {
  image: {
    src: image,
    // src: "https://lh3.googleusercontent.com/fife/ABSRlIp4SXYBH7sehH2CeXeoN_yaw0eDJELBamP4xxRhU6pzDrk_URt5F2myTjfnvPmQn96hVACYxzcUoh_Vpx6CVyRxQAtjopJdNe8HtZh0qDYVMe_QC_0es3_FH-Gmqi8kr9kgcy-wzwbFzWTH3bA2Oz7dfbus6gxaNmpUg2maqr6Z5yDgkRBERx2gGqrRij6HBhSA7FLdov-e14KyUWHNGY_x8Ykm7E0O0opeFev1AyqWIx-WHCEae-L-uQIYXeejsbCvyW4mfmJWQT8orbFoevc1Bpz5Emeprys981zJX_JJtYkKukvf1QCPHlEKUHNzbmELfYNZF7Wwb4kg7Dx9afn8J_qDUP5Gfy1fcTzUEgaLvSIpZ1d5OiouOxtN715nhgUty31jkYbS23tr0bmejPzl0fjz6Fz_sJoAZMrIctibLEHKpfmkzd1BS80YUTB7W_g44aJrjJ1VoNAZ9BH-Sj8lDI5gNEaSvcSR0Tm4j9Ib5Ob5iU0Ke02d6T2RPujeJBJ0_m_SnLBulYZqcM85FFijNZAVHPX42Mrh7EmsWHZS2hiKTLxfRa4hx8YuSjI85xuCceoCgT5tsPMiJAQXyXM4B1QpbYZinEIIgVhSYUk8lGPKIqDGhZRQaWqOJLmXJufSWsVGlzTW7UQwVlT0WrvmiCrl1Y4ywqieAaw0tLJLIP2Z65ldHWD_ZlhtFDd9cGqlyFIxtwxNKuN9ecmuNOsrmgy9CFbAAd4=w1875-h1898-ft",
    height: 1898,
    width: 1424,
  },
  shapes: [
    { description: "this is the first box of the image, and this is the description of it",
      shape:
          <rect x="572" y="324.1" width="264.6" height="387.8" /> },
    { description: "some random shape from figma",
      shape:
          <path d="M0.5 99V14L24.5 1.5V76.5L0.5 99Z"
                transform="translate(532.5, 1121.5)" /> }
  ]
}

export default () => <FindInImage data={data} />;
