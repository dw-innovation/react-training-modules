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
