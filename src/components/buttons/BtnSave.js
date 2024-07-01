import React, { useState } from 'react';

const BtnSave = () => {
  const [qrName, setQrName] = useState('');
  const [imgQr, setImgQr] = useState(null);
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState(1); // Reemplaza con el ID del usuario que creó el QR

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('name_qr', qrName);
    formData.append('img_qr', imgQr);
    formData.append('description', description);
    formData.append('created_by', createdBy);

    try {
      const response = await fetch('http://localhost/bd-appqr/v1/qr/save-qr.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleSave}>Guardar QR</button>
  );
};
export default BtnSave;