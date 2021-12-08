import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/root-store'
import RootNavigate, { navigationRef } from './src/navigation/root-navigation'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <RootNavigate />
        </NavigationContainer>
      </Provider>
    )
  }
}
