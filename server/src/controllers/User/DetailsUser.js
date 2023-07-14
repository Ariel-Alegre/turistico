require('dotenv').config();
const bcrypt = require('bcrypt');
const { jwtVerify } = require("jose");
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const key = '111111111111111111111111'; // hard code
const iv = '2222222222222222'; // Vector de inicialización aleatorio (16 bytes)
const { User, UserDetails  } = require("../../database/models");


// Función para descifrar el token
function decryptToken(encryptedToken) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decryptedToken = decipher.update(encryptedToken, 'hex', 'utf8');
  decryptedToken += decipher.final('utf8');
  return decryptedToken;
}

module.exports = {
  DetailUser: async (req, res) => {
    const { authorization } = req.headers;

    if (!authorization) return res.sendStatus(401);

    try {
      // Descifrar el token
      const decryptedToken = decryptToken(authorization);

      // Verificar el token JWT
      const encoder = new TextEncoder();
      const { payload } = await jwtVerify(
        decryptedToken,
        encoder.encode('asfdafsdsdfasdfasdf')
      );

      // Obtener todos los datos del usuario desde la base de datos
      const user = await User.findOne({ where: { id: payload.id } });


      if (!user) {
        console.log('Usuario no encontrado');
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Enviar todos los datos del usuario como respuesta
      return res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
