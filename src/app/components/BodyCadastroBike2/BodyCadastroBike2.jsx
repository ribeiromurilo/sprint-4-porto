'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import './BodyCadastroBike2.css';

const BodyCadastroBike2 = () => {
  const fileInputRef = useRef(null);
  const [photoSelected, setPhotoSelected] = useState([false, false, false, false]);

  const handleImageUpload = (position) => {
    fileInputRef.current.click();
    fileInputRef.current.onchange = () => {
      const updatedPhotos = photoSelected.map((selected, index) =>
        index === position - 1 ? true : selected
      );
      setPhotoSelected(updatedPhotos);
    };
  };

  return (
    <div className="blue-background">
      <div className="white-container">
        <h1 className="title">Cadastrar Bike</h1>
        <p>
          Tudo certo! Agora, tire uma foto de sua bike para que possamos analisar suas informações e o seu estado.
        </p>
        <p>Você tem duas opções para enviar suas imagens:</p>
        <p>
          <strong>1.</strong> Usando a sua webcam: Você pode tirar uma foto instantaneamente.
          <br />
          <strong>2.</strong> Escaneando o QR code: Se preferir, você pode escanear o QR code com outro dispositivo para capturar a imagem de sua bike rapidamente.
        </p>
        <div className="bike-container">
          <div className="qr-code-container">
            <img src="/img/img-qrcode.png" alt="QR Code" className="qr-code" />
          </div>
          <div className="bike-imgs">
            <p>Seguindo as imagens, envie uma foto de sua bike de acordo com as posições:</p>
            <div className="bike-row-container">
              {[1, 2].map((position) => (
                <div className="bike-img" key={position}>
                  <img src={`/img/bike-${position}.png`} alt={`Bike ${position}`} className="bike" />
                  <div className="center-button">
                    <button
                      className={`button-upload ${photoSelected[position - 1] ? 'selected' : ''}`}
                      onClick={() => handleImageUpload(position)}
                    >
                      {photoSelected[position - 1] ? 'Foto Selecionada' : `Foto ${position}`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bike-row-container">
              {[3, 4].map((position) => (
                <div className="bike-img" key={position}>
                  <img src={`/img/bike-${position}.png`} alt={`Bike ${position}`} className={`bike-${position}`} />
                  <div className="center-button">
                    <button
                      className={`button-upload ${photoSelected[position - 1] ? 'selected' : ''}`}
                      onClick={() => handleImageUpload(position)}
                    >
                      {photoSelected[position - 1] ? 'Foto Selecionada' : `Foto ${position}`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <button className="button-enviar">
              <Link href="/Vistoria" className="enviar">Enviar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyCadastroBike2;