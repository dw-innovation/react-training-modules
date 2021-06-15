import React from 'react'
import MediaCount from '../../components/media-count';

const data = {
  meta: {
    title: "Bubble Mix",
    description: "How many bubbles can you count?",
    tips: "Technical tip on video : Frame-by-Frame with VLC and slow down the speed!",
    solution: 99,
    options: [95, 96, 97, 98, 99, 100,]},
  media: {
    type: "video" as const,
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/bubbles/bubble-3.mp4"
  }
}

export default ({...props}) => <MediaCount data={data} {...props} />;
