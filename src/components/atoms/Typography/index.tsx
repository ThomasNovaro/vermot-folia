import { FC } from "react";
import TypographyProps from "./index.types";
import classNames from "classnames";

const Typography: FC<TypographyProps> = ({ children, variant, className }) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={classNames("text-white text-3xl", className ?? "")}>
          {children}
        </h1>
      );
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "p":
      return <p>{children}</p>;
    case "label":
      return <label>{children}</label>;
    case "button":
      return <label>{children}</label>;
  }
};

export default Typography;
