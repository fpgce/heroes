module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{ts,tsx}",
        "!**/*.d.ts"
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
    ],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    transform: {
        ".+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
        '@/(.*)': '<rootDir>/src/$1',
        // '\\.scss$': 'identity-obj-proxy'
    },
};
