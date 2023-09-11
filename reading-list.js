let myBookArr = [];

function displayBooks(){
    let bookList = '';

    for(let i=0; i<myBookArr.length; i++){
        const bookObject = myBookArr[i];
        const {name, finishDate} = bookObject; //destructuring
        bookList += `
            <div class="display-name">${name}</div>
            <div class="display-date">${finishDate}</div>
                <button onclick="
                    myBookArr.splice(${i}, 1);
                    displayBooks();
                " class="display-button">Delete</button>
            `;
    }
    document.querySelector('.js-display-books').innerHTML = bookList;
}

function addToArray(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    const inputDate = document.querySelector('.js-input-date');
    const finishDate = inputDate.value;
    
    myBookArr.push({ //Short hand property
        name,
        finishDate
    });    
    inputElement.value = '';

    displayBooks();
}

function addToArrayEnterKey(event){
    if(event.key === 'Enter'){
        addToArray();
    }
}