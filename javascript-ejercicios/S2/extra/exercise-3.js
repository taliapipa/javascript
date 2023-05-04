const soundCount = {};

for (const user of users) {
  for (const soundName in user.favoritesSounds) {
    if (soundCount.hasOwnProperty(soundName)) {
      soundCount[soundName]++;
    } else {
      soundCount[soundName] = 1;
    }
  }
}

console.log(soundCount);