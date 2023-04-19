import { FC } from "react";
import HeroProps from "./index.types";
import Typography from "@atoms/Typography";

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div>
      <Typography variant="h1" className="text-center font-black text-black">
        Vermut Folìa
      </Typography>
    </div>
  );
};

export default Hero;
