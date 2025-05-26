var quoteText = document.getElementById("quote-text");
var quoteAuthor = document.getElementById("quote-author");
var cite = document.getElementById("cite");

const quote = [
    {
        qText: `“Be yourself; everyone else is already taken.”`,
        qAuthor: `― Oscar Wilde`
    },
    {
        qText: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        qAuthor: `― Marilyn Monroe`
    },
    {
        qText: `“So many books, so little time.”`,
        qAuthor: `― Frank Zappa`
    },
    {
        qText: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        qAuthor: `― Albert Einstein`
    },
    {
        qText: `“A room without books is like a body without a soul.”`,
        qAuthor: `― Marcus Tullius Cicero`
    },
    {
        qText: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        qAuthor: `― Bernard M. Baruch`
    },
    {
        qText: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”`,
        qAuthor: `― William W. Purkey`
    }];

const element = document.getElementById("demo");
element.addEventListener("click", function () {
    clickBtn();
});

var repeat;
function clickBtn() {
    math = Math.floor(Math.random() * quote.length);
    if (repeat === math) {
        clickBtn();
    }
    else {
        console.log(math);
        quoteText.innerHTML = quote[math].qText;
        quoteAuthor.innerHTML = quote[math].qAuthor;
        repeat = math;
    }
    cite.classList.remove("d-none");
}