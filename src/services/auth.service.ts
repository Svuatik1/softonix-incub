
class AuthService {
  // auth/v1/token?grant_type=password
  login (payload: ILoginRequest) {
    return useHttp.post('auth/v1/token?grant_type=password', payload)
  }

  // auth/v1/signup
  register (payload) {
    return useHttp.post('auth/v1/signup', payload)
  }

  // auth/v1/token?grant_type=refresh_token / { refresh_token: "the-refresh-token" }
  refreshToken () {
    return ''
  }
}

export const authService = new AuthService()
