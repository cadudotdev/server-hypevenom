import * as bcrypt from 'bcrypt';

export async function generateCrypt(password: string, salt: string) {
  return await bcrypt.hash(password, salt);
}

export async function generateSalt(rouds: number) {
  return await bcrypt.genSalt(rouds);
}
