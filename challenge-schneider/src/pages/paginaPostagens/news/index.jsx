import './card.css'
import { Link } from 'react-router-dom'

export default function News() {
    return (
        <div className=' h-screen flex flex-col items-center '>
            <div className=' flex flex-col items-center lg:items-start w-11/12 lg:w-1/2 p-4'>
                <div className=' pt-3 font-bold  w-full'>
                    <h1 className=' mb-2 text-center select-none text-4xl text-neutral-600 '>News</h1>
                </div>
                <div className=" p-4 w-full rounded-xl border shadow-inner bg-neutral-200">
                    <h2 className=' text-lg text-neutral-600 text-center mb-2 '>
                        EcoStruxure Resource Advisor For Environmental, Social and Governance (ESG) - Schneider Electric
                    </h2>
                    <div>
                        <iframe className=' w-full h-64' src="https://www.youtube.com/embed/4kNp6iTKvf0" title="CONVITE ESPECIAL: Innovation Summit Brasil 2023" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <p className=' text-justify mt-2 text-xs text-neutral-600'>Our platform allows you to collect and aggregate cross-enterprise ESG data in one place for performance management and reporting. You can also align ESG indicators to global frameworks, simplify your ESG reporting process, and document everything from comments, performance statements, and attachments for optimal auditability. </p>
                </div>
                {/* <div className=' w-full flex-col rounded-xl shadow-inner bg-gray-50 p-2 '>
                    <h2 className=' text-lg text-neutral-600 text-center mb-2 '>
                        Próxima sessão da tarde: Wall-e
                    </h2>
                    <div>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/m5_lIuBXKWk" title="Wall-e" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
                </div> */}
            </div>
            <Link to={'/postagens'}><button className=' mt-4 w-48 h-fit text-sch-green text-2xl p-4 border border-sch-green'>Retornar</button></Link>
        </div>
    )
}