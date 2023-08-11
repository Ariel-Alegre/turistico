const { Post, Photo } = require('../../database/models');


module.exports = {
  DetailsTuristic: async (req, res) => {
    const { idTuristic } = req.params;
    try {
      const detailsTuristic = await Post.findByPk(idTuristic, {
        include: [{
          model: Photo,
        }]
      })
       
       


       res.status(200).send(detailsTuristic)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
