'use strict';

const openai = require('openai');
openai.apiKey = process.env.OPENAPIKEY;

module.exports.handler = async (event) => {
  
  const prompt = event.prompt;
  const model = event.model;
  const temperature = event.temperature;
  const tokens = event.tokens;

  const response = await openai.Completion.create({
    prompt: prompt,
    model: model,
    temperature: temperature,
    max_tokens: tokens,
  });

  const result = {
    answer: response.choices[0].text
  }

  return {
    statusCode:200,
    body:JSON.stringify(result)
  }

};
