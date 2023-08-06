import React from 'react'
import clsx from 'clsx'
import styles from './header.module.scss'
import vk from '../../assets/icons/vkIcon.svg'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.items}>
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={vk} alt="vaga-key" />
          </div>
          <div className={styles.links}>
            <div className={clsx(styles.link, [styles.actualPage])}>
              <p>Home</p>
            </div>
            <div className={clsx(styles.link, [styles.pages])}>
              <p>Aplicativo</p>
            </div>
            <div className={clsx(styles.link, [styles.pages])}>
              <p>Mapa de Vagas</p>
            </div>
            <div className={clsx(styles.link, [styles.pages])}>
              <p>Custos</p>
            </div>
          </div>
        </div>
        <div className={styles.login}>
          <a>
            <button type='submit'>
              <p>Login</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header