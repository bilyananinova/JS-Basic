function scholarshipTwo(arg1, arg2, arg3) {
    let income = Number(arg1);
    let grade = Number(arg2);
    let minimumIncome = Number(arg3);

    let socialScholarship = false;
    let excellentScholarship = false;

    if (income < minimumIncome) {
        socialScholarship = true;
    }

    if (grade >= 5.50) {
        excellentScholarship = true;
    }

    if (grade <= 4.50) {
        socialScholarship = false;
    }

    let socialScholarshipMoney = 0;
    let excellentScholarshipMoney = 0;

    if (socialScholarship) {
        socialScholarshipMoney = Math.floor(minimumIncome * 0.35);
    }

    if (excellentScholarship) {
        excellentScholarshipMoney = Math.floor(grade * 25);
    }

    if (socialScholarshipMoney > excellentScholarshipMoney) {
        excellentScholarship = false;
    } else if (excellentScholarshipMoney >= socialScholarshipMoney) {
        socialScholarship = false;
    }

    if (socialScholarship) {
        console.log(`You get a Social scholarship ${socialScholarshipMoney} BGN`);
    } else if (excellentScholarship) {
        console.log(`You get a scholarship for excellent results ${excellentScholarshipMoney} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}

scholarshipTwo("300.00", "5.65", "420.00")