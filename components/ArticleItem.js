import articleStyles from '../styles/Articles.module.css'
import Link from 'next/link'
import { assetPrefix } from '../next.config'

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`${assetPrefix}/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
