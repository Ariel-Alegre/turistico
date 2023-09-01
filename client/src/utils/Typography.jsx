import { Box } from "@mui/material";
import clsx from "clsx";

const StyledBox = ({ textTransformStyle, ellipsis }) => (
  <Box
    sx={{
      textTransform: textTransformStyle || "none",
      whiteSpace: ellipsis ? "nowrap" : "normal",
      overflow: ellipsis ? "hidden" : "",
      textOverflow: ellipsis ? "ellipsis" : "",
    }}
  />
);

const Header = ({ children, className, ellipsis, textTransform, ...props }) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="h1"
    mb={0}
    mt={0}
    fontSize="28px"
    fontWeight="600"
    lineHeight="1.5"
    {...props}
  >
    {children}
  </StyledBox>
);

const H2 = ({ children, className, ellipsis, textTransform, ...props }) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="h2"
    mb={0}
    mt={0}
    fontSize="24px"
    fontWeight="600"
    lineHeight="1.5"
    {...props}
  >
    {children}
  </StyledBox>
);

const H3 = ({ children, className, ellipsis, textTransform, ...props }) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="h3"
    mb={0}
    mt={0}
    fontSize="18px"
    fontWeight="600"
    lineHeight="1.5"
    {...props}
  >
    {children}
  </StyledBox>
);

const H4 = ({ children, className, ellipsis, textTransform, ...props }) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="h4"
    mb={0}
    mt={0}
    fontSize="16px"
    fontWeight="500"
    lineHeight="1.5"
    {...props}
  >
    {children}
  </StyledBox>
);

const H5 = ({ children, className, ellipsis, textTransform, ...props }) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="h5"
    mb={0}
    mt={0}
    fontSize="14px"
    fontWeight="600"
    lineHeight="1.5"
    {...props}
  >
    {children}
  </StyledBox>
);

const H6 = ({ children, className, ellipsis, textTransform, ...props }) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="h6"
    mb={0}
    mt={0}
    fontSize="13px"
    fontWeight="600"
    lineHeight="1.5"
    {...props}
  >
    {children}
  </StyledBox>
);

const Paragraph = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="p"
    mb={0}
    mt={0}
    fontSize="14px"
    {...props}
  >
    {children}
  </StyledBox>
);

const Small = ({ children, className, ellipsis, textTransform, ...props }) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="small"
    fontSize="12px"
    fontWeight="500"
    lineHeight="1.5"
    {...props}
  >
    {children}
  </StyledBox>
);

const Span = ({ children, className, ellipsis, textTransform, ...props }) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="span"
    lineHeight="1.5"
    {...props}
  >
    {children}
  </StyledBox>
);

const Tiny = ({ children, className, ellipsis, textTransform, ...props }) => (
  <StyledBox
    textTransformStyle={textTransform}
    ellipsis={ellipsis}
    className={clsx({ [className || ""]: true })}
    component="small"
    fontSize="11px"
    lineHeight="1.5"
    {...props}
  >
    {children}
  </StyledBox>
);

export { H2, H3, H4, H5, H6, Header, Paragraph, Small, Span, Tiny };
