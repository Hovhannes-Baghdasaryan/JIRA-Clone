import { IRequestState } from 'store/types'

// instead of any the real type after return
export interface SignInState extends IRequestState {
  data: any | null
}

export type IAuthInitialState = {
  signIn: SignInState
}
