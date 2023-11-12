import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-nomes'>
        <i className="fa fa-users" aria-hidden="true"></i>
        <p className='footer-nomes-heading'>
          <strong>1TDSB</strong> <br />
          Ana Júlia Almeida Silva Neves – RM: 98974 (1TDSS) <br />
          Felipe Rodrigues Franco de Oliveira – RM: 552101 <br />
          Lucas Pinheiro de Melo – RM: 97707 <br />
          Murilo Ribeiro Valério da Silva – RM: 550858 <br />
        </p>
        <a href="https://github.com/ribeiromurilo/SPRINT4" rel="noreferrer" target="_blank">Repositório</a>
      </section>
    </div>
  );
}

export default Footer;
