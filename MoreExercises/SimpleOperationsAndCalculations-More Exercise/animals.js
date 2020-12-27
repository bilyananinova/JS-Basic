function animals (input) {
    let animals = (input.shift());

    switch (animals) {
    case "dog": 
        console.log ("mammal");
        break;
    case "crocodile": 
    case "tortoise": 
    case "snake": 
        console.log ("reptile");
        break;
    default:
        console.log ("unknown"); 
        break;
    }
}

animals ([
    "crocodile"
])