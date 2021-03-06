import Head from "next/head"
import { assetPrefix } from '../next.config'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='shortcut icon' href={assetPrefix + '/favicon.ico'} />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Webdev Newz',
  keywords: 'Web development, programming',
  description: 'Get the latest news in web dev'
}

export default Meta
