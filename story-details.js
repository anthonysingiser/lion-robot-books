// list of animals to have as the subject of a story, to be chosen or randomly selected

const animals = [
    'unicorn',
    'chipmunk',
    'squirrel',
    'dog',
    'kitten',
]

// list of sight words that will be included in the story, 
// the goal here should be to include multiple lists by grade level
// that can be selected by the user. An alternative would be to use lists of words 
// that are hard and easy for the user, and incorporate both.
// Another alternative will be to select by phonetics, long a, short a, etc.   
const sightWords = {
    preK: ['a', 'and', 'away', 'big', 'blue', 'can', 'come', 'down', 'find', 'for', 'funny', 'go', 'help', 'here', 'I', 'in', 'is', 'it',
        'jump', 'little', 'look', 'make', 'me', 'my', 'not', 'one', 'play', 'red', 'run', 'said', 'see', 'the', 'three', 'to', 'two', 'up',
        'we', 'where', 'yellow', 'you'
    ],


    firstGrade: ['after', 'again', 'an', 'any', 'as', 'ask', 'by', 'could', 'every', 'fly', 'from', 'give', 'going', 'had', 'has', 'her', 'him', 'his',
        'how', 'just', 'know', 'let', 'live', 'may', 'of', 'old', 'once', 'open', 'over', 'put', 'round', 'some', 'stop', 'take', 'thank', 'them',
        'then', 'think', 'walk', 'were', 'when'
    ],

}

module.exports = {
    animals,
    sightWords
}