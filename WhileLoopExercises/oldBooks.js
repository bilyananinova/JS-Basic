function oldBooks(arg) {
    let index = 0;
    let wantedBook = arg[index];
    index++;
    let capacityLibrary = Number(arg[index]);
    index++;

    let checkedBooks = 0;
    let nextTitle = '';
    let isFounded = false;

    while (checkedBooks < capacityLibrary) {
        nextTitle = arg[index];

        if (nextTitle !== wantedBook) {
            checkedBooks++;
        } else {
            isFounded = true;
            break;
        }

        nextTitle = arg[index];
        index++;

    }

    if (isFounded) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${checkedBooks} books.`);
    }
}

oldBooks([
    'Troy',
    '8',
    'Stronger',
    'Life Style',
    'Troy',



])