var counter1 = new CountUp('counter-13', 0, 13, 0, 3);
counter1.start();

var counter2 = new CountUp('counter-540', 0, 540, 0, 3);
counter2.start();

var counter3 = new CountUp('counter-29', 0, 29, 0, 3);
counter3.start();

var counter4 = new CountUp('counter-100', 0, 100, 0, 3);
counter4.start();

function displacement(){

    var scroll = document.getElementById('section-2');
    scroll.scrollIntoView({block: "end", behavior: "smooth"});
}