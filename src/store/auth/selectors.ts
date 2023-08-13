import { RootState } from 'types'

const getSignIn = (state: RootState) => state.auth.signIn

export const AuthSelectors = {
  getSignIn,
}
