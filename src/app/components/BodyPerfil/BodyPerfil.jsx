import React from 'react';
import Link from 'next/link';
import "./BodyPerfil.css";

function BodyPerfil() {
  return (
    <div>
      <div className="capa">
        <div className="foto-perfil">
        </div>
      </div>
      <div className="nome-usuario">
        Bem-vindo,<br /><strong>Usuário!</strong>
      </div>
      <div className="texto-opcao">O que você deseja fazer?</div>
      <div className="botoes">
        <Link href="/CadastroBike" passHref>
          <div className="botao">Cadastrar Bike</div>
        </Link>
        <Link href="/Vistoria" passHref>
          <div className="botao">Verificar Vistoria</div>
        </Link>
        <Link href="/" passHref>
          <div className="botao">Sair</div>
        </Link>
      </div>
    </div>
  );
}

export default BodyPerfil;