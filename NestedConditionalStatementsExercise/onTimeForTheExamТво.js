function onTimeForTheExam(hourExam, minutesExam, hourArrive, minutesArrive) {
    hourExam = Number(hourExam);
    minutesExam = Number(minutesExam);
    hourArrive = Number(hourArrive);
    minutesArrive = Number(minutesArrive);

    let diffHours = hourExam - hourArrive;
    let diffMinutes = minutesExam - minutesArrive;

    if(hourExam < hourArrive && minutesExam < minutesArrive) {
        console.log("Late");
        console.log(`${diffMinutes} minutes after the start`);
    } else if (hourExam < hourArrive && minutesExam < minutesArrive) {
        console.log("Late");
        console.log(`${diffHours}:${diffMinutes} hours after the start`);
    } else if (diffHours < 1 && minutesExam > minutesArrive) {
        console.log("Late");
        console.log(`${diffMinutes} minutes after the start`);
    } else if (diffHours !== 0 && minutesExam > minutesArrive) {
        console.log("Late");
        console.log(`${diffHours}:${diffMinutes} hours after the start`);
    }

    if(hourExam > hourArrive && minutesExam === minutesArrive) {
        console.log("On time")
    } else if (hourExam > hourArrive && minutesArrive !== minutesExam) {
        console.log("On time")
        console.log(`${diffMinutes} minutes before the start`)
    }

    if (hourExam > hourArrive && minutesExam === minutesArrive) {
        console.log("Early")
        console.log(`${diffHours}:${diffMinutes} hours before the start`)
    } else if (hourExam > hourArrive && minutesExam !== minutesArrive) {
        console.log("Early")
        console.log(`${diffHours}:${diffMinutes} hours before the start`)
    } 

}

onTimeForTheExam ("14", "00", "13", "55")

// function solve(arg1, arg2, arg3, arg4) {
//     let hourExam = Number(arg1);
//     let minutesExam = Number(arg2);
//     let hourArrival = Number(arg3);
//     let minutesArrival = Number(arg4);
//     let hours = 0;
//     let minutes = 0;

//     let minutesForExam = hourExam * 60 + minutesExam;
//     let minutesForArrival = hourArrival * 60 + minutesArrival;
//     let difference = minutesForExam - minutesForArrival;
//     if (difference >= 0 && difference <= 30) {
//         console.log(`On time`);
//         if (difference !== 0){
//         console.log(`${difference} minutes before the start`);
//         }        
//     } else if (difference > 30) {
//         console.log("Early");
//             minutes += difference % 60;
//             hours += Math.floor(difference / 60);
//         if (difference > 30 && difference < 60) {
//             console.log(`${minutes} minutes before the start`);
//         } else if (difference >= 60 && minutes > 9) {
//            console.log(`${hours}:${minutes} hours before the start`); 
//         } else {
//             console.log(`${hours}:0${minutes} hours before the start`);
//         }
//     } else if (difference < 0){
//         console.log(`Late`);
//         difference = Math.abs(difference)
//         minutes += difference % 60;
//         hours += Math.floor(difference / 60);
//         if (difference < 60) {
//             console.log(`${minutes} minutes after the start`);
//         } else if (difference >=60 && minutes > 9) {
//             console.log(`${hours}:${minutes} hours after the start`);
//         } else if (difference >= 60 && minutes <= 9) {
//             console.log(`${hours}:0${minutes} hours after the start`);
//         }
//     }

// }

// solve("9", "30", "9", "50")





// function timeLeft(a, b, c, d){
//     let hourExam = Number(a);
//     let minuteExam = Number(b);
//     let arriveHour = Number(c);
//     let arriveMinute = Number(d);
//     let diffHours = arriveHour - hourExam;
//     let diffMinutes = arriveMinute - minuteExam;
//     let diff = 0;
 
 
//     if (diffHours == 0 && diffMinutes == 0){
//         console.log("On time");
//     }
//     if (diffHours > 1 && diffMinutes < 0 ){
//         console.log("Late");
//         diffHours = diffHours - 1;
//         diff = 60 - Math.abs(diffMinutes);
//         if (Math.abs(diffMinutes) < 10){
//             console.log(`${diffHours}:0${diffMinutes} minutes after the start`);
//         }else {
//             console.log(`${diffHours}:${diffMinutes} minutes after the start`);
//         } 
//     }
//     if (diffHours > 1 && diffMinutes > 0 ){
//         console.log("Late");
//         if (Math.abs(diffMinutes) < 10){
//             console.log(`${diffHours}:0${diffMinutes} minutes after the start`);
//         }else {
//             console.log(`${diffHours}:${diffMinutes} minutes after the start`);
//         }
//     }
//     if (diffHours < -1 && diffMinutes <= 0 ){
//         diffHours = Math.abs(diffHours);
//         diffMinutes = Math.abs(diffMinutes);
//         console.log("Early");
//         if (diffMinutes < 10){
//             console.log(`${diffHours}:0${diffMinutes} hours before the start`);
//         }else {
//             console.log(`${diffHours}:${diffMinutes} hours before the start`);
//         }
       
//     }
//     if (diffHours < -1 && diffMinutes > 0){
//         diffHours = diffHours + 1;
//         diff = 60 - diffMinutes;
//         console.log("Early");
//         if (diffMinutes < 10){
//             console.log(`${diffHours}:0${diff} hours before the start`);
//         }else {
//             console.log(`${diffHours}:${diff} hours before the start`);
//         }
 
//     }
//     if (diffHours == 0 && (diffMinutes > 0 && diffMinutes <= 59)){
//         console.log("Late");
//         if (diffMinutes < 10){
//             console.log(`0${diffMinutes} minutes after the start`);
//         }else {
//             console.log(`${diffMinutes} minutes after the start`);
//         }
//     }
//     if (diffHours == 0 && (diffMinutes > - 59 && diffMinutes < 0)){
//         console.log("Early");
//         if (Math.abs(diffMinutes) < 10) {
//             console.log(`:0${diffMinutes} minutes before the start`);
//         }else {
//             console.log(`:${diffMinutes} minutes before the start`);
//         }
 
//     }
//     if (diffHours == 1 && diffMinutes < 0){
//         console.log("Late");
//         diffHours = diffHours - 1;
//         diff = 60 - Math.abs(diffMinutes);
//         if (Math.abs(diffMinutes) < 10){
//             console.log(`${diff} minutes after the start`);
//         }
 
//     }
//     if (diffHours == 1 && diffMinutes > 0){
//         console.log("Late");
//         if (diffMinutes < 10){
//             console.log(`${diffHours}:0${diffMinutes} hours after the start`);
//         }else{
//             console.log(`${diffHours}:${diffMinutes} hours after the start`);
//         }
//     }
//     if (diffHours == 1 && diffMinutes == 0){
//         console.log("Late");
//         console.log(`${diffHours}:${diffMinutes} hours after the start`);
//     }
//     if (diffHours == -1 && diffMinutes == 0){
//         console.log("Early");
//         diffHours = Math.abs(diffHours);
//         console.log(`${diffHours}:0${diffMinutes} hours before the start`);
//     }
// }