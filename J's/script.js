const countdown = document.getElementById("countdown");

let endDate = new Date();
endDate.setDate(endDate.getDate() + 3);

function updateCountdown() {

const now = new Date().getTime();

const distance = endDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);

countdown.innerHTML =
"⏰ Offer Ends In: " +
days +
"d " +
hours +
"h " +
minutes +
"m " +
seconds +
"s";

}

setInterval(updateCountdown,1000);
