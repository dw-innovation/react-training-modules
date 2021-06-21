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
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-3-nuts-right_f.jpg",
      height: 1024,
      width: 1024,
    },
    altered: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-3-nuts-left_f.jpg",
      height: 1024,
      width: 1024,
    },
    shapes: [
      {
        description: "a nut",
        shape:
<path d="M37.5 66.5L3 23.5L54.5 2.5L76 23.5L37.5 66.5Z" transform="translate(17,3.5)"/>
      },
      {
        description: "a nut",
        shape:
<path d="M24 62.5L2.5 17.5L66.5 2.5L81.5 62.5H24Z" transform="translate(361,39.5)"/>
      },
      {
        description: "a nut",
        shape:
<path d="M85.5 62L2.5 38.5L17 2.5L103 21.5L85.5 62Z" transform="translate(51.5,358.5)"/>
      },
      {
        description: "a nut",
        shape:
<path d="M28.5 81.5L3 1.5H72.5L85 81.5H28.5Z" transform="translate(438,507.5)"/>
      },
      {
        description: "a nut",
        shape:
<path d="M1.5 57.5V13L49 2L66 68.5L1.5 57.5Z" transform="translate(949.5, 262)"/>
      },
      {
        description: "a nut",
        shape:
<path d="M93 63L17.5 50.5L2.5 2L80.5 16.5L93 63Z" transform="translate(167.5,906)"/>
      },
      {
        description: "a nut",
        shape:
<path d="M15.5 64.5L2.5 22L54 2.5L39 64.5H15.5Z" transform="translate(902,730)"/>
      },
    ]
  },
}

export default ({...props}) => <FindTheDifference data={data} {...props} />;
