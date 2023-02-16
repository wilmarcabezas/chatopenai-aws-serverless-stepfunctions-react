const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '123',
});

const openai = new OpenAIApi(configuration)

const completion = openai.createCompletion({
  model:'text-davinci-003',
  prompt: 'Cual es la capital de Colombia?',
  temperature: .1,
  max_tokens: 100
})

console.info('sedang mencari jawaban ...')
completion.then((r) =>{
  console.info(r.data.choices[0].text)
})
