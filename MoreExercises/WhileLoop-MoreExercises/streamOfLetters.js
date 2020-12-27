function streamOfLetters(arg) {
    let index = 0;

    let cCounter = 0;
    let oCounter = 0;
    let nCounter = 0;

    let symbol = '';
    let word = '';
    let print = '';

    while (symbol !== "End") {
        symbol = arg[index];
        index++;

        if (!(symbol >= 'a' && symbol <= 'z' || symbol >= 'A' && symbol <= 'Z')) {
            continue;
        }

        switch (symbol) {
            case 'c':
                cCounter++;
                if (cCounter <= 1) {
                    continue;
                }
                break;
            case 'o':
                oCounter++;
                if (oCounter <= 1) {
                    continue;
                }
                break;
            case 'n':
                nCounter++;
                if (nCounter <= 1) {
                    continue;
                }
                break;
        }

        if (cCounter && oCounter && nCounter) {
            print += word;
            word = ' ';
            cCounter = 0;
            oCounter = 0;
            nCounter = 0;
        }

        word += symbol;
    }

    console.log(print)
}


streamOfLetters([
    'o', 'S', '%', 'o',
    'l', '^', 'v', 'e',
    'c', 'n', '&', 'm',
    'e', 'c', 'o', 'n',
    'End'
])