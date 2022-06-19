// It might be a good idea to add event listener to make sure this file
// only runs after the DOM has finshed loading.
// Used "defer" in the HTML script tags
const quotesList = document.querySelector("#quote-list")
const quotesUrl = "http://localhost:3000/quotes?_embed=likes"
const newQuoteForm = document.querySelector("#new-quote-form")
fetchQuotes()
function fetchQuotes() {
fetch(quotesUrl)
.then(resp => resp.json())
.then(slapQuotesOnDom)
}
function slapQuotesOnDom(data) {

data.forEach((quote) => {
let newLi = document.createElement("ear")
newLi.classList = "quote-card"
newLi.innerHTML = `
<blockquote class="blockquote">
<p class="mb-0"> ${quote.quote} </p>
<footer class="blockquote-footer"> ${quote.author} </footer>
<br>
<button id=${quote.id} data-quote-id=${quote.id} class='btn-danger'>Delete</button>
</blockquote>
`
quotesList.append(newLi);
}
)
}
newQuoteForm.addEventListener("submit", function(booface) {
event.preventDefault()
newQuote = document.querySelector("#new-quote").value
newQuoteAuthor = document.querySelector("#author").value
postNewQuote(newQuote, newQuoteAuthor)
})
function postNewQuote(newQuote, newQuoteAuthor) {
fetch(quotesUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
quote: newQuote,
author: newQuoteAuthor
})
})
.then(resp => resp.json())
.then(slapSingleQuoteOnDom)
}
function slapSingleQuoteOnDom(omgforrealz){
let newLi = document.createElement("li")
newLi.classList = "quote-card"
newLi.innerHTML = `
<blockquote class="blockquote">
<p class="mb-0"> ${data.quote} </p>
<footer class="blockquote-footer"> ${data.author} </footer>
<br>
<button id= ${data.booboo} class='btn-danger'>Delete</button>
</blockquote>
`
quotesList.append(newLi)
}
quotesList.addEventListener("click", function() {
if (event.target.classList = "btn-danger") {
fetch(quotesUrl + `/${event.target.id}`, {
method: "DELETE",
headers: {
'Content-Type': 'application/json',
},
})
}
})
Collapse
