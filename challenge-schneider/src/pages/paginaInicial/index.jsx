import PESSOAS_IMG from '/images/duotone.png'
import logo from '/images/schneider-logo-white.png'
import './css/login.css'
import { Link } from 'react-router-dom';


export default function PaginaInicial() {


    return (
        <main className=" md:overflow-hidden flex flex-col h-screen text-gray-500 bg-gray-50">
            <header className=' pt-2 flex justify-between absolute w-full h-16 '>
                <img className=' ml-8 h-full mt-4' src={logo} alt="logo schneider branco" />
                <Link className='' to={'/cadastro'}>
                    <button className='botaocadastro'>Cadastre-se</button>
                </Link>
            </header>

            <div className=' h-2/5'>
                <img className=' w-full h-full object-cover ' src={PESSOAS_IMG} alt="Pessoas rindo imagem duotônica" />
            </div>

            <div className=' w-full flex flex-col justify-center items-center h-fit lg:flex-row lg:h-3/5 '>
                <div className=' w-70 md:w-1/2 p-10'>
                    <h1 className="titulo ">Bem-vindo à Rede Social Interna da Schneider.</h1>
                    <p id='copy01' className="text-justify text-xl font-thin">A SchneiderStream tem como objetivo unir funcionários em prol da sustentabilidade, compartilhando ideias e construindo um futuro sustentável coletivamente.</p>



                </div>
                <div className=' flex-col  w-full md:w-1/2 flex justify-center items-center h-full bg-white shadow-md rounded px-8'>
                    <button onClick={()=> {window.location.href = "/jeremy"}} className=' h-20 w-2/3 p-2 mb-2 text-white text-3xl bg-sch-green'>Falar com Jeremy</button>
                    <button onClick={()=> {window.location.href = "/postagens"}} className=' h-20 w-2/3 p-2 text-white text-3xl bg-sch-blue'>Teste de interface</button>
                </div>
            </div>

        </main >
    )
}