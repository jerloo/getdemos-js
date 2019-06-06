import GetDemos, { AppQuery, AppQueryParam } from '../src/getdemos'

/**
 * Dummy test
 */
describe('GetDemos test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  // it('DummyClass is instantiable', () => {
  //   expect(new GetDemos(null)).toBeInstanceOf(GetDemos)
  // })

  it('AppQuery toString', () => {
    expect(new AppQuery().toString()).toEqual('pageIndex=0&pageSize=10')
  })

  it('AppQueryParam toString', () => {
    expect(new AppQueryParam(1, 'getdemos').toString()).toEqual('appId=1&name=getdemos')
  })
})
