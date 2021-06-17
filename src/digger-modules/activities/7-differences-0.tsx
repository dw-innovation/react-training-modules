import React from 'react'
import FindTheDifference from '../../components/find-the-difference'
import * as types from '../../components/find-the-difference/types'

// currently, the visual representation of this data lives at:
// https://www.figma.com/file/4JO8CeRkvDWflXGdE5y6uh/KID%2FDIGGER-training-frameworks?node-id=117%3A4416
// see svg > example-goerli
// you can copy paste the svgs to get the shape
//  - and then transform/translate them to the X/Y position you should see at the top of
//   - the figma right hand column
const data: types.Data = {
  meta: {
    title: "7 Differences",
    description: "Find the 7 differences in the two images"
  },
  image: {
    original: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-0-left-pens.jpg",
      height: 1024,
      width: 1024,
    },
    altered: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-0-right-pens.jpg",
      height: 1024,
      width: 1024,
    },
    shapes: [
      {
        description: "the black pen on the left",
        shape:
          <path d="M211.5 179.5L9 31.5L2.5 26.5L23.5 3L232 157.5L211.5 179.5Z"
                transform="translate(121.5,522)"/>
      },
      {
        description: "a green dino",
        shape:
          <path d="M33 83.5L2.5 37.5L130 2.5V60L33 83.5Z"
                transform="translate(255.5,464.5)"/>
      },
      {
        description: "a red pen, a nice one",
        shape:
          <path d="M85.5 387.5L2.5 13L34.5 2L108 387.5H85.5Z"
                transform="translate(478.5,522)"/>
      },
      {
        description: "a paperclip at the top",
        shape:
          <path d="M1.5 78.5V2H28.5V78.5H1.5Z"
                transform="translate(443.5,179)"/>
      },
      {
        description: "a longer paperclip hidden under things",
        shape:
          <path d="M110.5 2.5L2 37.5V67.5L121.5 29.5L110.5 2.5Z"
                transform="translate(571,590.5)" />
      },
      {
        description: "an eraser",
        shape:
          <path d="M25.5 49L3 28.5L25.5 3L48 28.5L25.5 49Z"
                transform="translate(724,286)"/>
      },
      {
        description: "big red marker",
        shape:
          <path d="M276.5 2.5L2.5 291.5L39 329.5L321.5 50.5L276.5 2.5Z"
                transform="translate(628.5,427.5)"/>
      },

    ]
  },
}

export default ({...props}) => <FindTheDifference data={data} {...props} />;
