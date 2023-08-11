const { Post } = require('../../database/models');

module.exports = {
  PostTuristic: async (req, res) => {
    const { title, price, stay, summary, description } = req.body;

    try {
      const user = req.user; // Usuario autenticado desde el middleware

      if (!user || !user.id) {
        return res.status(401).json({ message: 'Usuario no autorizado' });
      }

      // Crear el post
      const newPost = await Post.create({
        title,
        price,
        stay,
        summary,
        description,
        UserId: user.id, // Asocia el post al usuario autenticado
      });

      // Obtener los detalles de las imágenes subidas y asociarlas al post
      const images = req.files.map(file => ({
        filename: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        PostId: newPost.id, // Asocia la imagen al post recién creado
      }));
      
      // Insertar las imágenes en la base de datos
      await Post.bulkCreate(images);

      console.log('Post creado correctamente');
      res.status(200).json({ newPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
