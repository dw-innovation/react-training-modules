import React from 'react'
import MediaCount from '../../components/media-count';

const data = {
  meta: {
    title: "Bubble Mix",
    description: "some things here",
    solution: 6,
    options: [1, 2, 3, 4, 5, 6, 7, 8] },
  media: {
    type: "image" as const,
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/bubbles/bubble-1.jpg",
  }
}

export default ({...props}) => <MediaCount data={data} {...props} />;
