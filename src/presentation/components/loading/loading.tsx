import React from 'react'
import styles from './loading-styles.scss'

interface Props {
    loading: boolean
}

export default (props: Props) => {
    const cls = props.loading ? styles.loading : styles.loadingOpacity
    return <div className={cls}>loading<strong className={styles.dots}>...</strong></div>
}