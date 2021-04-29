import { rest } from 'msw'

import { APIENDPOINT } from '../config/endpoints'
import {
  mockProduct01,
  mockProduct02,
  mockProduct03,
  mockProduct04,
} from './products'
export const handlers = [
  rest.get(APIENDPOINT, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([mockProduct01, mockProduct02, mockProduct03, mockProduct04])
    )
  }),
]
