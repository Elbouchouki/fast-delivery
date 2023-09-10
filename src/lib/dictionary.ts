import 'server-only'
import type { Locale } from '@/i18n.config'
import { DictionaryEntry } from '../types'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  ar: () => import('@/dictionaries/ar.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]() as Promise<DictionaryEntry>
}