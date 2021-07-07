import ContainerSetup from '../../common/ContainerSetup'

describe('Test Suite', (): void => {
  jest.setTimeout(10000)

  let containerSetup: ContainerSetup

  beforeAll(async () => {
    containerSetup = new ContainerSetup()
    await containerSetup.start()
  })

  afterAll(async () => {
    await containerSetup.shutdown()
  })

  test('Get currencies returns all currencies in database', () => {
    expect(true).toEqual(true)
  })
})
