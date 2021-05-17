import React from 'react';
import * as types from './types'

const styles = {
  shape: {
    fill: 'transparent',
    stroke: 'yellow',
    strokeWidth: 5,
  }
}

// pull the ugly svg props out for now so we don't have to look at them later
const svgProps = { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }

/*
 *   This react component maps a bunch of svg shapes over an image, tracks the user's clicks, and does
 *      a success or a fail click for each one of the shapes
 */
type Props = { image: types.ImageData;
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
  const [markers, setMarkers] = React.useState([]);

  /* return the relative coordinates of where you clicked in the svg,
            assuming it's size has been changed by the browser window */
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
    evt => {
      evt.preventDefault();
      const c = coords(evt)
      const { x, y } = c
      setMarkers([...markers, { x, y, color: "red" }]);
      if (failedClick) failedClick(c); // bounce up to parent
    }
  const succeeded =
    (s: types.Shape) =>
      evt => {
        evt.preventDefault();
        const c = coords(evt);
        const { x, y } = c;
        setMarkers([...markers, { x, y, color: "green" }]);
        if (successClick) successClick(s, c); // bounce up to parent
      }

    const Shape =
      (s: types.Shape) =>
        <a href="#" onClick={succeeded(s)}>
          <g className="shape" style={styles.shape} opacity={s.visible ? "1" : ".2"}>
            {s.shape}
          </g>
        </a>

  const Shapes = shapes.map(Shape)

  return (
    <svg
      viewBox={`0 0 ${image.width} ${image.height}`}
      ref={svgRef}
      preserveAspectRatio="xMinYMin meet"
      {...svgProps /* include the svg props from up above */}
    >
      <a href="#" onClick={failed}>
        <image width={image.width}
               height={image.height}
               href={image.src} />
      </a>
      {Shapes}
      {markers.map(m =>
        <rect x={m.x} y={m.y} width="10" height="10" fill={m?.color} />
      )}
    </svg>
  )
}
