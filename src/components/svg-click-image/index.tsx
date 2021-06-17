import React from 'react'
import * as types from './types'
import { debounce } from 'lodash'

// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from './styles.css'

// pull the ugly svg props out for now so we don't have to look at them later
const svgProps = { version: "1.1",
                   xmlns: "http://www.w3.org/2000/svg",
                   xmlnsXlink: "http://www.w3.org/1999/xlink" }

/*
 *   This react component maps a bunch of svg shapes over an image, tracks the user's clicks, and does
 *      a success or a fail click for each one of the shapes
 */
type Props = { image: types.Image;
               shapes: types.Shape[];
               successClick?: (s: types.Shape, c: types.Coords) => void;
               failedClick?: (c: types.Coords) => void; }


// The component itself
export const ClickImage = ({ image,
                             shapes,
                             successClick,
                             failedClick }: Props ) => {
  //
  const svgRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [markers, setMarkers] = React.useState([]);

  /* return the relative coordinates of where you clicked in the svg,
            assuming it's size has been changed by the browser window
            ...most of this is copied from stackOverflow somewhere */
  const coords =
    (evt): types.Coords => {
      const svg = svgRef.current // sometimes undefined, sometimes not
      const pt = svg?.createSVGPoint();  // Created once for document
      pt.x = evt.clientX;
      pt.y = evt.clientY;
      // The cursor point, translated into svg coordinates
      var cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse());
      return {
        x: cursorpt.x,
        y: cursorpt.y,
      }
    }

  const failed =
    evt => { evt.preventDefault();
             const c = coords(evt)
             const { x, y } = c
             setMarkers([...markers, { x, y, color: "red" }]);
             // bounce back up to parent
             if (failedClick) failedClick(c); }

  const succeeded =
    (s: types.Shape) =>
      evt => { evt.preventDefault();
               const c = coords(evt);
               const { x, y } = c;
               setMarkers([...markers, { x, y, color: "green" }]);
               if (successClick) successClick(s, c); }

    const Shape =
      (s: types.Shape) =>
        <a href="#"
           className={styles.link}
           onClick={succeeded(s)}>
          <g className={styles.shape}
             opacity={s.visible ? "1" : ".3"}>
            {s.shape}
          </g>
        </a>

  const Shapes = shapes.map(Shape)

  React.useEffect(() => {
    if (!svgRef?.current) return;
    if (!containerRef?.current) return;
    const svgElement = svgRef.current;
    const containerElement = containerRef.current;
    const [,,originalWidth, originalHeight] = svgElement.getAttribute("viewBox").split(" ").map(Number);

    svgElement.addEventListener("mousemove", (event) => {
      const {top, left, width, height} = svgElement.getBoundingClientRect();

      const eventTop = event.clientY - top;
      const eventLeft = event.clientX - left;

      svgElement.setAttribute("viewBox",
      `${(eventLeft / width * originalWidth) - (eventLeft / width * originalWidth / 2)}
       ${(eventTop / height * originalHeight) - (eventTop / height * originalHeight / 2)}
       ${originalWidth / 2}
       ${originalHeight / 2}`)
    });
    containerElement.addEventListener("mouseleave", debounce(() => {
      console.log('mouseoutttt');
      svgElement.setAttribute("viewBox", `0 0 ${originalWidth} ${originalHeight}`);
    }, 300, {trailing: true}));
  }, [])

  const Marker =
    m => <rect x={m.x}
               y={m.y}
               width="10"
               height="10"
               fill={m?.color} />

  return (
    <div ref={containerRef}>
    <svg
      viewBox={`0 0 ${image.width} ${image.height}`}
      ref={svgRef}
      preserveAspectRatio="xMinYMin meet"
      {...svgProps /* include the svg props from up above */}
    >
      <a href="#"
         onClick={failed}
         className="trainingmodulesClickableImageMap">
        <image width={image.width}
               height={image.height}
               href={image.src} />
      </a>
      {Shapes}
      {markers.map(Marker)}
    </svg>
    </div>
  )
}
