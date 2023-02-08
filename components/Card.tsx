import type { DetailedHTMLProps, HTMLAttributes } from "react";

function Card(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
    <div className={"bg-white rounded-lg " + props.className}>
      {props.children}
    </div>
  );
}

export default Card;
