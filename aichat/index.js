/*
 * system prompt demo application using LangChain.js
 */
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

const modelOptions = {
  model: 'gpt-4'
};

let humantext = `
Mercutio’s mocking my love and he’s never been in love himself.

Wait. What’s that light coming from the window over there? It’s like the east, with Juliet as the morning sun! Rise, Juliet, beautiful sun, and kill the jealous moon who’s already fading and sad because you are far more beautiful than she is. Don’t swear off men like the virgin moon goddess Diana—the moon envies you anyway. Her virginal appearance is weak and pale and only fools want to emulate it. Get rid of it.

It’s my lady! Oh, it’s my love. Oh, if only she knew I love her. She’s talking but I can’t hear anything. What does it matter?

Her expression means something and I can answer that. No, I’m being too forward. She’s not talking to me. Oh, if two of the most beautiful stars had to leave heaven on important business, they’d ask her eyes to do the twinkling for them while they were gone! What if her eyes took their places in the sky and those stars became her eyes? Her beautiful face would outshine those stars in her head like daylight outshines lamps, while her eyes in the sky would be so bright at nighttime that birds would be convinced it was day. Look at how she leans her cheek on her hand. I wish I were a glove on her hand so I could touch her cheek!
`;

let systemChoices = [
  'You are a professional translator. Translate the text from English to German',
  'You are a passionate kinder gardener. Explain the text to a 5 year old',
  'You are a clinical psychologist. Explain the mindeset of the character in the text to a grand jury',
  'You are a highly paid consultant. Translate the text to corporate language and make it sound like a business proposal. Use a lot of buzzwords',
  'You are a professional translator. Translate the text from English to Italian'
];

/**
 * Make it more fun by randomly selecting a system prompt from the array
 *
 * @param {Array[string]} choiceArray
 * @returns a random choice from the array
 */
const randomSystemChoice = (choiceArray) => {
  const randomIndex = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomIndex];
};

/**
 * Main function to interact with the AI
 *
 * @param {string} systemText
 * @param {string} humanText
 * @returns JSON response from the model
 */
const fromBehindTheCurtain = async (systemText, humanText) => {
  const model = new ChatOpenAI(modelOptions);
  const systemMessage = new SystemMessage(systemText);
  const humanMessage = new HumanMessage(humanText);
  const messages = [systemMessage, humanMessage];
  const response = await model.invoke(messages);
  return response;
};

const onePrompt = async (systemText) => {
  const response = await fromBehindTheCurtain(systemText, humantext);
  console.log('\n\nSystem Prompt: ', systemText);
  console.log('----------------------------------');
  console.log('Response: ', response.text);
};

console.log('Running the sample, please wait... and enjoy what you see!');
// Load a random prompt from the system choices
//onePrompt(randomSystemChoice(systemChoices));
// Loop through the system choices and get a response for each
for (const systemText of systemChoices) {
  await onePrompt(systemText);
}

console.log('\nDone!');
