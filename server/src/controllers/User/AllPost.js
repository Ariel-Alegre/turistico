const { Post, Photo } = require('../../database/models');


module.exports = {
  AllTuristic: async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: [{model: Photo}]
      });

      res.status(200).send(posts)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
