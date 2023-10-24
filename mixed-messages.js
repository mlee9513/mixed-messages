const verbs = ['Run', 'Eat', 'Jump', 'write', 'sing'];
const adjevtives = ['Beautiful', 'Brave', 'Curious', 'Energetic', 'Mysterious'];
const nouns = ['Ghost', 'Bear', 'Whale', 'Paris', 'Portland'];

const getRandomIndexs = (number) => {
    const randomIndexs = [];
    for (let i = 0; i < number; i++) {
        randomIndexs.push(Math.floor(Math.random() * 5));
    }
    return randomIndexs;
}

const populateSentence = () => {
    const adjectiveIndexs = getRandomIndexs(3);
    const nounIndexs = getRandomIndexs(2);
    const verbIndexs = getRandomIndexs(2);

    const sentence = `The energetic children ${adjevtives[adjectiveIndexs[0]]} happily ${verbs[verbIndexs[0]]} painted ${verbs[verbIndexs[1]]} colorful ${adjevtives[adjectiveIndexs[1]]} pictures ${nouns[nounIndexs[0]]} at the ${adjevtives[adjectiveIndexs[2]]} park ${nouns[nounIndexs[1]]}.`;

    return sentence; 
}
console.log(populateSentence());
