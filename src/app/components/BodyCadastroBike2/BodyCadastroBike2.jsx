'use client';
import React from 'react';
import Link from 'next/link';
import "./BodyCadastroBike2.css";

const BodyCadastroBike2 = () => {
    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Cadastrar Bike</h1>
                <p>Tudo certo! Agora, tire uma foto de sua bike para que possamos
                    analisar suas informações e o seu estado.</p>
                <p>Você pode fazer o upload direto de suas imagens ou escanear
                    com o QR code abaixo para tirar foto em tempo real por
                    outro dispositivo. Recomendamos que envie mais de uma imagem e em
                    ângulos diversos para maior precisão.</p>
                <div className="center-button">
                    <button className="button-upload">Escolher arquivos</button>
                    <div className="qr-code-container">
                        <img src="/img/img-qrcode.png" alt="QR Code" className="qr-code" />
                    </div>
                    <button className="button-enviar">
                        <Link href="/Vistoria" className="enviar">Enviar</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BodyCadastroBike2;