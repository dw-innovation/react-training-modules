import React from 'react'
import MediaCount from '../../components/media-count';

export const tips = `
<p>Count all the bubbles you can see. Clustered bubbles count as one.</p>
<p><strong>Focus on</strong> the details, take your time and ask a colleague to look at it as well. Do not just focus on the most visible one.</p>
<p><strong>Tips:</strong> You can download the image to be able to zoom. You could use the <a href="https://www.invid-project.eu/tools-and-services/invid-verification-plugin/" target="_blank">Magnifier on InVid</a> for that.</p>
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
