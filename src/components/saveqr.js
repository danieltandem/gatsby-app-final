import React from 'react';

const SaveQrCode = ({ qrName, inputValue, onSave }) => {
  const handleSave = async () => {
    const formData = new FormData();
    formData.append('name', qrName);
    formData.append('content', inputValue);

    try {
      const response = await fetch('http://your-server-path/database.php', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.error) {
        alert('Failed to save QR Code');
      } else {
        alert('QR Code saved successfully');
        onSave();
      }
    } catch (error) {
      alert('An error occurred while saving the QR Code');
    }
  };

  return (
    <div>
      <button onClick={handleSave}>Guardar QR</button>
    </div>
  );
};

export default SaveQrCode;