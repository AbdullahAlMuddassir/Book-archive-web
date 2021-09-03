const searchInput=document.getElementById("search-input");
const inputButton=document.getElementById("input-button");
const bookInformation=document.getElementById("book-Information")
const errorField=document.getElementById('error');
inputButton.addEventListener("click",function(){
    const searchText=searchInput.value;
    if(searchText ===""){
        errorField.innerText="Search filed cannot be empty"
    }
    bookInformation.innerHTML="";
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch (url)
    .then(res =>res.json())
    .then(data =>{
        if(data.status === 404){
            errorField.innerText="No result found";
        }
        else{
            errorField.innerText="";
        }
        booklist(data)});
})
const booklist = data=>{
    const blist=data.docs;
    const showBookInf=document.getElementById("book-Information");
    for(const list of blist){
        console.log( list);
        const div =document.createElement("div");
        div.innerHTML=`
        <h3>Book Name:${list.title}</h3>
        <h3>Author Name:${list.author_name}</h3>
        <h3>Publisher:${list.publisher}</h3>
        <h3>first Publisher:${list.publish_date}</h3>
        `
        showBookInf.appendChild(div);
    }
}