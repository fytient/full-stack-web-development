function Compare(word, secretWord) {
    if(word.length !== 5) {
        return `${word} was not a valid word`;
    }
    else if(word.toUpperCase() !== secretWord) {
        // eslint-disable-next-line no-inner-declarations
        function letterCountsOf(word) {
            const letterCounts = {};
      
            word.toUpperCase().split('').forEach(letter => {
                letterCounts[letter] = letterCounts[letter] + 1 || 1;
            });
      
            return letterCounts;
        }
      
        const wordCounts = letterCountsOf(word);
        const guessCounts = letterCountsOf(secretWord);
        let matched = 0;
      
        for(let letter in guessCounts) {
            const wordCount = wordCounts[letter] || 0;
            const guessCount = guessCounts[letter] || 0;
            matched += Math.min(wordCount,guessCount);
        }
        return matched;
    }
    else {
        return true;
    }
}

export default Compare;