let today = new Date("March 17, 2024 00:00:00"); // whatevers after the 1 is the day
today = new Date(new Date().setHours(0,0,0,0));

class time {
    constructor(_hour, _minute, _second = 0) {
        this.hour = _hour;
        this.minute = _minute;
        this.second = _second;
    }

    getFormattedTime() {
        // string formatting
        const zeroPad = (num) => String(num).padStart(2, "0");
        return (
            zeroPad(this.hour) +
            ":" +
            zeroPad(this.minute) +
            ":" +
            zeroPad(this.second)
        );
    }
}

let schedule_normal = [
    {
        name: "Block A",
        start: new time(8, 30),
        end: new time(9, 50),
    },

    {
        name: "Block B",
        start: new time(10, 00),
        end: new time(11, 20),
    },

    {
        name: "Block C",
        start: new time(11, 30),
        end: new time(12, 50),
    },

    {
        name: "Block D",
        start: new time(13, 40),
        end: new time(15, 00),
    },
];

let schedule_plt = [
    {
        name: "PLT",
        start: new time(8, 30),
        end: new time(9, 30),
    },

    {
        name: "Block A",
        start: new time(9, 35),
        end: new time(10, 40),
    },

    {
        name: "Block B",
        start: new time(10, 50),
        end: new time(11, 55),
    },

    {
        name: "Block C",
        start: new time(12, 40),
        end: new time(13, 45),
    },

    {
        name: "Block D",
        start: new time(13, 55),
        end: new time(15, 00),
    },
];

let schedule = [];

if ([1, 4, 5].includes(today.getDay())) {
    schedule = schedule_normal;
} else if ([2, 3].includes(today.getDay())) {
    schedule = schedule_plt;
} else {
    // weekend
    schedule = [];
}

function asdf() {
    var audio = new Audio('bell.mp3');
    audio.play();
    console.debug(
        "avah is the cutest and smartest boy in the whole wide world",
    );
}

// asdf();

// TWO WAYS OF FOR LOOPS

// INDEX BASED
for (let i = 0; i < schedule.length; i++) {}

// ELEMENT BASED
for (let leg of schedule) {
}

for (let i = 0; i < schedule.length; i++) {
    let eventElement = document.createElement("div");

    eventElement.innerText = schedule[i].end.getFormattedTime();

    document.getElementsByTagName("body")[0].appendChild(eventElement);
}

function getMsSinceMidnight(d) {
  var e = new Date();
  return d - e.setHours(0,0,0,0);
}

setInterval(function () {
    // now is "today" + the actual time
    let now = new Date(today.getTime() + getMsSinceMidnight(new Date()));

    // the time 5 minutes from now should be equal to the end time of the block
    let more = new Date(now - 60000 * -5);
    console.debug(`the time 5 minutes from now is ${more.toTimeString()}`);
    for (let i = 0; i < schedule.length; i++) {
        if (
            more.getHours() == schedule[i].end.hour &&
            more.getMinutes() == schedule[i].end.minute &&
            more.getSeconds() == schedule[i].end.second
        ) {
            var bell = new Audio('bell.mp3');
            bell.play();
            console.debug("yay");
        }
    }
}, 1000);
