import React from 'react'
import MediaCount from '../../components/media-count';

export const tips = `
<p>Count all the bubbles you can see. Clustered bubbles count as one.</p>
<p><strong>Focus on</strong> the details, take your time and ask a colleague to look at it as well. And do not just focus on the most visible one.</p>
<p><strong>Tips:</strong> You can download visuals to be able to zoom in and watch a video frame-by-frame. </p>
<p>You could use the Magnifier on InVid and use frame-by-frame viewing in the VLC player on your computer.</p>
`

const data = {
  meta: {
    title: "Bubble Mix",
    description: "How many bubbles can you count?",
    tips: tips,
    solution: 5,
    options: [3, 4, 5, 6, 7, 8] },
  media: {
    type: "image" as const,
    src: "https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/bubbles/bubble-1.jpg",
  }
}

export default ({...props}) => <MediaCount data={data} {...props} />;
