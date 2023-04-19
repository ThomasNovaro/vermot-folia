export default interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "p" | "label" | "button";
  className?: string;
  children: JSX.Element | string;
}
