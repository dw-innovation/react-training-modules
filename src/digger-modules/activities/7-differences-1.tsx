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
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-1-pen-left.jpg",
      height: 1365,
      width: 1024,
    },
    altered: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-1-pen-right.jpg",
      height: 1365,
      width: 1024,
    },
    shapes: [
      {
        description: "the blue pen on the right",
        shape:
          <path d="M282.979 7.77246L17.6667 269.529L7 283.751L58.6402 342.503L347.148 77.3598L282.979 7.77246Z"
                transform="translate(0,262)" />
      },
      {
        description: "a paperclip",
        shape:
          <path d="M6.77246 62.45L31.6613 5.56104H63.6613L31.6613 76.6722L6.77246 62.45Z"
                transform="translate(293, 524)"/>
      },
      {
        description: "a paperclip under a pen",
        shape:
          <path d="M27.5241 111.18L6.02148 22.1216L27.5241 7.89941L77.3019 95.0952L27.5241 111.18Z"
                transform="translate(300, 750)"/>
      },
      {
        description: "a purple pen",
        shape:
          <path d="M6 581.847L70 5H105.725L68.3069 293.423L30.8889 581.847H6Z"
                transform="translate(555,439)"/>
      },
      {
        description: "another missing paperclip",
        shape:
          <path d="M6 70L15.673 7L54 19.4973L38.6692 70H6Z"
                transform="translate(720,696)" />
      },
      {
        description: "a red pen",
        shape:
          <path d="M96.6454 5.05811H73.4496L5.89404 484.042H41.4496L96.6454 5.05811Z"
                transform="translate(739,473)"/>
      },
      {
        description: "an additional clip",
        shape:
          <path d="M5.75684 20.0372V53.8997L107.175 34.4287L96.5082 5.81494L16.4235 20.0372"
                transform="translate(837,766)"/>
      },
    ]
  },
}

export default ({...props}) => <FindTheDifference data={data} {...props} />;
