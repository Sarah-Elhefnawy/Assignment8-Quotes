var quoteText = document.getElementById("quote-text");
var quoteAuthor = document.getElementById("quote-author");
var cite = document.getElementById("cite");


var x = Math.exp(Math.random(3));
var y = Math.round(Math.pow(x, x));
var repeat;

// if(y = repeat){
//     repeat = y
// }



var q1 = [`“Be yourself; everyone else is already taken.”`
    , `― Oscar Wilde`]
var q2 = [`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`
    , `― Marilyn Monroe`]
var q3 = [`“So many books, so little time.”`
    , `― Frank Zappa`]
var q4 = [`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
    , `― Albert Einstein`]
var q5 = [`“A room without books is like a body without a soul.”`
    , `― Marcus Tullius Cicero`]
var q6 = [`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`
    , `― Bernard M. Baruch`]
var q7 = [`“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”`
    , `― William W. Purkey`]
// var q3 = [`“So many books, so little time.”`
//     , `― Frank Zappa`]
// var q3 = [`“So many books, so little time.”`
//     , `― Frank Zappa`]
// var q3 = [`“So many books, so little time.”`
//     , `― Frank Zappa`]



const element = document.getElementById("demo");
element.addEventListener("click", function () {
for (let index = 1; index <= 7; index++) {
    quoteText.innerHTML = q1[0];
    quoteAuthor.innerHTML = q1[1];
}

cite.classList.remove("d-none");
});

