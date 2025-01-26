/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'

import type {
  CreatePetsBody,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from './endpoints.schemas'
import type { BodyType, ErrorType } from './mutator/custom-instance'
import { customInstance } from './mutator/custom-instance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * @summary List all pets
 */
export const listPets = (
  params?: ListPetsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<Pets>(
    { url: `/pets`, method: 'GET', params, signal },
    options,
  )
}

export const getListPetsQueryKey = (params?: ListPetsParams) => {
  return [`/pets`, ...(params ? [params] : [])] as const
}

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getListPetsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> }
}

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>
export type ListPetsQueryError = ErrorType<Error>

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params: undefined | ListPetsParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPets>>,
          TError,
          TData
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>
}
export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPets>>,
          TError,
          TData
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary List all pets
 */

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getListPetsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Create a pet
 */
export const createPets = (
  createPetsBody: BodyType<CreatePetsBody>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<Pet>(
    {
      url: `/pets`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createPetsBody,
      signal,
    },
    options,
  )
}

export const getCreatePetsMutationOptions = <
  TData = Awaited<ReturnType<typeof createPets>>,
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: BodyType<CreatePetsBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const mutationKey = ['createPets']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: BodyType<CreatePetsBody> }
  > = (props) => {
    const { data } = props ?? {}

    return createPets(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: BodyType<CreatePetsBody> },
    TContext
  >
}

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>
export type CreatePetsMutationBody = BodyType<CreatePetsBody>
export type CreatePetsMutationError = ErrorType<Error>

/**
 * @summary Create a pet
 */
export const useCreatePets = <
  TData = Awaited<ReturnType<typeof createPets>>,
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: BodyType<CreatePetsBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  TData,
  TError,
  { data: BodyType<CreatePetsBody> },
  TContext
> => {
  const mutationOptions = getCreatePetsMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Info for a specific pet
 */
export const showPetById = (
  petId: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<Pet>(
    { url: `/pets/${petId}`, method: 'GET', signal },
    options,
  )
}

export const getShowPetByIdQueryKey = (petId: string) => {
  return [`/pets/${petId}`] as const
}

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!petId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof showPetById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> }
}

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>
export type ShowPetByIdQueryError = ErrorType<Error>

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof showPetById>>,
          TError,
          TData
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>
}
export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof showPetById>>,
          TError,
          TData
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Info for a specific pet
 */

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getShowPetByIdQueryOptions(petId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
