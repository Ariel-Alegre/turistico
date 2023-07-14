const { User } = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

module.exports = {
  RegisterUser: async (req, res) => {
    const { name, lastName, password, email, phone } = req.body;

    try {

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
