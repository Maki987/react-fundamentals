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
    id: 1,
  },
  {
    author: 'Lucy Score',
    title: 'Things We Never Got Over',
    img: 'https://m.media-amazon.com/images/I/419Q1FpTrzL._SX311_BO1,204,203,200_.jpg',
    id: 2,
  },
];

const img = './images/book-1.jpg';
const title = 'The Fury';
const author = 'Alex Michaelides';

function BookList() {
  const getBook = (id) => {
    books.find((book) => book.id === id);
    console.log(id);
  };
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author, children, getBook, id } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4> {children}
      <button onClick={() => getBook(id)}>click me</button>
    </article>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle form input');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input type="text" name="product" onChange={handleFormInput} style={{ margin: '1rem 0' }} />
        <div>
          <button onClick={() => console.log('click me')} type="submit">
            submit
          </button>
        </div>
      </form>
    </section>
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

const people = [
  {
    name: 'peter',
    job: 'developer',
    age: 24,
  },
  { name: 'ann', job: 'designer', age: 25 },
  { name: 'bob', job: 'tester', age: 35 },
];

//const joungPeople = people.filter((person) => person.age < 35);
/*find - return single instance, returns first match */
const joungPeople = people.find((person) => person.age < 35);
console.log(joungPeople);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
