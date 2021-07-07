import {GenericContainer, StartedTestContainer} from 'testcontainers'
import supertest, {SuperTest} from 'supertest'

class ContainerSetup {
  private static TEST_PG_USER: string = process.env.TESTPGUSER || 'postgres'
  private static TEST_PG_PASSWORD: string = process.env.TESTPGPASSWORD || 'postgres'
  private static TEST_PG_PORT: number = Number(process.env.TESTPGPORT) || 5432

  private postgresContainer!: StartedTestContainer

  constructor() {}

  public async start(): Promise<SuperTest<any>> {
    // Start postgres
    this.postgresContainer = await new GenericContainer('postgres')
      .withExposedPorts(ContainerSetup.TEST_PG_PORT)
      .withEnv('POSTGRES_USER', ContainerSetup.TEST_PG_USER)
      .withEnv('POSTGRES_PASSWORD', ContainerSetup.TEST_PG_PASSWORD)
      .withStartupTimeout(30000)
      .start()

    return supertest('http://localhost:' + this.postgresContainer.getMappedPort(ContainerSetup.TEST_PG_PORT))
  }

  public async shutdown() {
    if (this.postgresContainer) {
      await this.postgresContainer.stop()
    }
  }
}

export default ContainerSetup
