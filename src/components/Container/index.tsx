import React, { FC } from "react";
import { Layout } from "@ui-kitten/components";
import styled from "styled-components";
import {
  background,
  border,
  compose,
  color,
  flexbox,
  layout,
  space,
} from "styled-system";
import type { CustomViewProps } from "./container.types";

const CustomView: FC<CustomViewProps> = (props) => <Layout {...props} />;

export default styled(CustomView)(
  compose(background, border, color, flexbox, layout, space)
);
