/* import React from "react"; */
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
/* import { persistor } from "./redux/store/store.js"; */
/* import { PersistGate } from "redux-persist/integration/react"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <App />
        {/*   </PersistGate> */}
    </Provider>
);
