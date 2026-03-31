/**
 * Generates a unique 6-character alphanumeric room code
 * Format: Uppercase letters and numbers (excluding confusing chars like 0, O, I, 1)
 */

const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const CODE_LENGTH = 6;

/**
 * Generates a random room code
 * @returns A 6-character alphanumeric room code
 */
export function generateRoomCode(): string {
  let code = '';
  
  for (let i = 0; i < CODE_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * CHARSET.length);
    code += CHARSET[randomIndex];
  }
  
  return code;
}
