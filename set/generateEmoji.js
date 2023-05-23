const emojis = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];

export const generateRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * 7);
    const randomEmoji = emojis[randomIndex]; 
    return randomEmoji;
}


export const updateEmoji = (input) => {
    input.value = generateRandomEmoji();
 }