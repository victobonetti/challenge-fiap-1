import OpenAI from 'openai';

// const url = 'http://localhost:8081'

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export default async function sendPrompt(prompt) {
    console.log(prompt)
    const completion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: `Responda de forma ecológica e curta com uma forma de reciclagem de: "${prompt}", e sempre inclua "au au" na frase. Exemplo: 'au au! A melhor forma de reciclar X item é Y modo.'. Caso o item a ser reciclado não faça sentido, responda: Não entendi. Au au. `,
        max_tokens: 100,
    });

    return completion.choices[0].text
}

export async function createQuestion(prompt) {
    console.log(prompt)
    const completion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: `Retorne uma pergunta curta json no formato {"pergunta": "Qual a cor do céu?", "a":"azul", "b":"vermelho", "correta":"a", "reason":"O céu é azul"} a respeito do assunto ecológico: ${prompt}`,
        max_tokens: 190,
    });

    console.log(completion.choices[0].text)
    return completion.choices[0].text
    // console.log(prompt)
    // return `{
    //     "pergunta": "Quanto é possível obter de produção de batata em um hectare?",
    //     "a": "Até 3000 kg",
    //     "b": "Até 12000 kg",
    //     "correta": "b",
    //     "reason": "No Brasil, é possível obter até 12000 Kg de batata em um hectare, porém a produção varia de acordo com as condições ambientais e culturais."
    // }`
}

