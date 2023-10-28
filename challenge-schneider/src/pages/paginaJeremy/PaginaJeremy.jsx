import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import jeremy_icon from '/images/jeremy_icon.png'
import jeremy from '/images/jeremy.png'
import sendPrompt, { createQuestion } from "./gpt"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Pergunta from "./Pergunta"
import getUserData from '../paginaPostagens/schemas/usuarioTesteSchema'



export default function PaginaJeremy() {

    const [prompt, setPrompt] = useState('');
    const [conversation, setConversation] = useState([])
    const [user, setUser] = useState(undefined);
    const [selectedOption, setSelectedOption] = useState('exercise');
    const [wait, setWait] = useState(false)

    useEffect(() => {
        setUser(getUserData())
    }, [])

    const api = async () => {
        console.log("start")
        setWait(true)
        try {
            if (selectedOption == 'learn') {
                console.log("learn")
                setConversation((prevConversation) => [...prevConversation, { msg: `Qual a melhor forma de reciclar "${prompt}"?`, isDog: false }]);
                let arg = prompt;
                setPrompt("")
                const result = await sendPrompt(arg);
                setConversation((prevConversation) => [...prevConversation, { msg: result, isDog: true }]);
            }

            if (selectedOption == 'exercise') {
                setConversation((prevConversation) => [...prevConversation, { msg: `Crie uma pergunta sobre "${prompt}".`, isDog: false }]);
                let arg = prompt;
                setPrompt("")
                const question = await createQuestion(arg);
                console.log(question)
                setConversation((prevConversation) => [...prevConversation, { exercicio: JSON.parse(question), isDog: true }]);
                console.log(conversation)
            }
        } catch {
            alert("Erro ao encontrar o cachorrinho. Tente novamente.")
        } finally {
            setWait(false)
        }

    }

    return (
        <div className=" h-screen flex flex-col items-center justify-center bg-neutral-100 pt-4" >
            <div className=" w-4/5 h-4/5 border overflow-scroll shadow bg-neutral-50">
                {
                    conversation.length == 0 &&

                    <div className=" flex flex-col items-center">
                        <h2 className=" select-none mt-8 text-center text-neutral-400 text-2xl my-2 font-bold">Fale com Jeremy!</h2>
                        <p className=" select-none text-justify w-4/5 text-neutral-400">Conheça Jeremy, nosso adorável cãozinho virtual, apaixonado por ecologia e reciclagem. Ele está aqui para compartilhar dicas úteis e tornar o mundo mais verde. </p>
                        <img className=" h-64 mr-3 opacity-40" src={jeremy_icon} />
                    </div>

                }

                {
                    conversation.length > 0 &&

                    conversation.map((c, i) => {
                        if (c.isDog && selectedOption == 'learn') {
                            return (

                                <div key={i} className="bg-neutral-200 h-48 flex items-center px-8">
                                    <div>
                                        <p className=" text-sm text-neutral-600 font-semibold">Jeremy</p>
                                        <img className="h-24 mr-8" src={jeremy} />
                                    </div>
                                    <p className="">{c.msg}</p>
                                </div>

                            )
                        }

                        if (c.isDog && selectedOption == 'exercise') {

                            return (
                                <div key={i} className="bg-neutral-200 py-4 flex flex-col lg:flex-row items-center px-8">
                                    <div className=" w-full lg:w-1/4">
                                        <p className=" text-sm text-neutral-600 font-semibold">Jeremy</p>
                                        <img className="h-24 mr-8" src={jeremy} />
                                    </div>
                                    <div>
                                        <Pergunta exercicio={c.exercicio} />
                                    </div>
                                </div>
                            )
                        }

                        if (!c.isDog) {
                            return (
                                <div key={i} className="bg-neutral-100 h-48 flex items-center px-8">
                                    <div>
                                        <p className=" text-sm text-neutral-600 font-semibold">Você</p>
                                        <img className="h-24 mr-8" src={user.fotoDePerfil} />
                                    </div>
                                    <p className="">{c.msg}</p>
                                </div>
                            )
                        }


                    })
                }
            </div>
            <div className=" mt-2 w-4/5 h-1/5">
                {!wait &&
                    <select className="text-2xl border-2 mb-2 rounded border-sch-green" value={selectedOption} onChange={e => { setConversation([]); setSelectedOption(e.target.value) }}>
                        <option value="learn">Me ensine a reciclar... </option>
                        <option value="exercise">Crie uma pergunta sobre...</option>
                    </select>

                }
                <div className="flex w-full"><input value={prompt} onChange={e => setPrompt(e.target.value)} maxLength={20} className=" font-semibold text-lg p-1 w-4/5" type="text" /> <button onClick={api} className="w-1/5 shadow bg-sch-green text-white rounded mx-4 hover:bg-green-800"><FontAwesomeIcon icon={faArrowRight} /></button>

                </div>
                <Link to={'/postagens'}><button className=' mb-2 mt-2 w-36 h-fit text-sch-green  text-2xl p-2 border border-sch-green'>Retornar</button></Link>
            </div>
        </div>

    )
}