function readText (arg){
    let index = 0;
    let word = arg[index];
    index++;
    
    let wordCount = 0;

    while(word != 'Stop') {
        wordCount++;

        word = arg[index]
        index++;

    }

    console.log(wordCount)
}

readText ([
    'Sofia',
    'Berlin',
    'Moscow',
    'Athens',
    'Madrid',
    'London',
    'Paris',
    'Stop',
   
])