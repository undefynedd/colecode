let a = new Date();

class time {
    constructor(_hour, _minute = 0, _second = 0) {
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

let schedule = [
    {
        name: "Block A",
        time: new time(8),
    },

    {
        name: "Block B",
        time: new time(12, 1, 1),
    },

    {
        name: "Block C",
        time: new time(12, 34, 3),
    },

    {
        name: "Block D",
        time: new time(16, 27, 50),
    },
    {
        name: "Block E",
        time: new time(16, 27, 52),
    },
];

function asdf() {
    alert("i love u");
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

    eventElement.innerText = schedule[i].time.getFormattedTime();

    document.getElementsByTagName("body")[0].appendChild(eventElement);
}

setInterval(function () {
    let now = new Date();
    let more = new Date(now - 60000 * -5);
    console.debug(more.toTimeString());
    for (let i = 0; i < schedule.length; i++) {
        if (
            more.getHours() == schedule[i].time.hour &&
            more.getMinutes() == schedule[i].time.minute &&
            more.getSeconds() == schedule[i].time.second
        ) {
            console.debug("yay");
        }
    }
}, 1000);
