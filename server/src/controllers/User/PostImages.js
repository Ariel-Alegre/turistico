const { Photo } = require('../../database/models');

module.exports = {
  FilesCreate: async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).send('No se han proporcionado archivos.');
      }

      const images = []; // Para almacenar los nombres de las imágenes

      // Recorre todas las imágenes subidas y guarda los detalles en la base de datos
      for (const file of req.files) {
        const { originalname, mimetype, size } = file;
        images.push(originalname); // Agregar el nombre de la imagen al array
      }

      await Photo.create({
        images,
        mimetype: req.files[0].mimetype,
        size: req.files[0].size,
      });
      const createdImages = await Photo.findAll({
        where: { images },
        attributes: ['id'], // Selecciona solo el campo 'id'
      });
      
      const imageIds = createdImages.map(image => image.id);
      res.status(200).json({ imageIds }); 

    } catch (error) {
      console.error(error);
      res.status(500).send('Error al subir los archivos.');
    }
  },



    FilesDetail: async (req, res) => {
        try {
            const { id } = req.params;
        
            const file = await Photo.findByPk(id);
        
            if (!file) {
              return res.status(404).send('Archivo no encontrado.');
            }
        
            res.send(file);
          } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener el archivo.');
          }
    },
  

  
}