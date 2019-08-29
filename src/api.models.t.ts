import { stringify } from 'query-string'
import { AppRelease } from './getdemos.models'

export interface ApiMessage<T = any> {
  ok: boolean
  code: number
  msg: string
  data: T
}

export class Query {
  [index: string]: any

  pageIndex: number = 0
  pageSize: number = 10

  toString(): string {
    return stringify(this)
  }
}

export interface CheckUpdateResult {
  latest?: boolean
  release?: AppRelease
}
