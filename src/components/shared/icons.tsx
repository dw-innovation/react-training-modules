import React from 'react'
import c from 'classnames';
// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from '../../digger-modules/styles.css';

export const Eye = () =>
  <img src="https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/eye.png" />

export const Ear = () =>
  <img src="https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/ear.png" />

export const Confetti = () =>
  <img src="https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/confetti.png" />

export const Bulb = () =>
  <img src="https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/lightbulb.png" />

export const Twitter = () =>
  <img width="50px" height="50px" style={{margin:".5rem"}} src="https://digger-training-modules-resources.s3.eu-central-1.amazonaws.com/resources/twitter.png" />
