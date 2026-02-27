import { useState } from "react";

const BookShelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="titleInput">Title: </label>
          <input
            id="titleInput"
            name="title"
            type="text"
            value={newBook.title}
            placeholder=""
            onChange={handleInputChange}
          />
          <label htmlFor="authorInput">Author: </label>
          <input
            id="authorInput"
            name="author"
            type="text"
            value={newBook.author}
            placeholder=""
            onChange={handleInputChange}
          />
          <button>Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book) => (
          <div className="bookCard">
            <p>{book.title}</p>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
