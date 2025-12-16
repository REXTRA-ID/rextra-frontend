import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const getAccessToken = (): string | undefined =>
  cookies.get('@rextra/access_token')
export const getRefreshToken = (): string | undefined =>
  cookies.get('@rextra/refresh_token')

export const setAccessToken = (token: string) => {
  cookies.set('@rextra/access_token', token, {
    path: '/',
    secure: true,
    sameSite: 'strict',
  })
}
export const setRefreshToken = (token: string) => {
  cookies.set('@rextra/refresh_token', token, {
    path: '/',
    secure: true,
    sameSite: 'strict',
  })
}

export const removeTokens = () => {
  cookies.remove('@rextra/access_token', { path: '/' })
  cookies.remove('@rextra/refresh_token', { path: '/' })
}
