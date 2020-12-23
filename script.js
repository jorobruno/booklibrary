function readBook () {
    if (document.getElementById("readCheck").checked == true){
        document.getElementById("readPages").value = document.getElementById("totalPages").value;
        document.getElementById("readPages").setAttribute("disabled",true);
    }
    else {
        document.getElementById("readPages").value = ``;
        document.getElementById("readPages").removeAttribute("disabled");
    }
}

let myLibrary = [];

function Book () {

}

function addBookToLibrary () {
    
}