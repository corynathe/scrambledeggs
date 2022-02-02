
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
        playAgain: 'Play Again',
        iconContainer: {
            type: 'FontAwesome',
            name: 'shopping-basket',
            sizeFactor: 1,
        },
        icon: {
            type: 'MaterialCommunityIcons',
            name: 'egg-easter',
        },
        info: 'Find the egg with the color that matches the basket.',
    },
    penguin: {
        title: 'Penguin Town',
        playAgain: 'Play Again',
        iconContainer: {
            type: 'FontAwesome5',
            name: 'igloo',
            sizeFactor: 1,
        },
        icon: {
            type: 'MaterialCommunityIcons',
            name: 'penguin',
        },
        info: 'Find the penguin with the color that matches the igloo.',
    },
    book: {
        title: 'Dewey\'s Decimals',
        playAgain: 'Play Again',
        iconContainer: {
            type: 'MaterialCommunityIcons',
            name: 'bookshelf',
            sizeFactor: 1.25,
        },
        icon: {
            type: 'FontAwesome',
            name: 'book',
        },
        info: 'Find the book with the color that matches the shelf.',
    },
    baby: {
        title: 'Diaper Change',
        playAgain: 'Play Again',
        iconContainer: {
            type: 'MaterialCommunityIcons',
            name: 'baby-carriage',
            sizeFactor: 1.25,
        },
        icon: {
            type: 'FontAwesome5',
            name: 'baby',
        },
        info: 'Find the baby with the color that matches the stroller.',
    },
    cow: {
        title: 'Moo Moo Mixup',
        playAgain: 'Play Again',
        iconContainer: {
            type: 'MaterialCommunityIcons',
            name: 'barn',
            sizeFactor: 1.25,
        },
        icon: {
            type: 'MaterialCommunityIcons',
            name: 'cow',
        },
        info: 'Find the cow with the color that matches the barn.',
    },
    ball: {
        title: 'Hoop-tastic',
        playAgain: 'Play Again',
        iconContainer: {
            type: 'MaterialCommunityIcons',
            name: 'basketball-hoop-outline',
            sizeFactor: 1.25,
        },
        icon: {
            type: 'MaterialCommunityIcons',
            name: 'basketball',
        },
        info: 'Find the basketball with the color that matches the hoop.',
    },
};

export const TIMEOUT = 1500;