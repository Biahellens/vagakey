import React from 'react'
import styles from './loading.module.scss'
import { Header } from '../../components/index'

function Loading() {
  return (
    <div>
      <Header />
      <body>
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.contentText}>
              <div className={styles.text}>
                <h1>VagaKey</h1>
                <p>
                 Em Contrução...
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Loading