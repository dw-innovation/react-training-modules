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
    description: "Find 7 differences"
  },
  image: {
    original: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-3-nuts-left.jpg",
      height: 1074,
      width: 1024,
    },
    altered: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-3-nuts-right.jpg",
      height: 1074,
      width: 1024,
    },
    shapes: [
      {
        description: "a nut",
        shape:
          <path d="M2 70V2.5H84.5V70H2Z"
                transform="translate(19,3)"/>
      },
      {
        description: "another nut",
        shape:
          <path d="M2.5 55V2.5H75.5V55H2.5Z"
                transform="translate(366,49)"/>
      },
      {
        description: "another nut",
        shape:
          <path d="M2.5 74V2H106.5V74H2.5Z"
                transform="translate(50,348)"/>
      },
      {
        description: "another nut",
        shape:
          <path d="M2 91.5V2.5H104V91.5H2Z"
                transform="translate(431,494)"/>
      },
      {
        description: "another nut",
        shape:
          <path d="M2 67.5V2.5H122.5V67.5H2Z"
                transform="translate(162,898)" />
      },
      {
        description: "another nut",
        shape:
          <path d="M2.5 61.5V2.5H71V61.5H2.5Z"
                transform="translate(948,264)"/>
      },
      {
        description: "another nut",
        shape:
          <path d="M2.5 60V2.5H69.5V60H2.5Z"
                transform="translate(881,722)"/>
      },
    ]
  },
}

export default ({...props}) => <FindTheDifference data={data} {...props} />;
