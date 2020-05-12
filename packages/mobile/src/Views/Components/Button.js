import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, stylesComposer} from 'Theme';

const styles = StyleSheet.create({
  default: {
    backgroundColor: Colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    marginBottom: 12,
    width: '100%',

    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowColor: 'rgba(88, 88, 183, 0.2)',
    elevation: 1,
  },
  outline: {
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 12,
    width: '100%',

    borderColor: Colors.primary,
    borderWidth: 2.4,
  },
  text: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 28,
    width: '100%',
  },
});

const Button = ({children, style, onPress, className, mode = 'default'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([
        styles[mode],
        stylesComposer(className, styles),
        style,
      ])}
      activeOpacity={0.7}>
      {children}
    </TouchableOpacity>
  );
};

export {Button, Button as default};
