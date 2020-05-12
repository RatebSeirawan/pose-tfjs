import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

import {Colors, stylesComposer} from 'Theme';

const styles = StyleSheet.create({
  default: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#fff',
  },
  header: {
    fontWeight: '900',
    fontSize: 32,
    lineHeight: 32,
  },
  caption: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'normal',
  },
  grey: {
    color: Colors.lightGrey,
  },
});

const Text = ({style, children, className, ...rest}) => {
  return (
    <RNText
      style={StyleSheet.flatten([
        styles.default,
        stylesComposer(className, styles),
        style,
      ])}
      {...rest}>
      {children}
    </RNText>
  );
};

export {Text, Text as default};
