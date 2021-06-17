import React from 'react'
import FindInImage from '../../components/find-in-image'
import * as types from '../../components/find-in-image/types'


export const tips = `
<p>Try to find 20 hints that can point you to the location you see. You can select them by clicking on the image. Hoover over the image to zoom. </p>

<p>Take your time and you will find important clues for determining the <strong>location</strong> and <strong>time</strong>. </p>

<p><strong>Focus on visual elements</strong>: street names, restaurants & shops, cars & license plates, ads, logos, public transport, architecture, antennas, clothing, trees, landscape, lakes, vegetation, animals and weather. </p>

<p><strong>Focus on sounds</strong>: language, church bells, a muezzin calling for prayer, vehicles, trains, an aircraft taking off or a bird’s call.</p>

<p><strong>Tips</strong>: You can download visuals to be able to zoom in and watch a video frame-by-frame.</p>

<p>You could use the Magnifier on InVid and use frame-by-frame viewing in the VLC player on your computer.</p>

`

// currently, the visual representation of this data lives at:
// https://www.figma.com/file/4JO8CeRkvDWflXGdE5y6uh/KID%2FDIGGER-training-frameworks?node-id=117%3A4416
// see svg > example-goerli
// you can copy paste the svgs to get the shape
//  - and then transform/translate them to the X/Y position you should see at the top of
//   - the figma right hand column
const data: types.Data = {
  meta: {
    title: "20 Hints",
    tips,
    description: "Extract 20 pieces of information hinting to the specific location"
  },
  image: {
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/20-hints/20-hints-1_f.jpg",
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
    /* the tree, in the corner */
    /* { description: "the tree, in the corner",
     *   shape:
     *     <path d="M33.5 404L3 2.5H191V482.5L33.5 404Z"
     *           transform="translate(1220, 201.5)"/>
     * }, */
    /* the house, on the corner */
    { description: "the house",
      shape:
        <path d="M3 422V29L73 3.5L230.5 17.5V58.5L413 137.5V428.5L172.5 408L3 422Z"
              transform="translate(1004,652)"/>
    },
    /* the tree, in front of the house */
    { description: "the tree, in front of the house",
      shape:
        <g transform="translate(914, 0)">
          <path d="M341.096 572.465L308 2H512V684L341.096 572.465Z"/>
          <path d="M13.5 1064.5L2 830L69.5 820.5L174 985.5L69.5 1116L13.5 1064.5Z" />
        </g>
    },

    /* the very very large bike path */
    { description: "the very very large bike path",
      shape:
        <path d="M858.5 653L6.5 364L888.5 2.5L985.5 11.5L960.5 96L858.5 653Z"
              transform="translate(37.5, 1190.5)"/>
    },
    /* the train station, itself */
    { description: "the train station, itself",
      shape:
        <path d="M336 320.5H229.5L225.5 183.5L96 136L4 76.5L105 11.5L197.5 3L368 58.5V270.5L336 320.5Z"
              transform="translate(321, 777)"/>
    },
    /* the train lines, coming on in! */
    { description: "the train lines, coming on in!",
      shape:
        <path d="M1.5 161.5V3L543.5 257.5V342L1.5 161.5Z"
              transform="translate(4.5,664)"/>
    },
    /* a little sign on the train lines */
    { description: "a little sign on the train lines",
      shape:
        <path d="M2 54.5L7 2.5L50 19.5V73L2 54.5Z"
              transform="translate(166,801.5)" />
    },
    /* a quaint steeple, up above all! */
    { description: "a quaint steeple, up above all!",
      shape:
        <path d="M2 66.0001L18 8L27.7463 2.71094L35.5 8.00009V27.0001L41 55.0001V79.5001L2 66.0001Z"
              transform="translate(618, 739.71)"/>
    },

    /* just a streetlight */
    { description: "just a streetlight",
      shape:
        <path d="M3 49L20.5 17L127 3V42.5L81.5 58.5L20.5 67L3 49Z"
              transform="translate(1102, 562)"/>
    },

    /* look! a streetsign in front of the house */
    { description: "a streetsign in front of the house",
      shape:
        <path d="M2 67V2H53V67H2Z"
              transform="translate(1185, 949)"/>
    },
    /* a sign to the right */
    { description: "a sign to the right",
      shape:
        <path d="M1.5 78.5L5.5 1.5L33 5.5V73L1.5 78.5Z"
              transform="translate(1144.5, 1161.5)" />
    },
    /* a string of signs on the other road */
    { description: "a string of signs over here",
      shape:
        <g transform="translate(534, 1125)">
          <path d="M2 101.5V16.5L26 4V79L2 101.5Z" />
          <path d="M38 73.5L45 9.5H61L55.5 73.5H38Z" />
          <path d="M138 59L144 9.5L152 4.5L158 25L152 59H138Z" />
          <path d="M196.5 44.5V17H204L208 25L204 49.5L196.5 44.5Z" />
        </g>
    },
    /* a car to the right */
    { description: "a car to the right",
      shape:
        <g transform="translate(5,1129.5)">
          <path d="M128.5 71L4.58594 79.5L9.49994 25L36.4999 12.5L91.9999 4.5L128.5 17.5V71Z" />
          <path d="M1325 394.5L1309 50.5L1421.5 34.5V410.5L1325 394.5Z" />
        </g>
    },
    /* Some people, crossing the street */
    { description: "these people are crossing the street!",
      shape:
        <path d="M1.5 51.5V1.5H129.5V51.5H1.5Z"
              transform="translate(834.5, 1127.5)"/>
    },
    /* a very tiny little sign */
    { description: "a small small sign",
      shape:
        <path d="M2.2433 27C2.0597 22.6944 1.80266 11.6667 2.2433 2H24V27H2.2433Z"
              transform="translate(918, 1080)"/>
    },
    /* a cluster of bikes and cars */
    { description: "a cluster of bikes and of cars",
      shape:
        <path d="M2 2.5V97H197V2.5L8.5 7.5"
              transform="translate(305, 1127.5)" />
    },
    /* a car, all the way to the left */
    /* { description: "a car, which is all the way to the left",
     *   shape:
     *     <path d="M128.5 71L4.58594 79.5L9.49994 25L36.4999 12.5L91.9999 4.5L128.5 17.5V71Z"
     *           transform="translate(5, 1129.5)"/>
     * }, */
    /* Oez Adana Doener Kebap */
    { description: "Oez Adana Doener Kebap",
      shape:
        <path d="M2 30.5V2L89.5 7L133 11L135 37L2 30.5Z"
              transform="translate(73, 1070)"/>
    },
    { description: "Train track light anteannas",
      shape:
        <path d="M2 50V2.5L38 21.5V69L2 50Z"
              transform="translate(802,997.5)" />
    },
    /* a traffic light for trains! */
    { description: "a traffic light for trains!",
      shape:
        <path d="M17 239L2.5 1.5H53.5L36.5 239H17Z"
              transform="translate(114,545.5)"/>
    },
    { description: "a sneaky little sattellite",
      shape:
        <path d="M2 43.5V1.5H41.5V43.5H2Z"
              transform="translate(64,630)"/>
    },
  ]
}

export default ({...props}) => <FindInImage data={data} {...props} />;

