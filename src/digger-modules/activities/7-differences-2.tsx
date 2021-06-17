import React from 'react'
import FindTheDifference from '../../components/find-the-difference'
import * as types from '../../components/find-the-difference/types'

import { tips } from "./7-differences-0";
// currently, the visual representation of this data lives at:
// https://www.figma.com/file/4JO8CeRkvDWflXGdE5y6uh/KID%2FDIGGER-training-frameworks?node-id=117%3A4416
// see svg > example-goerli
// you can copy paste the svgs to get the shape
//  - and then transform/translate them to the X/Y position you should see at the top of
//   - the figma right hand column
const data: types.Data = {
  meta: {
    title: "7 Differences",
    tips,
    description: "Find the 7 differences in the two images"
  },
  image: {
    original: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-2-cat-left_f.jpg",
      height: 1024,
      width: 1024,
    },
    altered: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-2-cat-right_f.jpg",
      height: 1024,
      width: 1024,
    },
    shapes: [
      {
        description: "an intersection at the light",
        shape:
<path d="M2 34V1.5H49V34H2Z" transform="translate(26,201)"/>
      },
       {
        description: "an intersection at the light",
        shape:
<path d="M1.5 30V1.5H17.5V30H1.5Z" transform="translate(575,258)"/>
      },
  {
        description: "an intersection at the light",
        shape:
<path d="M1.5 36.5V1.5H38V36.5H1.5Z" transform="translate(343,449)"/>
      },
      {
        description: "an intersection at the light",
        shape:
<path d="M14.5 35L2.5 17L14.5 2.5L33 17L14.5 35Z" transform="translate(646,449)"/>
      },
  {
        description: "an intersection at the light",
        shape:
<path d="M49 2L4 34.5L30.5 45L57 24.5L104 45H142.5L67 2H49Z" transform="translate(445,647)"/>
      },
  {
        description: "an intersection at the light",
        shape:
<path d="M97.5 22.5L2 12V2H99.5L97.5 22.5Z" transform="translate(616,641)"/>
      },
      {
        description: "an intersection at the light",
        shape:
<path d="M2 34V1.5H34.5L24 34H2Z" transform="translate(958,905)"/>
      },
    ]
  },
}

export default ({...props}) => <FindTheDifference data={data} {...props} />;
