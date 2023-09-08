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

//
// when you come back dont forget to check if the card is in the display dont show it
// again and if it isnt show and that is by looping through the array : myLibrary like you did earlier

const addBookToLibrary = () => {
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const numberOfPages = document.getElementById("number-of-pages").value;
  const dateOfPublishing = document.getElementById("date-of-publishing").value;
  // const checkBox = document.getElementById('checkBox').checked
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

// const addBookToLibrary = () => {
//     // do stuff here
//     button.onclick = () => {
//         const books = userInput.value
//         myLibrary.push(books)
//         looping(myLibrary)

//     }
// }
// addBookToLibrary()

// const looping = (books) => {
//     const addDiv = document.createElement('div')
//     for (let i = 0; i < books.length; i++) {
//         if (books[i] in books) {
//             addDiv.innerText += books[i]
//             bookDiv.appendChild(addDiv)
//         } else {
//             addDiv.innerText = books[i]
//             bookDiv.appendChild(addDiv)
//         }
//     }
// }
