/* eslint-disable no-undef */
import axios, { AxiosInstance } from 'axios'
import qs from 'querystring'

export interface ApiMessage<T = any> {
  ok: boolean
  code: number
  msg: string
  data: T
}

export interface LoginModel {
  userName: string
  password: string
}

export interface App {
  id: number
  name: string
  title: string
  description: string
  icon: string
  packageName: string
}

export interface Release {
  id: number
  appId: number
  notes: string
  version: string
  visible: boolean
  apkUrl: string
}

export class AppQuery {
  pageIndex: number = 0
  pageSize: number = 10

  toString(): string {
    return qs.stringify(this)
  }
}

export class AppQueryParam {
  appId?: number
  name?: string

  toString(): string {
    return qs.stringify(this)
  }
}

export interface Invitation {
  id: number
  code: string
  userId: number
  appId: number
}

export default class GetDemos {
  client: AxiosInstance

  constructor(storage: Storage) {
    this.client = axios.create({
      baseURL: 'https://getdemos.pro'
    })

    this.client.interceptors.request.use(
      async configs => {
        const token = await storage.getItem('token')
        if (token) {
          configs.headers.Authorization = `Bearer ${token}`
        }
        console.log('[request]', configs)
        return configs
      },
      error => {
        // Do something with request error
        return Promise.reject(error)
      }
    )

    this.client.interceptors.response.use(
      response => {
        console.log('[response]', response)
        console.log('status', response.status)
        switch (response.status) {
          case 500:
            return Promise.reject({
              ok: false,
              msg: '服务器内部错误'
            })
        }
        if (response.data.ok) {
          return response
        } else {
          return Promise.reject(response)
        }
      },
      error => {
        // Do something with request error
        return Promise.reject(error.response)
      }
    )
  }

  /**
   * 登录
   * @param payload 登录模型
   */
  async doLogin(payload: LoginModel) {
    return await this.client.post<ApiMessage<string>>('/api/auth', payload)
  }

  /**
   * 获取所有APP
   * @param payload 查询条件
   */
  async getAllApps(payload: AppQuery) {
    return await this.client.get<ApiMessage<App[]>>(`/api/apps?${payload.toString()}`)
  }

  /**
   * 获取APP详情
   * @param appQueryParams APP参数
   */
  async getAppInfo(appQueryParams: AppQueryParam) {
    return await this.client.get<ApiMessage<App>>(`/api/apps/info?id=${appQueryParams.toString()}`)
  }

  /**
   * 获取APP最后一次发布的版本
   * @param appQueryParams APP查询参数
   */
  async getAppLatestRelease(appQueryParams: AppQueryParam) {
    return await this.client.get<ApiMessage<Release>>(
      `/api/apps/releases/latest${appQueryParams.toString()}`
    )
  }

  /**
   * 获取APP所有版本
   * @param appQueryParams APP查询参数
   */
  async getAllAppReleases(appQueryParams: AppQueryParam) {
    return await this.client.get<ApiMessage<Release[]>>(
      `/api/apps/releases?id=${appQueryParams.toString()}`
    )
  }

  /**
   * 发布一个新版本
   * @param payload 发布版本信息
   */
  async releaseNewVersion(payload: Release) {
    return await this.client.post<ApiMessage<Release>>('/api/apps/releases', payload)
  }

  /**
   * 生成邀请码
   * @param appId 为APP生成一个新的邀请码
   */
  async getInvitation(appId: number) {
    return await this.client.get<ApiMessage<Invitation>>(`/api/apps/invitation?appId=${appId}`)
  }

  /**
   * 确认邀请
   * @param payload 邀请码内容
   */
  async confirmInvitation(payload: Invitation) {
    return await this.client.post<ApiMessage<Invitation>>('/api/apps/invitation', payload)
  }

  /**
   * 创建APP
   * @param payload APP详情
   */
  async addApp(payload: App) {
    return await this.client.post<ApiMessage<App>>('/api/apps', payload)
  }
}
