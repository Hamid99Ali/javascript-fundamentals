// const day = "friday";
// switch (day) {
//     case "monday":
//         console.log("Plan code Structure");
//         console.log("Go to Coding meetup");
//         break;
//     case "thuesday":
//         console.log("Write code examples :D");
//         break;
//     case "tuesday":
//         console.log("Prepare theory Vedios");
//         break;
//     case "friday":
//         console.log("record Vedios")
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend")
//         break;

//     default:
//         console.log("Invalid Day")
//         break;
// }

const day = "tuesday";
if (day === "monday") {
    console.log("plan code structure");
    console.log("Go to Coding Meetup");
} else
    if (day === "tuesday") {
        console.log("writes code example :D");
    } else
        if (day === "thuesday") {
            console.log("prepare Theory veiods");
        } else
            if (day === "saturday" || day === "sunday") {
                console.log("enjoy the weekend");
            }
            else {
                console.log("Invalid day")
            }