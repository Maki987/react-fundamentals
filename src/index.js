import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Greeting() {
  return (
    <div>
      <Person />
      <Messagge />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

// function Greeting() {
//   return (
//     <>
//       <div>
//         <ul>
//           <il>
//             <a href="#">hello world</a>
//           </il>
//         </ul>
//       </div>

//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
