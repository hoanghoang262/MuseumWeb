import * as crypto from 'crypto';

function hashPassword(plaintextPassword) {
  const hash = crypto.createHash('sha256');
  hash.update(plaintextPassword);
  return hash.digest('hex');
}

export default hashPassword
