import React from 'react'
import MediaCount from '../../components/media-count';

const data = {
  meta: {
    title: "Bubble Mix",
    description: "How many bubbles can you count?",
    tips: `Tips : Take your time while observing a visual. Lean back and look around.
          The details in the background can guide you to a) location, b) manipulation by blurred or missing pieces.`,
    solution: 20,
    options: [18, 19, 20, 21, 22, 23]},
  media: {
    type: "image" as const,
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/bubbles/bubble-2.jpg",
  }
}

export default ({...props}) => <MediaCount data={data} {...props} />;
