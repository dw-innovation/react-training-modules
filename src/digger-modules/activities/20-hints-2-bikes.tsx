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
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/20-hints/20-hints-2.jpg",
    height: 1365,
    width: 1024,
  },
  shapes: [
    /* the clouds in the sky */
    { description: "the beautiful clouds in the sky!",
      shape:
        <path d="M955.5 270.5L734 473L560.5 607.5L312.5 590.5L29.5 343L2.5 60.5V3L955.5 21.5V270.5Z"
              transform="translate(33,4)"/>
    },
    { description: "a crane",
      shape:
        <path d="M2 65V34L264 3V53.5L2 65Z"
              transform="translate(476,546)"/>
    },
    { description: "subway entrance",
      shape:
        <path d="M2 443.5V4L160.5 85.5L147 383L2 443.5Z"
              transform="translate(2,502)"/>
    },
    { description: "subway sign",
      shape:
        <path d="M2 44.5V4L96.5 44.5V85.5L2 44.5Z"
              transform="translate(46,532)"/>
    },
    { description: "office building left",
      shape:
        <path d="M2.5 78V4L128 78L111.5 103.5L2.5 78Z"
              transform="translate(234,623)"/>
    },
    { description: "a truck",
      shape:
        <g transform="translate(190,748)">
          <path d="M2 72V13H91V72H2Z" />
          <path d="M531.5 47.5L550.5 23.5H597.5V58.5H541L531.5 47.5Z" />
          <path d="M456.5 3H425.5H410V47.5H448.5L464 40.5L456.5 3Z" />
        </g>
    },
    { description: "a guy on a bench",
      shape:
        <path d="M59 50H3L10 15L22 3L52.5 8L59 50Z"
              transform="translate(242,795)"/>
    },
    { description: "poles",
      shape:
        <g transform="translate(312,634)">
          <path d="M2 167V89H17V167H2Z" />
          <path d="M83.5 157.5V118H87V157.5H83.5Z"/>
          <path d="M109.5 157.5V125.5L115 127V157.5H109.5Z" />
          <path d="M124 155V128.5H127.5V155H124Z"/>
          <path d="M133 152.5V131H135.5V152.5H133Z" />
          <path d="M350 175L346 97L350 93L357 172L350 175Z"/>
          <path d="M276 157.5L272 115.5H269.5L272 157.5H276Z" />
          <path d="M709 167L676 2H688.5L709 118V167Z"/>
        </g>
    },
    { description: "Bike shelters",
      shape:
        <g transform="translate(38,794)">
          <path d="M363 2.5L2 138.5V306.5L112.5 420.5L391 56.5L403.5 24.5L363 2.5Z"/>
          <path d="M558.5 67.5V33.5L585 14L665.5 24.5L979.5 110V392L558.5 67.5Z" />
        </g>
    },
    { description: "Some trees",
      shape:
        <g transform="translate(494,648)">
          <path d="M327 63V2.5L466.5 13L429 144.5L413.5 137V109.5L327 63Z" />
          <path d="M12.6957 141L2 25.4932L125 14L113.636 136.403L12.6957 141Z" />
          <path d="M195 40.5L154 61L146.5 91H175.5L195 109L230 61L195 40.5Z" />
          <path d="M304.5 61L273 32H262L236 43L230 78L262 109L288.5 98.5L304.5 61Z" />
        </g>
    },
    { description: "brandenburger tor",
      shape:
        <path d="M2 36V2H22V36H2Z"
              transform="translate(474,746)"/>
    },
    /* { description: "an old building",
     *   shape:
     *     <path d="M8.5 46.5L2 12.5L29 3V56L8.5 46.5Z"
     *           transform="translate(598,669)" />
     * }, */
    { description: "an trash can?",
      shape:
        <path d="M1.5 31.5V1.5H24.5V31.5H1.5Z"
              transform="translate(692,752)"/>
    },
    { description: "an taxi",
      shape:
        <path d="M2.5 38.5V2.5H93V38.5H2.5Z"
              transform="translate(790, 772)" />
    },
    { description: "storefront",
      shape:
        <path d="M13.8791 83L2 12.0588L39.1868 2L49 83H13.8791Z"
              transform="translate(949,706)" />
    },
    { description: "bike>",
      shape:
        <path d="M30 29V3L2 11.5V29H30Z"
              transform="translate(980,774)"/>
    },
    { description: "street",
      shape:
        <path d="M258.5 53L61 22.5L0.5 7L117.5 9L129.5 2.5L246 7L258.5 53Z"
              transform="translate(763,807)"/>
    },
    { description: "antannea",
      shape:
        <path d="M2.5 20.5V2.5H48.5V20.5H2.5Z"
              transform="translate(358,704)"/>
    },
    { description: "trash can",
      shape:
        <path d="M2 29.5V2.5H31.5V29.5H2Z"
              transform="translate(684,788)"/>
    },
    { description: "restaurant sign",
      shape:
<path d="M2.5 26V5.5V2H19.5L28.5 26H2.5Z"
      transform="translate(915,769)"/>
    },
    { description: "park benches",
      shape:
        <g transform="translate(301,805)">
          <path d="M13.5 25L3 2H22.25H41.5V25H13.5Z" />
          <path d="M448.5 42L455 9.5H448.5L408.5 2L393 31.5L448.5 42Z" />
        </g>
    },
  ]
}

export default ({...props}) => <FindInImage data={data} {...props} />;

