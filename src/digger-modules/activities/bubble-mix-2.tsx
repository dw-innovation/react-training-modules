import React from 'react'
import MediaCount from '../../components/media-count';

const data = {
  meta: {
    title: "Bubble Mix",
    description: "some things here",
    solution: 20,
    options: [15, 16, 17, 18, 19, 20, 21, 22, 23]},
  media: {
    type: "image" as const,
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/bubbles/bubble-2.jpg",
  }
}

export default ({...props}) => <MediaCount data={data} {...props} />;
