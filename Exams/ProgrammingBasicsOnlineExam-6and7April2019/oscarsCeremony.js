function oscarsCeremony (arg) {
    let rent = Number(arg[0]);

    let statuetsCost = rent * 0.70;
    let cetaringCosts = statuetsCost * 0.85;
    let soundsCosts = cetaringCosts / 2;

    let allCosts = rent + statuetsCost + cetaringCosts + soundsCosts;

    console.log(allCosts.toFixed(2))
}

oscarsCeremony ([ '5555' ])