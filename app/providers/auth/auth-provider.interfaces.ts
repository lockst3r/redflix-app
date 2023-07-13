import { Dispatch, SetStateAction } from 'react'

import { IUser } from '../../shared/types/user.interfaces'

export type TypeUserState = IUser | null

export interface IContext {
	user: TypeUserState
	setUser: Dispatch<SetStateAction<TypeUserState>>
}