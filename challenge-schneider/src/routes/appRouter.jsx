/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RotaPostagens from './rotaPostagens';
import RotaCadastro from './rotaCadastro';
import PaginaInicial from '../pages/paginaInicial/index';
import RotaInfo from './rotaInfo';
import Pagina404 from '../pages/pagina404/pagina404';
import EsqueciSenha from '../pages/paginaInicial/esqueciSenha';
import RotaAdmin from './rotaAdmin';
import PaginaJeremy from '../pages/paginaJeremy/PaginaJeremy';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route index element={<PaginaInicial />} />
                <Route path="/esquecisenha/*" element={<EsqueciSenha />} />
                <Route path="/cadastro/*" element={<RotaCadastro />} />
                <Route path="/postagens/*" element={<RotaPostagens />} />
                <Route path='/info/*' element={<RotaInfo />} />
                <Route path='/admin/*' element={<RotaAdmin />} />
                <Route path='/jeremy/' element={<PaginaJeremy />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </Router>
    )
}