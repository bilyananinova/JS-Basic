function weatherForecastPartTwo(degrees) {

    if (degrees <= 35 & degrees >= 26) {
        console.log("Hot");
    } else if (degrees <= 25.9 & degrees >= 20.1) {
        console.log("Warm");
    } else if (degrees <= 20 & degrees >= 15) {
        console.log("Mild");
    } else if (degrees <= 14.9 & degrees >= 12) {
        console.log("Cool");
    } else if (degrees <= 11.9 & degrees >= 5) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}

weatherForecastPartTwo (0)