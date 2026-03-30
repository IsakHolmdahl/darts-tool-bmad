import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

// Resolve project root from tests/unit directory (go up 2 levels)
const projectRoot = join(__dirname, '..', '..');

// Helper function to read and parse JSON files
function readJsonFile<T>(filePath: string): T {
  const content = readFileSync(join(projectRoot, filePath), 'utf-8');
  return JSON.parse(content) as T;
}

describe('Project Initialization', () => {
  describe('Core Dependencies', () => {
    it('should have Next.js installed', () => {
      const packageJson = readJsonFile<{ dependencies: Record<string, string> }>('package.json');
      expect(packageJson.dependencies.next).toBeDefined();
      expect(packageJson.dependencies.next).toMatch(/^\d+/);
    });

    it('should have React installed', () => {
      const packageJson = readJsonFile<{ dependencies: Record<string, string> }>('package.json');
      expect(packageJson.dependencies.react).toBeDefined();
      expect(packageJson.dependencies.react).toMatch(/^\d+/);
    });

    it('should have TypeScript installed', () => {
      const packageJson = readJsonFile<{ devDependencies: Record<string, string> }>('package.json');
      expect(packageJson.devDependencies.typescript).toBeDefined();
    });

    it('should have Tailwind CSS configured', () => {
      const packageJson = readJsonFile<{ devDependencies: Record<string, string> }>('package.json');
      expect(packageJson.devDependencies.tailwindcss).toBeDefined();
    });

    it('should have ESLint configured', () => {
      const packageJson = readJsonFile<{ devDependencies: Record<string, string> }>('package.json');
      expect(packageJson.devDependencies.eslint).toBeDefined();
    });
  });

  describe('Additional Dependencies', () => {
    it('should have partykit installed', () => {
      const packageJson = readJsonFile<{ dependencies: Record<string, string> }>('package.json');
      expect(packageJson.dependencies.partykit).toBeDefined();
    });

    it('should have partysocket installed', () => {
      const packageJson = readJsonFile<{ dependencies: Record<string, string> }>('package.json');
      expect(packageJson.dependencies.partysocket).toBeDefined();
    });

    it('should have zustand installed', () => {
      const packageJson = readJsonFile<{ dependencies: Record<string, string> }>('package.json');
      expect(packageJson.dependencies.zustand).toBeDefined();
    });

    it('should have vitest installed', () => {
      const packageJson = readJsonFile<{ devDependencies: Record<string, string> }>('package.json');
      expect(packageJson.devDependencies.vitest).toBeDefined();
    });

    it('should have @testing-library/react installed', () => {
      const packageJson = readJsonFile<{ devDependencies: Record<string, string> }>('package.json');
      expect(packageJson.devDependencies['@testing-library/react']).toBeDefined();
    });

    it('should have @playwright/test installed', () => {
      const packageJson = readJsonFile<{ devDependencies: Record<string, string> }>('package.json');
      expect(packageJson.devDependencies['@playwright/test']).toBeDefined();
    });
  });

  describe('Directory Structure', () => {
    it('should have src/app directory for Next.js routing', () => {
      expect(existsSync(join(projectRoot, 'src/app'))).toBe(true);
    });

    it('should have src/components directory', () => {
      expect(existsSync(join(projectRoot, 'src/components'))).toBe(true);
    });

    it('should have src/lib directory', () => {
      expect(existsSync(join(projectRoot, 'src/lib'))).toBe(true);
    });

    it('should have src/party directory for PartyKit server', () => {
      expect(existsSync(join(projectRoot, 'src/party'))).toBe(true);
    });

    it('should have src/stores directory for Zustand stores', () => {
      expect(existsSync(join(projectRoot, 'src/stores'))).toBe(true);
    });

    it('should have src/types directory for TypeScript definitions', () => {
      expect(existsSync(join(projectRoot, 'src/types'))).toBe(true);
    });

    it('should have public/audio directory for voice clips', () => {
      expect(existsSync(join(projectRoot, 'public/audio'))).toBe(true);
    });

    it('should have tests directory structure', () => {
      expect(existsSync(join(projectRoot, 'tests/unit'))).toBe(true);
      expect(existsSync(join(projectRoot, 'tests/integration'))).toBe(true);
      expect(existsSync(join(projectRoot, 'tests/e2e'))).toBe(true);
    });
  });

  describe('Configuration Files', () => {
    it('should have partykit.json configured', () => {
      const partykitConfig = readJsonFile<{ name: string; main: string }>('partykit.json');
      expect(partykitConfig.name).toBe('darts-tool-bmad');
      expect(partykitConfig.main).toBe('src/party/server.ts');
    });

    it('should have .env.example file', () => {
      expect(existsSync(join(projectRoot, '.env.example'))).toBe(true);
    });

    it('should have tsconfig.json with strict mode', () => {
      const tsconfig = readJsonFile<{ compilerOptions: { strict: boolean } }>('tsconfig.json');
      expect(tsconfig.compilerOptions.strict).toBe(true);
    });

    it('should have @/* import alias configured', () => {
      const tsconfig = readJsonFile<{ compilerOptions: { paths: Record<string, string[]> } }>('tsconfig.json');
      expect(tsconfig.compilerOptions.paths['@/*']).toBeDefined();
      expect(tsconfig.compilerOptions.paths['@/*'][0]).toBe('./src/*');
    });

    it('should have Turbopack configured in dev script', () => {
      const packageJson = readJsonFile<{ scripts: { dev: string } }>('package.json');
      expect(packageJson.scripts.dev).toContain('--turbopack');
    });
  });
});
