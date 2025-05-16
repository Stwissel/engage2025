# OpenAI command line example

This short application uses the [langchain](https://js.langchain.com/docs/introduction/) JavaScript API to talk to OpenAI. It shows how the (in chat normally hidden) system prompt influences outcome.

## Setup

You need [NodeJS](https://nodejs.org/en) and an OpenAI [API Key](https://platform.openai.com/api-keys).

Create a file `.env` with this content:

```env
OPENAI_API_KEY=sk-your-long-pi-key
OPENAI_API_BASE=https://api.openai.com/v1
```

then run

```bash
npm install
```

## Running the application

```bash
npm start
```

## Modifying the outcome

Edit the `index.js` file and modify the `systemPrompts` array or the `getPrompt` method

YMMV
