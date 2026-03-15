import "@material-tailwind/react";

declare module "@material-tailwind/react" {
  export interface TypographyProps {
    placeholder?: any;
    onPointerEnterCapture?: any;
    onPointerLeaveCapture?: any;
  }
  export interface ButtonProps {
    placeholder?: any;
    onPointerEnterCapture?: any;
    onPointerLeaveCapture?: any;
  }
  export interface CardProps {
    placeholder?: any;
    onPointerEnterCapture?: any;
    onPointerLeaveCapture?: any;
  }
}