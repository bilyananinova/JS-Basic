function password(arg) {
    let index = 0;
    let username = arg[index];
    index++;

    let password = arg[index];
    index++;

    let enterPassword = arg[index];
    index++;

    while(enterPassword != password) {
        enterPassword = arg[index];
        index++;
    }

    console.log(`Welcome ${username}!`)

}

password([ 'Gosho', 'secret', 'secret' ])