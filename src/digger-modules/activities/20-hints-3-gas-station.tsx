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
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/20-hints/20-hints-3_f.jpg",
    height: 1365,
    width: 1024,
  },
  shapes: [
    { description: "The whole thing",
      shape:
        <path d="M5.67737 529.107V5.79224H1007.9V556.263L5.67737 529.107Z"
              transform="translate(3,219)"/>
    },
    { description: "Graffitti",
      shape:
        <path d="M5 23.6749V124.453L425.632 134.066V6L5 18.4034"
              transform="translate(531,550)"/>
    },
    { description: "Trees, time of year",
      shape:
        <path d="M6 163.663V8L115.755 29.0859L119.291 96.3746L122.827 163.663H6Z"
              transform="translate(9,398)"/>
    },
    { description: "fence",
      shape:
        <path d="M6 101.576V7L402.871 18.7833V84.8316L6 101.576Z"
              transform="translate(21,578)"/>
    },
    { description: "van",
      shape:
        <path d="M11.2155 102.29L6.40662 6.78296L189.708 18.2562L252.506 108.491L11.2155 102.29Z"
              transform="translate(16, 549)"/>
    },
    { description: "electric box 1",
      shape:
        <path d="M6 82V6H75V82H6Z"
              transform="translate(137,448)"/>
    },
    { description: "metal staircase 1",
      shape:
        <path d="M6 103.367V6H31.7414V103.367H6Z"
              transform="translate(201,455)"/>
    },
    { description: "sign 1",
      shape:
        <path d="M10.4194 47L3 7.675L26 3V47H10.4194Z"
              transform="translate(252,531)"/>
    },
    { description: "sign 2",
      shape:
        <path d="M48.9569 18.8143H2V5.17059L48.9569 3V18.8143Z"
              transform="translate(232,575)"/>
    },
    { description: "boxy green building",
      shape:
        <path d="M80.8028 132.964L11.2254 145L7 8L87 25.7003L80.8028 132.964Z"
              transform="translate(314,460)"/>
    },
    { description: "sign 3",
      shape:
        <path d="M2 22.1556V2H22.9326V22.1556H2Z"
              transform="translate(327,468)"/>
    },
    { description: "sign 4",
      shape:
        <path d="M2 26.8766V11.0622L27.1757 3V26.8766H2Z"
              transform="translate(329,563)"/>
    },
    { description: "sign 5",
      shape:
        <path d="M2 18.7447V2H28.5901V18.7447H2Z"
              transform="translate(357,564)"/>
    },
    { description: "sign 6",
      shape:
        <path d="M2 14V2H17V14H2Z"
              transform="translate(396,583)"/>
    },
    { description: "poller",
      shape:
        <path d="M6.69946 58.236V13.2736V6.1416H20.5602V13.2736V58.236H6.69946Z"
              transform="translate(399,611)" />
    },
    { description: "electric box 2",
      shape:
        <path d="M8 138.518V10L72 21.5666L68.6316 147L8 138.518Z"
              transform="translate(724,333)"/>
    },
    { description: "trash can",
      shape:
        <path d="M48.9967 56.234V6H6V56.234H48.9967Z"
              transform="translate(910,421)"/>
    },
    { description: "another random black box",
      shape:
        <path d="M4.23077 5.8V59H64V5.8L1 2"
              transform="translate(718,514)"/>
    },
    { description: "a cute unicorn",
      shape:
        <path d="M2.31372 85.6119V2.19873H51.5336L58.6055 80.3404L2.31372 85.6119Z"
              transform="translate(708,713)"/>
    },
    { description: "bottle cap",
      shape:
        <path d="M16.3746 30.7759L11 13.1009L31.084 10L32.7812 30.7759H16.3746Z"
              transform="translate(570,1206)"/>
    },
  ]
}

export default ({...props}) => <FindInImage data={data} {...props} />;

