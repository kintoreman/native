import React from 'react';
import {AppNavigator} from "./navigation/AppNavigator";
import {Provider} from "react-redux";
import store from "./store";


export default App = () => {
  return (
          <Provider store={store}>
            <AppNavigator />
          </Provider>
  );
}

//JSXやJSで数式を書くときに{}でかくルールがある
//デフォルトでテキストはcolumになっているため縦になってる
