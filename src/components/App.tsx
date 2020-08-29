import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import Routes from "../routes";
import { appStore } from "../stores";

const App: React.FC = () => {
  useEffect(() => {
    appStore.authStore.loadCurrentUser();
  }, []);

  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
