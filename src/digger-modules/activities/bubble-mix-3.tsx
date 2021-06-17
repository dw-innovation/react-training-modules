import React from 'react'
import MediaCount from '../../components/media-count';

import {tips} from './bubble-mix-1';

const data = {
  meta: {
    title: "Bubble Mix",
    description: "How many bubbles can you count?",
    tips: tips,
    solution: 26,
    options: [23, 24, 25, 26, 27, 28]},
  media: {
    type: "video" as const,
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/bubbles/bubble-3-final.mp4"
  }
}

export default ({...props}) => <MediaCount data={data} {...props} />;
