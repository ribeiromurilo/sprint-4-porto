'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import './BodyCadastroBike2.css';

const BodyCadastroBike2 = () => {
  const fileInputRef = useRef(null);
  const [photoSelected, setPhotoSelected] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageUpload = (position) => {
    fileInputRef.current.click();
    fileInputRef.current.onchange = () => {
      const updatedPhotos = photoSelected.map((selected, index) =>
        index === position - 1 ? true : selected
      );
      setPhotoSelected(updatedPhotos);
    };
  };

  const realizarVistoria = async (imageData) => {
    try {
      const formData = new FormData();
      formData.append('image', imageData);

      const response = await fetch('http://localhost:8080/seguro-bike/vistoria/realizar', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const status = await response.json();
        // Lidar com o status da vistoria retornado
      } else {
        throw new Error('Falha ao realizar a vistoria');
      }
    } catch (error) {
      console.error('Erro ao enviar a imagem para vistoria:', error.message);
      setErrorMessage('Ocorreu um erro ao enviar a imagem para vistoria. Por favor, tente novamente.');
    }
  };

  const handleEnviarClick = async () => {
    // Dados da imagem para função de realizar vistoria
    const imageData = imageDataHere;

    await realizarVistoria(imageData);
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
            <button className="button-enviar" onClick={handleEnviarClick}>
              <Link href="/Vistoria" className="enviar">Enviar</Link>
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyCadastroBike2;
