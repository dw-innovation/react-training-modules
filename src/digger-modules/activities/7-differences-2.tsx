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
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-2-cat-left.jpg",
      height: 1524,
      width: 1024,
    },
    altered: {
      src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/7-differences/7-differences-2-cat-right.jpg",
      height: 1406,
      width: 1024,
    },
    shapes: [
      {
        description: "an intersection at the light",
        shape:
          <path d="M2.04639 11.5283L23.0847 34.7918L46.5505 23.2612L39.4703 3.23438L7.91284 11.5283"
                transform="translate(57,197)"/>
      },
      {
        description: "a lightbulb",
        shape:
          <path d="M20.6342 8.47119L26.5 28.2958L20.6342 37.5H8L4.24854 28.2958L2.5 12.5L8 2.5H19.5L20.6342 8.47119Z"
                transform="translate(569,253)"/>
      },
      {
        description: "a piece of eye",
        shape:
          <path d="M2.5 16L18 3.5L41 11.5V27L25.5 32.5H2.5V16Z"
                transform="translate(355,430)"/>
      },
      {
        description: "another piece of eye",
        shape:
          <path d="M15.5356 28.6407L2.58887 16.9078L5.01638 11.2437L15.5356 2.94971L28.4823 16.9078L15.5356 28.6407Z"
                transform="translate(634,436)"/>
      },
      {
        description: "mousetache!!",
        shape:
          <path d="M38.3203 2.77539L4.5376 29.6802L25.5759 35.5466L58.3472 14.5083L95.5688 35.5466L126.115 29.6802L58.3472 2.77539H38.3203Z"
                transform="translate(453,615)"/>
      },
      {
        description: "whisker",
        shape:
          <path d="M98.4785 19.8557L2.59229 12.7755V2.25635H98.4785V19.8557Z"
                transform="translate(599,605)"/>
      },
      {
        description: "i missing an eye",
        shape:
          <path d="M4.5 38.5L12 11L29.5 3.5L58 21L46 38.5L29.5 51L4.5 38.5Z"
                transform="translate(911,839)"/>
      },
    ]
  },
}

export default ({...props}) => <FindTheDifference data={data} {...props} />;
