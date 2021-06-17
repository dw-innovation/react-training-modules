import React from 'react'
import MediaCount from '../../components/media-count';

import {tips} from './bubble-mix-1';

const data = {
  meta: {
    title: "Bubble Mix",
    description: "How many bubbles can you count?",
    tips: tips,
    solution: 20,
    options: [18, 19, 20, 21, 22, 23]},
  media: {
    type: "image" as const,
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/bubbles/bubble-2.jpg",
  }
}

export default ({...props}) => <MediaCount data={data} {...props} />;
