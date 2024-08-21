'use client'

import React from 'react';
import { store } from '../lib/stores';
import { Provider } from 'react-redux';

export default function Providers_redux({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
