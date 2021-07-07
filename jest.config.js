function commonTestConfig() {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    }
  }
}

module.exports = {
  projects: [
    Object.assign(commonTestConfig(), {
      displayName: 'unit',
      testMatch: ['<rootDir>/__tests__/unit-tests/**/*.test.+(ts|tsx|js)']
    }),
    Object.assign(commonTestConfig(), {
      displayName: 'integration',
      testMatch: ['<rootDir>/__tests__/integration-tests/**/*.test.+(ts|tsx|js)']
    })
  ]
}
