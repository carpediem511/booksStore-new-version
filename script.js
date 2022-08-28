
const books = [
    {
        title: "Гарри Поттер и философский камень",
        authors: "Джоан Роулинг",
        year: "1997",
        image: "/book1.jpg"
    },

    {
        title: "Гарри Поттер и тайная комната",
        authors: "Джоан Роулинг",
        year: "1998",
        image: "/book2.jpg"
    },

    {
        title: "Гарри Поттер и узник Азкабана",
        authors: "Джоан Роулинг",
        year: "1999",
        image: "/book3.jpg"
    },

    {
        title: "Гарри Поттер и кубок огня",
        authors: "Джоан Роулинг",
        year: "2000",
        image: "/book4.jpg"
    }
]
   
const list2 = document.getElementById("list")

books.forEach((book) => {
    list2.innerHTML += `
    <div class="list" id="list"> 
        <div class="book-image">${book.image}</div>
        <div class="book-title">${book.title}</div>
        <div class="book-year">${book.year}</div>
        <div class="book-author">${book.authors}</div>
    </div>
   `
})

    
    
    

    
 

 