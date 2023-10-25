#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');
const { argv } = require('yargs');

const configFilePath = path.join(process.env.HOME, '.aa_config.json');

let apiKey = '';

if (fs.existsSync(configFilePath)) {
    const configData = fs.readFileSync(configFilePath, 'utf8');
    const config = JSON.parse(configData);
    apiKey = config.API_KEY;
}

const openai = new OpenAI({
    apiKey: apiKey,
});


if (argv.config) {
    const configData = fs.existsSync(configFilePath)
        ? fs.readFileSync(configFilePath, 'utf8')
        : '{}';
    const config = JSON.parse(configData);
    const providedApiKey = argv.config.replace(/^API_KEY=/, '');
    config.API_KEY = providedApiKey;
    apiKey = argv.config;
    fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2));
    console.log('API key updated successfully.');
    process.exit(0);
}

const question = argv._.join(' ');

if (!question) {
    console.error('Please provide a question.');
    process.exit(1);
}

if (!apiKey) {
    console.error('Please set your API key using: aa --config API_KEY=YOUR_KEY');
    process.exit(1);
}

const askQuestion = async (question) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "You are a AI search engine. Give brief helpful answers to the user queries."
                },
                {
                    role: "user",
                    content: `${question}`
                }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        return response.choices[0].message.content;
    } catch (error) {
        throw error;
    }
};

const main = async () => {
    try {
        const response = await askQuestion(question);
        console.log(response);
    } catch (error) {
        console.error('Error:', error);
    }
};

main();