import React from 'react'
import MediaCount from '../../components/media-count';

const tips = `
<p>Count all the bubbles you can see. Clustered bubbles count as one.</p>
<p><strong>Focus on</strong> the details, take your time and ask a colleague to look at it as well. And do not just focus on the most visible one.</p>
<p><strong>Tips:</strong> Pause the video so that you can skim through the timeline by using < and >.</p>
<p>You can also download the video to watch it frame-by-frame. For example with the VLC player on your computer.</p>
`

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
