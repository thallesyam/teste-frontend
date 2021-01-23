import { ReactChild, ReactChildren } from 'react'

export interface DefaultValue {
  count: string | number | null
  handleCount: React.Dispatch<React.SetStateAction<string | number | null>>
}

export interface AuxProps {
  children: ReactChild | ReactChildren
}
