import { Locale } from '@/i18n.config'
import { redirect } from 'next/navigation'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  redirect(`/${lang}/signin`)

  return (
    <section className='py-24'>
      Empty
    </section>
  )
}