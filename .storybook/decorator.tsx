import { DecoratorFn } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from '../src/store';


export const withStore: DecoratorFn = (StoryFn) => {
    return (
        <Provider store={store}>
            <StoryFn />
        </Provider>
    )
}

export const globalDecorators = [ 
    withStore,
  ]