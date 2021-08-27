import React from 'react'
import styled from 'styled-components'

import { Colors } from '../../lib/style-guide'
import { classNames } from '../../lib/classnames'
import { randomClassName } from '../../lib/rcn'

const rcn = randomClassName()

const Spinner: FC = ({ className }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 236 267"
    className={className}
  >
    <style type="text/css"></style>
    <g>
      <g>
        <defs>
          <path
            id="SVGID_1_"
            d="M120.9,1.3c0.9-1.6,3.1-1.6,4,0l110.4,191.3c0.9,1.6-0.2,3.5-2,3.5h-14.1c-1.3,0-2.4-0.7-3-1.8L123.9,34.6c-0.4-0.8-1.6-0.8-2,0l-8.4,14.6c-0.4,0.7-0.4,1.6,0,2.3l101.6,176.2c0.9,1.6-0.2,3.5-2,3.5h-54.5c-1.2,0-2.4-0.7-3-1.7L83.4,104.7c-0.5-0.8-1.6-0.8-2,0L73,119.1c-0.4,0.7-0.4,1.6,0,2.3l81.6,141.2c0.9,1.6-0.2,3.5-2,3.5H97.7c-1.3,0-2.4-0.7-3-1.8l-51.3-90c-0.4-0.8-1.6-0.8-2,0l-11.4,20.1c-0.6,1-0.6,2.3,0,3.4l6.7,12.4c0.8,1.6-0.3,3.4-2.1,3.4H2.8c-1.8,0-2.9-1.9-2-3.5l39.5-69.3c0.9-1.6,3.2-1.6,4.1,0l60.8,106.6c0.4,0.7,1.2,1.2,2,1.2h17.1c0.9,0,1.5-1,1-1.8L53.2,122.1c-0.6-1.1-0.6-2.4,0-3.5l27.1-47.2c0.9-1.6,3.1-1.6,4,0l82,141.6c0.2,0.4,0.6,0.6,1,0.6h17.5c0.9,0,1.5-1,1-1.8L93.6,52.1c-0.6-1.1-0.6-2.4,0-3.5L120.9,1.3z"
          />
        </defs>
        <clipPath id="SVGID_2_">
          <use href="#SVGID_1_" style={{ overflow: 'visible' }} />
        </clipPath>
      </g>
      <g className={classNames(rcn('st0'), rcn('stripes'))}>
        <polyline
          className={rcn('st1')}
          opacity=".33"
          points="40.3,206.7 5.3,206.7 18,198.7 42.3,151.7 42.3,148 50,169.3 102,261.3 104.3,256.7 146,256.7 
	    148,262.7 134.7,247.7 61.7,119.7 84.3,81.3 82,77.3 89.3,95 159,218.3 160.7,222.7 204.7,222 207.3,222 207.7,226 198.3,215.7 
	    102.7,51.7 101.3,49.3 103.7,49.7 125.3,7.7 125.3,21 161,82 230.7,202 "
        />
        <polyline
          className={rcn('st1')}
          opacity=".66"
          points="40.3,206.7 5.3,206.7 18,198.7 42.3,151.7 42.3,148 50,169.3 102,261.3 104.3,256.7 146,256.7 
	    148,262.7 134.7,247.7 61.7,119.7 84.3,81.3 82,77.3 89.3,95 159,218.3 160.7,222.7 204.7,222 207.3,222 207.7,226 198.3,215.7 
	    102.7,51.7 101.3,49.3 103.7,49.7 125.3,7.7 125.3,21 161,82 230.7,202 "
        />
        <polyline
          className={rcn('st1')}
          points="40.3,206.7 5.3,206.7 18,198.7 42.3,151.7 42.3,148 50,169.3 102,261.3 104.3,256.7 146,256.7 
	    148,262.7 134.7,247.7 61.7,119.7 84.3,81.3 82,77.3 89.3,95 159,218.3 160.7,222.7 204.7,222 207.3,222 207.7,226 198.3,215.7 
	    102.7,51.7 101.3,49.3 103.7,49.7 125.3,7.7 125.3,21 161,82 230.7,202 "
        />
      </g>
    </g>
  </svg>
)

const StyledSpinner = styled(Spinner)`
  width: 40px;
  height: 40px;
  align-self: center;
  margin: 0 auto;

  .${rcn('st0')} {
    clip-path: url(#SVGID_2_);
  }

  .${rcn('st1')} {
    fill: none;
    stroke: ${Colors.AccordBlue};
    stroke-width: 19;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  svg {
    max-width: 236px;
    margin: 0 auto;
  }

  @keyframes offset {
    100% {
      stroke-dashoffset: -1200;
    }
  }

  .${rcn('stripes')} polyline:nth-of-type(1) {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: offset 500ms linear infinite;
  }

  .${rcn('stripes')} polyline:nth-of-type(2) {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: offset 2.5s 0.1s linear infinite;
  }

  .${rcn('stripes')} polyline:nth-of-type(3) {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: offset 2.5s 0.2s linear infinite;
  }
`

export { StyledSpinner as Spinner }
