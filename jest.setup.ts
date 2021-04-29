import '@testing-library/jest-dom'

import nodeFetch from 'node-fetch'

import { server } from './mocks/server'

global.fetch = nodeFetch

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
