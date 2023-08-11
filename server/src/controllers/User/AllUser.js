const { User, Post } = require('../../database/models') 

module.exports = {
  AllUser: async (req, res) => {

    try {
        const users = await User.findAll({
        includes: [{model: Post }]

        })
        console.log(users);
        if (users) {
            
            res.status(200).send(users)
        } else {
            res.status(404).send({
                message: 'No existen los usuarios'
            })

        }

    

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
