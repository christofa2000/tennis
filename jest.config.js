// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^next/image$': '<rootDir>/__mocks__/next/image.js',
		'^next/link$': '<rootDir>/__mocks__/next/link.js',
	},
	collectCoverageFrom: [
		'components/**/*.{ts,tsx}',
		'app/**/*.{ts,tsx}',
		'lib/**/*.{ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!**/__tests__/**',
		'!**/__mocks__/**',
	],
	testMatch: [
		'**/__tests__/**/*.{ts,tsx}',
		'**/*.{test,spec}.{ts,tsx}',
	],
	testPathIgnorePatterns: [
		'/node_modules/',
		'/playwright/',
		'/.next/',
	],
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 70,
			lines: 70,
			statements: 70,
		},
	},
	transformIgnorePatterns: [
		'/node_modules/(?!(framer-motion)/)',
	],
}

module.exports = createJestConfig(customJestConfig)

