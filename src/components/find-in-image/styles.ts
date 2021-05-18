import React from 'react';
// import * as images from "../../resources/images/index"

export const trainingmodulesClickableElements = {
    fill: 'transparent',
    stroke: 'yellow',
    strokeWidth: 5,
} as const;

export const trainingmodulesClickableLink = {
  outline: 0,
} as const;


// @ts-ignore ... CSSProperties does not like "absolute" for some reason
export const messages: React.CSSProperties = {
  position: "fixed",
  left: 0,
  bottom: 0,
  margin: 0,
  padding: 0,
}

export const message = {
  color: "red",
  fontSize: "12px",
  margin: 0,
  opacity: .5,
  padding: 0,
}

export const firstMessage = {
  opacity: 1
}


export const styles = {
  trainingmodulesClickableElements,
  trainingmodulesClickableLink,
  messages,
  message,
  firstMessage,
}
