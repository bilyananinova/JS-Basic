function scholarship(arg1, arg2, arg3) {
    let income = Number(arg1);
    let grade = Number(arg2);
    let minimumIncome = Number(arg3);

    let socialScholarship = 0;
    let excellentScholarship = 0;

    if (grade > 4.50) {
        if (income < minimumIncome) {
            socialScholarship = minimumIncome * 0.35;
        }

        if (grade >= 5.50) {
            excellentScholarship = grade * 25;
        }
    }

    if (socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (excellentScholarship > socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }
}

scholarship("480.00", "4.60", "450.00")