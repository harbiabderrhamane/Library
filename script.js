const divContainer = document.getElementById("div-container");
const newBookBtn = document.getElementById("new-book-btn");
const form = document.getElementById("form");
const addBookBtn = document.getElementById("Add-a-Book-btn");
const bookDiv = document.getElementsByClassName("infos");

let myLibrary = [];
class Books {
  // the constructor
  constructor(name, author, numberOfPages, dateOfPublishing) {
    this.name = name;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.dateOfPublishing = dateOfPublishing;
    // this.check = checkBox
  }
}

const render = () => {
  divContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    const book = myLibrary[i];
    bookCard.innerHTML = `
        <div>
           <h2> Book Name : ${book.name} </h2>
           <h2> Author : ${book.author} </h2>
           <h2> Number Of Pages : ${book.numberOfPages} </h2>
           <h2> Date Of Publishing : ${book.dateOfPublishing} </h2>
           <button class="delete-btn" onclick='deleteBookCard(${book[i]})'>Delete</button>
        </div>
            `;
    bookCard.classList.add("infos");
    divContainer.appendChild(bookCard);
  }
};
const deleteBookCard = (index) => {
  myLibrary.splice(index, 1);
  render();
};



const addBookToLibrary = () => {
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const numberOfPages = document.getElementById("number-of-pages").value;
  const dateOfPublishing = document.getElementById("date-of-publishing").value;

  const books = new Books(name, author, numberOfPages, dateOfPublishing);
  myLibrary.push(books);
  render();
};

const formShape = () => {
  newBookBtn.onclick = () => {
    form.style.display = "block";
    addBookBtn.onclick = () => {
      event.preventDefault();
      addBookToLibrary();
    };
  };
};
formShape();

