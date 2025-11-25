import {formatBookCurrency} from '../script/money/book-money.js'

export function getBook(productId) {
  let matchingProduct;

    products.forEach((product) => {
      if(product.id === productId) {
        matchingProduct = product;
      }
    })
    return matchingProduct;
}

class BookProduct {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(bookDetails) {
    this.id = bookDetails.id
    this.image = bookDetails.image
    this.name = bookDetails.name
    this.rating = bookDetails.rating
    this.priceCents = bookDetails.priceCents
  }

  rateStar() {
    return `img/ratings/rating-${this.rating.stars * 10}.png`;
  }

  showPrice() {
    return `$${formatBookCurrency(this.priceCents)}`;
  }
}

const bookp1 = new BookProduct({
  id:"book-one",
  image:"img/book/trending-booke-one.png",
  name: "Invisible Life of AddieLaRue",
  rating: {
    stars: 4.5,
    count: 829
  },
  priceCents: 1310,
  keywords: [
    "books",
    "urban-fantasy"
  ]
});

export const products = [
  {
    id:"book-one",
    image:"img/book/trending-booke-one.png",
    name: "Invisible Life of AddieLaRue",
    rating: {
      stars: 4.5,
      count: 829
    },
    priceCents: 1310,
    keywords: [
      "books",
      "urban-fantasy"
    ]
  },
  {
    id: "book-two",
    image: "img/book/trending-booke-two.png",
    name: "Fearless",
    rating: {
      stars: 4.5,
      count: 523
    },
    priceCents: 1670,
    keywords: [
      "books",
      "romantasy"
    ]
  },
  {
    id: "book-three",
    image: "img/book/trending-booke-three.png",
    name: "Seven year slip",
    rating: {
      stars: 4.5,
      count: 120
    },
    priceCents: 1130,
    keywords: [
      "books",
      "contemporary-romance",
      "magical-realism"
    ]
  }, 
  {
    id: "book-four",
    image: "img/book/trending-booke-four.png",
    name: "The Silent Patient",
    rating: {
      stars: 4,
      count: 338
    },
    priceCents: 1518,
    keywords: [
      "books",
      "thriller",
      "mystery"
    ]
  }, 
  {
    id: "book-five",
    image:"img/book/trending-booke-five.png",
    name: "The Women",
    rating: {
      stars: 5,
      count: 876
    }, 
    priceCents: 1998,
    keywords: [
      "books",
      "feminism"
    ]
  }, 
  {
    id: "book-six",
    image: "img/book/trending-booke-six.png",
    name: "7 husbands of Evelyn Hugo",
    rating: {
      stars: 4,
      count: 995
    },
    priceCents: 1834,
    keywords:[
      "books",
      "feminism",
      "emotional"
    ]
  },
  {
    id:"book-seven",
    image:"img/book/trending-booke-seven.png",
    name:"Bride",
    rating: {
      stars:3,
      count:262
    },
    priceCents:1326,
    keywords:[
      "books",
      "fantasy",
      "paranormal romance",
    ]
  },
  { 
    id:"book-eight",
    image:"img/book/trending-booke-eight.png",
    name: "Archer's Voice",
    rating:{
      stars: 4,
      count: 434
    },
    priceCents: 1290,
    keywords: [
      "books",
      "sad",
      "contemporary-romance"
    ]
  },
  {
    id:"book-nine",
    image:"img/book/trending-booke-nine.png",
    name: "Funny Story",
    rating: {
      stars: 5,
      count: 669
    },
    priceCents: 1990,
    keywords: [
      "books",
      "contemporary-romance"
    ]
  }, 
  {
    id: "book-ten",
    image: "img/book/trending-booke-ten.png",
    name: "Normal People",
    rating: {
      stars: 3,
      count: 700
    },
    priceCents: 1473,
    keywords: [
      "books",
      "romance",
      "psychological-fiction"
    ]
  },
  {
    id: "book-eleven",
    image:"img/book/trending-booke-eleven.png",
    name: "Assistant to the Villain",
    rating: {
      stars: 4.5,
      count:116
    },
    priceCents: 1145,
    keywords:[
      "books",
      "cozy-fantasy",
      "romantasy"
    ]
  },
  {
    id:"book-twelve",
    image:"img/book/trending-booke-twelve.png",
    name:"The Unmaking of JuneFarrow",
    rating:{
      stars:4,
      count:260
    },
    priceCents: 1085,
    keywords:[
      "books",
      "romance",
      "magical-realism",
      "urban-fantasy"
    ]
  }, {
    id:"book-thirteen",
    image:"img/book/trending-booke-thirteen.png",
    name:"The Housemaid",
    rating: {
      stars: 3.5,
      count: 330
    },
    priceCents: 1545,
    keywords: [
      "books",
      "mystery",
      "thriller"
    ]
  }, 
  {
    id: "book-fourteen",
    image: "img/book/trending-booke-fourteen.png",
    name: "Little Women",
    rating: {
      stars: 4.5,
      count: 900
    },
    priceCents: 2000,
    keywords:[
      "books",
      "historical-romance",
      "comedy"
    ]
  },{
    id: "book-fifteen",
    image: "img/book/trending-booke-fifteen.png",
    name: "Once Upon A Broken Heart",
    rating: {
      stars: 4,
      count: 755
    },
    priceCents: 1560,
    keywords:[
      "books",
      "romantasy"
    ]
  }, 
  {
    id: "book-sixteen",
    image: "img/book/trending-booke-sixteen.png",
    name: "Educated",
    rating: {
      stars: 3.5,
      count: 933
    },
    priceCents: 1810,
    keywords:[
      "books",
      "non-fiction",
      "memoir"
    ]
  }, 
  {
    id: "book-seventeen",
    image: "img/book/trending-booke-seventeen.png",
    name: "Powerless",
    rating: {
      stars: 5,
      count: 968
    },
    priceCents: 1833,
    keywords:[
      "books",
      "romantasy"
    ]
  }, 
  {
    id: "book-eighteen",
    image: "img/book/trending-booke-eighteen.png",
    name: "Bell Jar",
    rating: {
      stars: 4.5,
      count: 999
    },
    priceCents: 1795,
    keywords:[
      "books",
      "literary-fiction",
      "feminist literature'"
    ]
  }
].map((bookDetails) => {
  return new BookProduct(bookDetails);
});






