import 'jest-localstorage-mock'

import GetDemos, { AppQuery, AppQueryParam, GETDEMOS_TOKEN } from '../src/getdemos'
/**
 * Dummy test
 */
describe('GetDemos test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('GetDemos is instantiable', () => {
    expect(new GetDemos(localStorage)).toBeInstanceOf(GetDemos)
  })

  it('AppQuery toString', () => {
    expect(new AppQuery().toString()).toEqual('pageIndex=0&pageSize=10')
  })

  it('AppQueryParam toString', () => {
    expect(new AppQueryParam(1, 'getdemos').toString()).toEqual('appId=1&name=getdemos')
  })

  const engine = new GetDemos(localStorage)

  it('doLogin successful', () => {
    engine.doLogin({ userName: 'admin', password: 'admin' }).then(res => {
      expect(res.data.ok).toBeTruthy()
      expect(res.data.data).toEqual(localStorage.__STORE__[GETDEMOS_TOKEN])
    })
  })
})
