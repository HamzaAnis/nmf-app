import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";

import { Font } from "style";

import styles from "./Secondary.styles";
import mainStyle from "../styles";

const PADDING_VERTICAL = 12;

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  fullWidth?: boolean;
  textType: "Primary" | "Secondary";
  black?: boolean;
  onPress: () => void;
}

export default function Secondary(props: Props): React.ReactElement {
  const customStyle = [mainStyle.default, styles.default, props.style];
  const { fullWidth, children, textType, black, onPress } = props;

  if (fullWidth) {
    customStyle.push(mainStyle.fullWidth);
  }

  if (black) {
    customStyle.push(mainStyle.black);
  }

  const additionalStyle = {
    paddingVertical: PADDING_VERTICAL,
    borderRadius: PADDING_VERTICAL * 2 + Font.FontSize[textType],
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      {...props}
      style={[customStyle, additionalStyle]}
    >
      {children}
    </TouchableOpacity>
  );
}

Secondary.displayName = "Secondary";
