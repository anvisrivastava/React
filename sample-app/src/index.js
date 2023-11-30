

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"

const el = document.getElementById('root');
// const root =ReactDOM.createRoot(el);
ReactDOM.createRoot(el).render(<App/>)

// function App(){
//     return <input style ={{border: "5px solid green"}} type ="number" min="0" max="10" />
// }

// root.render(<App />);
