import React from "react";
import Logo from "./static/images/logo.png";

console.log(Logo)

const App = () => (
    <div>
        <h1>Hello world!</h1>
        <img src={Logo} />
    </div>
);

export default App