function shuffle(array) {
  const shuffledArray = [...array];

  var m = shuffledArray.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = shuffledArray[m];
    shuffledArray[m] = shuffledArray[i];
    shuffledArray[i] = t;
  }

  return shuffledArray;
}

export { shuffle };
