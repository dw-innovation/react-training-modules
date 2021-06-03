import React from 'react'
import FindInImage from '../../components/find-in-image'
import * as types from '../../components/find-in-image/types'

// currently, the visual representation of this data lives at:
// https://www.figma.com/file/4JO8CeRkvDWflXGdE5y6uh/KID%2FDIGGER-training-frameworks?node-id=117%3A4416
// see svg > example-goerli
// you can copy paste the svgs to get the shape
//  - and then transform/translate them to the X/Y position you should see at the top of
//   - the figma right hand column
const data: types.Data = {
  meta: {
    title: "20 Hints",
    description: "Extract 20 pieces of information hinting to the specific location"
  },
  image: {
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/20-hints/20-hints-2.jpg",
    height: 1898,
    width: 1424,
  },
  shapes: [
    /* the clouds in the sky */
    { description: "the beautiful clouds in the sky!",
      shape:
        <path d="M312.5 4H1132L1154.5 419L992 477.5L920.5 686H839.5L852 854L783.5 876.5L674 726.5V625L536.5 642.5L333 665.5L226 625L267 477.5L5 391L48 4H312.5Z"
              transform="translate(43, 88)" />
    },
  ]
}

export default ({...props}) => <FindInImage data={data} {...props} />;

