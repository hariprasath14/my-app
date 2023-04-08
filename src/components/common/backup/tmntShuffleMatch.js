// function shuffle(array) {
//     let currentIndex = array.length, randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {

//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }

//     return array;
//   }
//   function shuffleWithDate(array) {
//     let currentIndex = array.length, randomIndex;

//     let dateTime = moment().add(array.length + 1, 'days');
//     let x;
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {

//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       dateTime = moment(dateTime).subtract(1, 'days')
//       x = moment(dateTime).format("YYYY-MM-DD hh:mm:ss")
//       console.log(x);      // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         { ...array[randomIndex], date: x }, { ...array[currentIndex], date: x },];
//     }

//     return array;
//   }

//   function shuffleWithTime(array) {
//     let currentIndex = array.length, randomIndex;

//     let dateTime = moment().add(array.length + 1, 'hours');
//     let x;
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {

//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       dateTime = moment(dateTime).subtract(1, 'hours')
//       x = moment(dateTime).format("YYYY-MM-DD hh:mm:ss")
//       console.log(x);      // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         { ...array[randomIndex], date: x }, { ...array[currentIndex], date: x },];
//     }

//     return array;
//   }



//   const createSchedule = () => {
//     console.log(playersList);
//     // one team two match
//     // for (let i = 0; i < playersList.length; i++) {
//     //   let subject1 = playersList[i].name
//     //   for (let x = 0; x < playersList.length; x++) {
//     //     if (i !== x) {
//     //       match.push({ a: subject1, b: playersList[x].name })
//     //     }
//     //   }
//     // }

//     // one team one match
//     let x = []

//     playersList.map((v, i) => {
//       return x = [...x, ...playersList.slice(i + 1).map(v2 => {
//         return { m1: v, m2: v2 }
//       })]
//     });
//     let shuffledArray = shuffleWithTime([...x]);



//     setMatchSchedule(shuffledArray)
//     console.log(shuffledArray, x);
//   }