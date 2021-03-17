import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store, history, persistor } from "./redux/store";
import AppRouter from "./AppRouter";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter history={history} />
      </PersistGate>
    </Provider>
  );
}

export default App;
