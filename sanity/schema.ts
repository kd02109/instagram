import { type SchemaTypeDefinition } from 'sanity'


import post from './schemas/post'
import user from './schemas/user'
import comment from './schemas/comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, user, comment],
}
