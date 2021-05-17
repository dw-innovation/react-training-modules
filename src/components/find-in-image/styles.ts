import React from 'react';
// import * as images from "../../resources/images/index"

export const shape = {
    fill: "rgba(251, 255, 44, 0.61)",
    border: "1px solid #000000",
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
  shape,
  messages,
  message,
  firstMessage,
}
