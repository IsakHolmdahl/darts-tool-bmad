import { describe, it, expect } from 'vitest';
import { generateRoomCode } from '@/lib/utils/generateRoomCode';

describe('generateRoomCode', () => {
  it('should generate a 6-character room code', () => {
    const code = generateRoomCode();
    expect(code).toHaveLength(6);
  });

  it('should only contain uppercase alphanumeric characters', () => {
    const code = generateRoomCode();
    expect(code).toMatch(/^[A-Z0-9]+$/);
  });

  it('should not contain ambiguous characters (0, O, I, 1)', () => {
    const code = generateRoomCode();
    expect(code).not.toMatch(/[0OI1]/);
  });

  it('should generate unique codes (basic randomness check)', () => {
    const codes = new Set<string>();
    for (let i = 0; i < 100; i++) {
      codes.add(generateRoomCode());
    }
    // With 6 chars from 32-char set, collisions unlikely in 100 tries
    expect(codes.size).toBeGreaterThan(90);
  });
});
