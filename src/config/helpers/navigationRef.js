import {createNavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = createNavigationContainerRef();

export function navNavigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    console.log('why ??');
  }
}
export function navGoback() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  } else {
    console.log('why ??');
  }
}
