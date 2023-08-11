require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const key = '111111111111111111111111'; // hard code
const iv = '2222222222222222'; // Vector de inicialización aleatorio (16 bytes)

function encryptToken(token) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encryptedToken = cipher.update(token, 'utf8', 'hex');
  encryptedToken += cipher.final('hex');
  return encryptedToken;
}

function decryptToken(encryptedToken) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decryptedToken = decipher.update(encryptedToken, 'hex', 'utf8');
  decryptedToken += decipher.final('utf8');
  return decryptedToken;
}

module.exports = {
  LoginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Buscar usuario por email
      const user = await User.findOne({ where: { email } });
      console.log(user);

      if (!user) {
        console.log('Usuario no encontrado');
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Verificar si la contraseña es correcta
      const isMatch = await bcrypt.compare(password, user.password);

  
      if (!isMatch) {
        console.log('Contraseña incorrecta');
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }

      // Verificar el rol del usuario

      // Crear y firmar el token JWT
      let role = 'user';
      if (user.role === 'admin') {
        role = 'admin';
      }

      if (user.role === "user") {
        const token = jwt.sign(
          {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            role: role, // Incluir el rol del usuario en el token
          },
          'asfdafsdsdfasdfasdf',
          { expiresIn: '8h' }
        );
        const encrypt = encryptToken(token);
  
        // Enviar el token JWT en la respuesta
        console.log('Inicio de sesion de usuario');
        return res.json({ token: encrypt });
      }

      const payload =     {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        role: role, // Incluir el rol del usuario en el token
      }

      if (user.role === "admin") {
        const token = jwt.sign(
          payload,
          'adminClave',
          { expiresIn: '1h' }
        );
        const encrypt = encryptToken(token);
  
        // Enviar el token JWT en la respuesta
        console.log('Inicio de sesion de usuario');
        return res.json({ token: encrypt });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
