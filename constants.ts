
export const DIFFICULTY_LEVEL = [
    {rowCount: 2, colCount: 3, size: 90, name: 'Easy', icons: ['star', 'star-o', 'star-o']},
    {rowCount: 4, colCount: 3, size: 60, name: 'Medium', icons: ['star', 'star', 'star-o']},
    {rowCount: 5, colCount: 4, size: 45, name: 'Hard', icons: ['star', 'star', 'star']},
];

export const COLORS = [
    'darkblue', '#92f7a8', 'magenta', '#28b59e', 'purple', 'orange', 'lightblue', 'black', 'red',
    'maroon', 'darkgreen', 'pink', 'tan', 'grey', '#f56c42', '#42ecf5', '#14c93b', '#c996f2',
    '#4970c4', '#785625'
];

export const ICON_GROUP = {
    egg: {
        title: 'Scrambled Eggs',
        iconContainer: {
            type: 'FontAwesome',
            name: 'shopping-basket',
            sizeFactor: 1,
        },
        icon: {
            type: 'MaterialCommunityIcons',
            name: 'egg-easter',
        },
        info: [
            'The farmer\'s eggs have all been scrambled!',
            'Tap on the baskets to find the egg that is still in the correct place.'
        ],
    },
    penguin: {
        title: 'Penguin Town',
        iconContainer: {
            type: 'FontAwesome5',
            name: 'igloo',
            sizeFactor: 1,
        },
        icon: {
            type: 'MaterialCommunityIcons',
            name: 'penguin',
        },
        info: [
            'The penguins are on the move!',
            'Tap on the igloo to find the penguin that is still at home.'
        ],
    },
    book: {
        title: 'Dewey\'s Decimals',
        iconContainer: {
            type: 'MaterialCommunityIcons',
            name: 'bookshelf',
            sizeFactor: 1.25,
        },
        icon: {
            type: 'FontAwesome',
            name: 'book',
        },
        info: [
            'The librarian is on vacation!',
            'Tap on the book shelf to find the book that is in the right place.'
        ],
    },
    baby: {
        title: 'Diaper Change',
        iconContainer: {
            type: 'MaterialCommunityIcons',
            name: 'baby-carriage',
            sizeFactor: 1.25,
        },
        icon: {
            type: 'FontAwesome5',
            name: 'baby',
        },
        info: [
            'The babies are going for a walk!',
            'Tap on the stroller to find the baby that is ready to go.'
        ],
    },
    cow: {
        title: 'Moo Moo Mixup',
        iconContainer: {
            type: 'MaterialCommunityIcons',
            name: 'barn',
            sizeFactor: 1.25,
        },
        icon: {
            type: 'MaterialCommunityIcons',
            name: 'cow',
        },
        info: [
            'The cows have escaped!',
            'Tap on the barn to see which cow hasn\'t left yet.'
        ],
    },
    ball: {
        title: 'Hoop-tastic',
        iconContainer: {
            type: 'MaterialCommunityIcons',
            name: 'basketball-hoop-outline',
            sizeFactor: 1.25,
        },
        icon: {
            type: 'MaterialCommunityIcons',
            name: 'basketball',
        },
        info: [
            'The big game is down to the final seconds!',
            'Tap on the hoop to see which ball is going to score the winning basket.'
        ],
    },
};

export const TIMEOUT = 1500;
export const GAME_KEY = 'gameType';
export const DIFFICULTY_KEY = 'difficultyLevel';
