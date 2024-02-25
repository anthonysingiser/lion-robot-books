// list of animals to have as the subject of a story, to be chosen or randomly selected

const animals = ['unicorn', 'chipmunk', 'squirrel', 'dog', 'puppy', 'kitten', 'cat', 'fox', 'bat', 'mouse', 'robin', 'horse', 'cow', 'pig']

//Thoughts: 
// lists of sight words that will be included in the story, 
// the goal here should be to include multiple lists by grade level
// that can be selected by the user. An alternative would be to use lists of words 
// that are hard and easy for the user, and incorporate both.
// Another alternative will be to select by phonetics, long a, short a, etc.   

//Tasks:
//these are Dolch sight words by grade level, add Fry sight words by grade level as well or instead of


const sightWords = {
    preK: ['a', 'and', 'away', 'big', 'blue', 'can', 'come', 'down', 'find', 'for', 'funny', 'go', 'help', 'here', 'I', 'in', 'is', 'it',
        'jump', 'little', 'look', 'make', 'me', 'my', 'not', 'one', 'play', 'red', 'run', 'said', 'see', 'the', 'three', 'to', 'two', 'up',
        'we', 'where', 'yellow', 'you'
    ],

    kindergarten: ['all', 'am', 'are', 'at', 'ate', 'be', 'black', 'brown', 'but', 'came', 'did', 'do', 'eat', 'four', 'get', 'good', 'have',
        'he', 'into', 'like', 'must', 'new', 'no', 'now', 'on', 'our', 'out', 'please', 'pretty', 'ran', 'ride', 'saw', 'say', 'she',
        'so', 'soon', 'that', 'there', 'they', 'this', 'too', 'under', 'want', 'was', 'well', 'went', 'what', 'white', 'who', 'will',
        'with', 'yes'
    ],


    firstGrade: ['after', 'again', 'an', 'any', 'as', 'ask', 'by', 'could', 'every', 'fly', 'from', 'give', 'going', 'had', 'has', 'her', 'him', 'his',
        'how', 'just', 'know', 'let', 'live', 'may', 'of', 'old', 'once', 'open', 'over', 'put', 'round', 'some', 'stop', 'take', 'thank', 'them',
        'then', 'think', 'walk', 'were', 'when'
    ],

    secondGrade: ['always', 'around', 'because', 'been', 'before', 'best', 'both', 'buy', 'call', 'cold', 'does', `don't`, 'fast', 'first', 'five', 'found', 
        'gave', 'goes', 'green', 'its', 'made', 'many', 'off', 'or', 'pull', 'read', 'right', 'sing', 'sit', 'sleep', 'tell', 'their', 'these', 'those', 
        'upon', 'us', 'use', 'very', 'wash', 'which', 'why', 'wish', 'work', 'would', 'write', 'your'
    ],

    thirdGrade: ['about', 'better', 'bring', 'carry', 'clean', 'cut', 'done', 'draw', 'drink', 'eight', 'fall', 'far', 'full', 'got', 'grow', 'hold', 'hot', 
        'hurt', 'if', 'keep', 'kind', 'laugh', 'light', 'long', 'much', 'myself', 'never', 'only', 'own', 'pick', 'seven', 'shall', 'show', 'six', 'small', 
        'start', 'ten', 'today', 'together', 'try', 'warm'
    ],


    nouns: ['apple', 'baby', 'back', 'ball', 'bear', 'bed', 'bell', 'bird', 'birthday', 'boat', 'box', 'boy', 'bread', 'brother', 'cake', 'car', 'cat', 
        'chair', 'chicken', 'children', 'Christmas', 'coat', 'corn', 'cow', 'day', 'dog', 'doll', 'door', 'duck', 'egg', 'eye', 'farm', 'farmer', 'father', 
        'feet', 'fire', 'fish', 'floor', 'flower', 'game', 'garden', 'girl', 'goodbye', 'grass', 'ground', 'hand', 'head', 'hill', 'home', 'horse', 'house', 
        'kitty', 'leg', 'letter', 'man', 'men', 'milk', 'money', 'morning', 'mother', 'name', 'nest', 'night', 'paper', 'party', 'picture', 'pig', 'rabbit', 
        'rain', 'ring', 'robin', 'Santa Claus', 'school', 'seed', 'sheep', 'shoe', 'sister', 'snow', 'song', 'squirrel', 'stick', 'street', 'sun', 'table', 
        'thing', 'time', 'top', 'toy', 'tree', 'watch', 'water', 'way', 'wind', 'window', 'wood'
    ]
}

module.exports = {
    animals,
    sightWords
}