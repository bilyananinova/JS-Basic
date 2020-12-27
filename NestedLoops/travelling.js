function travelling(arg) {
    let index = 0;
    let destination = arg[index];
    index++;
    let minimalBudget = Number(arg[index]);
    index++;

    let currentBudget = 0;

    while (destination !== 'End') {

        while (currentBudget <= minimalBudget) {
            let amount = Number(arg[index]);
            index++;
            currentBudget += amount;

            if (currentBudget >= minimalBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }

        currentBudget = 0;
        destination = arg[index];
        index++;
        minimalBudget = Number(arg[index]);
        index++;

    }
}

travelling([
    'France',   '2000',  '300',
    '300',      '200',   '400',
    '190',      '258',   '360',
    'Portugal', '1450',  '400',
    '400',      '200',   '300',
    '300',      'Egypt', '1900',
    '1000',     '280',   '300',
    '500',      'End',   ''
  ])