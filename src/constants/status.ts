export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export const StatusMap = {
  [Status.ACTIVE]: 'Ativo',
  [Status.INACTIVE]: 'Inativo',
}

export interface IStatusOption {
  value: Status
  name: string
}

export const statusOptions: IStatusOption[] = (
  Object.keys(Status) as (keyof typeof Status)[]
).map((type) => {
  return {
    value: Status[type],
    name: StatusMap[Status[type]],
  }
})
