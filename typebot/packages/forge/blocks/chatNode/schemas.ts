// Do not edit this file manually
import { parseBlockCredentials, parseBlockSchema } from '@typebot.io/forge'
import { chatNodeBlock } from '.'
import { auth } from './auth'

export const chatNodeBlockSchema = parseBlockSchema(chatNodeBlock)
export const chatNodeCredentialsSchema = parseBlockCredentials(
  chatNodeBlock.id,
  auth.schema
)