function quoteGenerator() {
    var quotes = {
        "- Elbert Hubbard" : '"Positive anything is better than negative nothing."',
        "- Bernhard Berenson" : '"Miracles happen to those who believe in them."',
        "- Zig Ziglar" : '"One small positive thought can change your whole day."',
        "- Maya Angelou" : '"Try to be a rainbow in someone\'s cloud."',
        "- David Livingston" : '"I will go anywhere as long as it\'s forward."',
        "- Joel Osteen" : '"Keep a smile on your face. Keep a spring in your step."',
        "- Richard. M. DeVos" : '"A positive atmosphere nurtures a positive attitude, which is required to take positive action."',
        "- William James" : '"Believe that life is worth living and your belief will help create the fact."',
        "- Shiv Kera" : '"Your positive action combined with positive thinking results in success."',
        "- Lou Holtz" : '"Virtually, nothing is impossible in this world if you just put your mind to it and maintain a positive attitude."',
        "- Ralph Waldo Emerson" : '"Write it on your heart that every day is the best day in the year."',
        "- Bing Crosby" : '"Accentuate the positive, eliminate the negative, latch onto the affirmative."',
        "- Rob Siltanen" : '"People who are crazy enough to think they can change the world are the ones who do."',
        "- Dr. Henry Link" : '"We generate fears while we sit, we overcome them by action."',
        "- Mae Jemison" : '"Never limit yourself because of others\' limited imagination; never limit others because of your own limited imagination."'
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}