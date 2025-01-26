export const queryKeys = {
  users: 'users',
  products: 'products',
  companies: 'companies',
  roles: 'roles',
}

export const mutationKeys = {
  auth: {
    recoverPassword: 'recover-password',
    resetPassword: 'reset-password',
  },
  products: {
    create: 'create-product',
  },
  users: {
    create: 'create-user',
    update: 'update-user',
  },
}
