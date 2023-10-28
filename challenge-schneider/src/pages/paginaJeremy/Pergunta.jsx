import { useState } from "react"

export default function Pergunta(exercicio) {

    const [err, setErr] = useState(false)
    const [sucesso, setSucesso] = useState(false)
    const [rightAnswer, setRightAnswer] = useState('')

    const check = (char) => {
        if (char == exercicio.exercicio.correta) {
            setSucesso(true);
        } else {
            setErr(true);
        }

        setRightAnswer(exercicio.exercicio[char])
    }

    return (
        <><p className=" font-bold">Pergunta:</p><p className=" w-full lg:w-3/4">{exercicio.exercicio.pergunta}</p>
            {!err && !sucesso &&
                <div className=" mt-4 flex flex-col justify-center ">
                    <button onClick={() => check('a')} className=" transition-all hover:scale-105 mb-2 px-4 pb-2 border bg-purple-600 text-purple-100 font-semibold text-xl">{exercicio.exercicio.a}</button>
                    <button onClick={() => check('b')} className=" transition-all hover:scale-105 px-4 pb-2 border bg-sch-blue text-blue-50 font-semibold text-xl">{exercicio.exercicio.b}</button>
                </div>
            }

            {
                err && !sucesso &&
                <div className=" mt-4 flex flex-col justify-center h-full ">
                    <p className=" w-full opacity-50">Sua resposta: {rightAnswer}</p>
                    <p className=" w-full text-2xl text-red-500">Incorreto! Au au.</p>
                    <p className=" mt-2">{exercicio.exercicio.reason}</p>
                </div>
            }

            {
                !err && sucesso &&
                <div className=" mt-4 flex flex-col justify-center h-full ">
                    <p className=" w-full opacity-50 ">Sua resposta: {rightAnswer}?</p>
                    <p className=" w-full text-2xl text-sch-green">Muito bem! Au au.</p>
                    <p className=" mt-2">Au au! {exercicio.exercicio.reason}</p>
                </div>
            }


        </>
    )
}