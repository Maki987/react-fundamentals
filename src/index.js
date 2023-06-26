import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firstBook = {
  author: 'Alex Michaelides',
  title: 'The Fury',
  img: './images/boook-1.jpg',
};
const secondBook = {
  author: 'Lucy Score',
  title: 'Things We Never Got Over',
  img: 'https://m.media-amazon.com/images/I/419Q1FpTrzL._SX311_BO1,204,203,200_.jpg',
};

const img = './images/book-1.jpg';
const title = 'The Fury';
const author = 'Alex Michaelides';

function BookList() {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const Image = () => <img src="./images/book-1.jpg" alt="The Fury" />;
const Title = () => {
  return <h2>Alex Michaelides </h2>;
};
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
