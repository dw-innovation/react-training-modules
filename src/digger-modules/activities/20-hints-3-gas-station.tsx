import React from 'react'
import FindInImage from '../../components/find-in-image'
import * as types from '../../components/find-in-image/types'
import { tips } from './20-hints-1-goerli';

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
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/20-hints/20-hints-4.jpg",
    height: 1365,
    width: 1024,
  },
  shapes: [
    /* { description: "The whole thing",
     *   shape:
     *     <path d="M2 1039.18V2H1022V1093L2 1039.18Z"
     *           transform="translate(4,15)" />
     * }, */
    { description: "gas station bottoms",
      shape:
        <g transform="translate(36, 664)">
          <path d="M780.5 189L413.5 115L471.5 70L803 137.5L780.5 189Z" />
          <path d="M203 58.5L117.5 70L5 47.5L63 12L203 58.5Z"/>
          <path d="M527.5 36L379.5 21.5L404 2.5L571 21.5L527.5 36Z" />
          <path d="M981.5 70L753 47.5L780.5 36L989.5 54L981.5 70Z" />
        </g>
    },
    { description: "somegraffiti in the back",
      shape:
        <path d="M2 19.6749V120.453L422.632 130.066V2L2 14.4034"
              transform="translate(531,550)"/>
    },
    { description: "monstera graffiti in the back",
      shape:
        <path d="M2 238.5L8.5 2H66.5L48.5 238.5H2Z"
              transform="translate(953,476)" />
    },
    { description: "a mysterious black box",
      shape:
        <path d="M4.23077 5.8V59H64V5.8L1 2"
              transform="translate(718,514)"/>
    },
    { description: "a very pretty unicorn",
      shape:
        <path d="M2.31372 85.6119V2.19873H51.5336L58.6055 80.3404L2.31372 85.6119Z"
              transform="translate(708,713)"/>
    },
    { description: "a coca cola bottlecap",
      shape:
        <path d="M7.37458 22.7759L2 5.10088L22.084 2L23.7812 22.7759H7.37458Z"
              transform="translate(580,1216)"/>
    },
    { description: "a blue van",
      shape:
        <path d="M1.5 27V2.5L175 8.5L183.5 20.5L239.5 75V98.5L171.5 111.5L175 35.5L1.5 27Z"
              transform="translate(25.5,562)"/>
    },
    { description: "fence",
      shape:
        <path d="M2 94V2L127 19V78L2 94Z"
              transform="translate(1,584)"/>
    },
    { description: "trees in the summer",
      shape:
        <path d="M2 157.663V2L111.755 23.0859L115.291 90.3746L118.827 157.663H2Z"
              transform="translate(9,398)"/>
    },
    { description: "cool spiral staircase",
      shape:
        <path d="M2 99.3671V2H27.7414V99.3671H2Z"
              transform="translate(201,455)"/>
    },
    { description: "a traffic sign",
      shape:
        <path d="M9.41935 46L2 6.675L25 2V46H9.41935Z"
              transform="translate(252,531)"/>
    },
    { description: "yellow berlin bus",
      shape:
        <path d="M118 81V11.5L4 2.5L61 63L118 81Z"
              transform="translate(205,570.5)"/>
    },
    { description: "the sign of the bus",
      shape:
        <path d="M48.9569 17.8143H2V4.17059L48.9569 2V17.8143Z"
              transform="translate(232,575)"/>
    },
    { description: "a green building",
      shape:
        <path d="M75.8028 126.964L6.22535 139L2 2L82 19.7003L75.8028 126.964Z"
              transform="translate(314,460)"/>
    },
    { description: "a power box on the green building",
      shape:
        <path d="M2 22.1556V2H22.9326V22.1556H2Z"
              transform="translate(327,468)"/>
    },
    { description: "a red flag",
      shape:
        <path d="M2 26.8766V11.0622L27.1757 3V26.8766H2Z"
              transform="translate(329,563)"/>
    },
    { description: "a yellow sign",
      shape:
        <path d="M2 18.7447V2H28.5901V18.7447H2Z"
              transform="translate(357,564)"/>
    },
    { description: "a poller",
      shape:
        <path d="M1.69946 54.236V9.27358V2.1416H15.5602V9.27358V54.236H1.69946Z"
              transform="translate(399,611)"/>
    },
    { description: "a dude sitting, a person",
      shape:
        <path d="M1.5 39.5V2H26V39.5H1.5Z"
              transform="translate(281.5,622)"/>
    },
    { description: "mysterious power boxes",
      shape:
        <g transform="translate(139,333)">
          <path d="M2 183V129H64V183H2Z" />
          <path d="M587 130.518V2L651 13.5666L647.632 139L587 130.518Z" />
        </g>
    },
  ]
}

export default ({...props}) => <FindInImage data={data} {...props} />;

