import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const books = [
  {
    author: 'Alex Michaelides',
    title: 'The Fury',
    img: './images/boook-1.jpg',
  },
  {
    author: 'Lucy Score',
    title: 'Things We Never Got Over',
    img: 'https://m.media-amazon.com/images/I/419Q1FpTrzL._SX311_BO1,204,203,200_.jpg',
  },
];

const img = './images/book-1.jpg';
const title = 'The Fury';
const author = 'Alex Michaelides';

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4> {children}
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
