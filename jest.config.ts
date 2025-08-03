import type { Config } from "jest"

export default async (): Promise<Config> => ({
  resetMocks: true,
  displayName: "Interview Sandbox",
  testMatch: ["<rootDir>/src/**/__tests__/*.test.ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.jest.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: ".coverage/unit",
})
