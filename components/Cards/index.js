// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const dataItem = response.data.articles
    const jscript = dataItem.javascript
    const bstrap = dataItem.bootstrap
    const tech = dataItem.technology
    const jquer = dataItem.jquery
    const node = dataItem.node
    console.log (response)

   jscript.forEach(item => gitCard(item))
   bstrap.forEach(item => gitCard(item))
   tech.forEach(item => gitCard(item))
   jquer.forEach(item => gitCard(item))
   node.forEach(item => gitCard(item))

  })


  .catch(err => {
    alert(err);
  })

const gitCard = (dataItem) =>{
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const authName = document.createElement('span');
    
  
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');
  
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(authName);
    const cardCont = document.querySelector('.cards-container')
    cardCont.appendChild(card)

   
  
     img.src = dataItem.authorPhoto;
    headline.textContent = dataItem.headline;
    author.textContent = dataItem.authorName;
  
  
    return card
  }
  
 