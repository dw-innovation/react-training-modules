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
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-1-pen-left_f.jpg",
      height: 1024,
      width: 1024,
    },
    altered: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-1-pen-right_f.jpg",
      height: 1024,
      width: 1024,
    },
    shapes: [
      {
        description: "the blue pen on the right",
        shape:
          <path d="M352 66L289 3L3 284.5L60.5 334.5L352 66Z" transform="translate(1,86)"/>
      },
      {
        description: "the blue pen on the right",
        shape:
          <path d="M74 16L35 2L2.5 85.5H35L74 16Z" transform="translate(298,352)"/>
      },
      {
        description: "the blue pen on the right",
        shape:
          <path d="M37.5 103L2 20L25 2.5L62.5 85.5L37.5 103Z" transform="translate(312,598)"/>
      },
      {
        description: "the blue pen on the right",
        shape:
          <path d="M113 1.5H73L2.5 604H35L113 1.5Z" transform="translate(578,259)"/>

      },
      {
        description: "the blue pen on the right",
        shape:
          <path d="M1.5 78.5V21L32 3.5V78.5H1.5Z" transform="translate(741,676)" />
      },
      {
        description: "the blue pen on the right",
        shape:
          <path d="M95 1.5H67.5L2.5 489L37.5 501.5L95 1.5Z" transform="translate(774,304)"/>

      },
      {
        description: "the blue pen on the right",
        shape:
          <path d="M1.5 58V22.5L96.5 2.5L109.5 37.5L1.5 58Z" transform="translate(877,603)"/>
      },
    ]
  },
}

export default ({...props}) => <FindTheDifference data={data} {...props} />;
