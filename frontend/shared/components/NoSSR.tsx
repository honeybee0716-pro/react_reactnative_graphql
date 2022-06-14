import dynamic from "next/dynamic";
import { FC } from "react";

const InsideNoSSR: FC = props => (
  <>{props.children}</>
)

const NoSSR = dynamic(() => Promise.resolve(InsideNoSSR), {
  ssr: false
})

export default NoSSR