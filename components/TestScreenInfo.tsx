import React from "react";
import { StyleSheet } from "react-native";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";

export default function TestScreenInfo({ path }: { path: string }) {
  return (
    <View style={styles.getStartedContainer}>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,30,0,0.8)"
        darkColor="rgba(230,255,230,0.8)"
      >
        Test screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    // alignItems: "center",
    // marginHorizontal: 50,
    // paddingVertical: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    // textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
