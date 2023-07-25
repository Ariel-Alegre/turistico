import React, { useState } from 'react';

const UploadPhotos = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files);
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...filesArray]);
  };

  const handleUpload = () => {
    // Aquí puedes implementar la lógica para subir los archivos al servidor.
    // Puedes usar la variable "selectedFiles" para acceder a los archivos seleccionados.
    // Por ejemplo, podrías utilizar una librería como axios para enviar los archivos al backend.
    console.log(selectedFiles);
  };

  const handleRemove = (index) => {
    const newFilesArray = [...selectedFiles];
    newFilesArray.splice(index, 1);
    setSelectedFiles(newFilesArray);
  };

  return (
    <div>
      {/* Agregar el atributo "multiple" al input */}
      <input type="file" multiple onChange={handleFileChange} />

      {/* Mostrar las fotos seleccionadas */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {selectedFiles.map((file, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img
              src={URL.createObjectURL(file)}
              alt={`Preview ${index}`}
              style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '5px' }}
            />
            <button
              onClick={() => handleRemove(index)}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                cursor: 'pointer',
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Botón para subir las fotos al servidor */}
   
    </div>
  );
};

export default UploadPhotos;
