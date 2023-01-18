# chatopenai-lambda function
```` javascript
const { Configuration, OpenAIApi } = require('openai');

module.exports.GenerateAI = async (event) => {

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });

  
  const body = JSON.parse(event.body);

  const openai = new OpenAIApi(configuration)
  const completion = openai.createCompletion({
    model: 'text-davinci-003',
    prompt: body.prompt,
    temperature: body.temperature,
    max_tokens: 1000
  });

  const result = await completion

  return {
    statusCode: 200,
    body: JSON.stringify(result.data.choices[0].text)
  }
}

module.exports.temperatureRandomFunction= async(event)=>{

  var randomNumber = Math.random() * (1 - 0.1) + 0.1;

  return randomNumber;
}
````
