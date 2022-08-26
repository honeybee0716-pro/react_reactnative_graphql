import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconBold: React.FC<MyProps> = ({ color = '#323232' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.8021 8.35834C11.1489 8.14714 11.4416 7.85784 11.6568 7.5135C11.8721 7.16916 12.0038 6.7793 12.0417 6.37501C12.0483 6.00942 11.9828 5.64613 11.8489 5.30587C11.715 4.96561 11.5155 4.65506 11.2616 4.39195C11.0076 4.12884 10.7044 3.91832 10.3691 3.77243C10.0339 3.62654 9.67312 3.54813 9.30753 3.54167H4.71045V13.4583H9.66878C10.0167 13.4546 10.3604 13.3824 10.6804 13.2459C11.0004 13.1093 11.2904 12.9111 11.5338 12.6624C11.7771 12.4138 11.9692 12.1197 12.0988 11.7968C12.2285 11.474 12.2934 11.1287 12.2896 10.7808V10.6958C12.2899 10.205 12.15 9.72437 11.8865 9.31031C11.623 8.89624 11.2468 8.56598 10.8021 8.35834ZM6.12712 4.95834H9.10212C9.40399 4.949 9.7015 5.03221 9.95472 5.1968C10.2079 5.3614 10.4048 5.5995 10.5188 5.87917C10.6342 6.25302 10.5968 6.65734 10.415 7.00376C10.2332 7.35018 9.92159 7.61054 9.54837 7.72792C9.40343 7.7704 9.25315 7.79187 9.10212 7.79167H6.12712V4.95834ZM9.38545 12.0417H6.12712V9.20834H9.38545C9.68732 9.199 9.98483 9.28221 10.2381 9.4468C10.4913 9.6114 10.6881 9.8495 10.8021 10.1292C10.9175 10.503 10.8802 10.9073 10.6983 11.2538C10.5165 11.6002 10.2049 11.8605 9.8317 11.9779C9.68676 12.0204 9.53648 12.0419 9.38545 12.0417Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconBold