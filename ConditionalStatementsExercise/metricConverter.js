function metricConverter(number, inMetric, outMetric) {

    let num = Number(number);

    if (inMetric === "m") {
        num = num * 100;
    } else if (inMetric === "mm") {
        num = num / 10;
    }

    if (outMetric === "m") {
        num = num / 100;
    } else if (outMetric === "mm") {
        num = num * 10;
    } 

    console.log(num.toFixed(3))
}

metricConverter(45, "cm", "mm")