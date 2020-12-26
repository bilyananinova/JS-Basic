function projectHours(name, projectCount) {
    let architectName = name;
    let projects = Number(projectCount);
    let hours = projects * 3;
    
    console.log (`The architect ${architectName} will need ${hours} hours to complete ${projects} project/s.`);

}

projectHours ('Sanya', '9')