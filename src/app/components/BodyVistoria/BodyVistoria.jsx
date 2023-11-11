import React from 'react';
import "./BodyVistoria.css";

const BodyVistoria = () => {
    return (
      <div className="container">
        <div className="content">
          <h1>Vistoria</h1>
          <h2>Olá, <strong>Usuário!</strong></h2>
          <p>Ainda não concluímos o resultado de sua vistoria. <br />
            Caso não for aprovado, você terá mais 2 tentativas disponíveis.
            Após atingir o limite, será necessário entrar em contato com a Porto Seguro.
            Por favor, aguarde por breves atualizações.</p>
        </div>
      </div>
    );
  };
  
  export default BodyVistoria;