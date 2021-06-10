import React, { useEffect, useRef, useState } from "react";
import { delay } from "lodash/fp";

// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from './styles.css'

import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = ref => ({
  container: ref,
  waveColor: "#666",
  progressColor: "#000",
  cursorColor: "transparent",
  barWidth: 3,
  barRadius: 3,
  responsive: false,
  height: 80,
  /* xhr: { // cache: 'default',
   *                 mode: 'no-cors',
   *                 method: 'GET',
   *                 // credentials: 'same-origin',
   *                 redirect: 'follow',
   *                 referrer: 'client' }, */
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true
});

export default function Waveform({ url, redraw }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [rerenderCount, setRerender] = useState(0);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    console.log("loadiiinnnggggg")
    console.log(url)

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function() {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      // setPlay(true);

      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);

        console.log("readddyyyyyyyy")
        wavesurfer.current.drawBuffer();
        delay(2000, setRerender(rerenderCount + 1));
      }
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url, redraw]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  const onVolumeChange = e => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <div className={styles.waveback}>
      <div className={styles.controls}>
        <button className={styles.playButton} onClick={handlePlayPause}>▶</button>
      </div>
      <div className={styles.waveformback}>
        <div id="waveform" ref={waveformRef} />
      </div>
    </div>
  );
}
/* <input
 *   type="range"
 *   id="volume"
 *   name="volume"
 *   // waveSurfer recognize value of `0` same as `1`
 *   //  so we need to set some zero-ish value for silence
 *   min="0.01"
 *   max="1"
 *   step=".025"
 *   onChange={onVolumeChange}
 *   defaultValue={volume}
 * /> */
