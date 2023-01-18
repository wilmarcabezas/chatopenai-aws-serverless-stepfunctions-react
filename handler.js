const { Configuration, OpenAIApi } = require('openai');

module.exports.openaiFunction = async (event) => {

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

module.exports.temperatureFunction= async(event)=>{

  const body = JSON.parse(event.body);

  return{
    statusCode: 200,
    body: JSON.stringify(body.temperature)
  }
}