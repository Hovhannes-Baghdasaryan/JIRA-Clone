import type { FC } from 'react'

import { T_DragCard } from './types'
import styles from './DragCard.module.scss'

const DragCard: FC<T_DragCard> = ({ title }) => {
  return <p className={styles.title}>{title}</p>
}

export default DragCard
