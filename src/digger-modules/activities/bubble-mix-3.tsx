import React from 'react'
import MediaCount from '../../components/media-count';

const data = {
  meta: {
    title: "Bubble Mix",
    description: "some things here",
    solution: 99,
    options: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102]},
  media: {
    type: "video" as const,
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/bubbles/bubble-3.mp4"
  }
}

export default ({...props}) => <MediaCount data={data} {...props} />;
