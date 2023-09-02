import React from 'react'
import clsx from 'clsx'
import styles from './header.module.scss'
import vk from '../../assets/icons/vkIcon.svg'
import { Link } from 'react-router-dom'
import { LinkHeader } from './styles'

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
              <LinkHeader to='/aboutApp'><p>Sobre o aplicativo</p></LinkHeader>
            </div>
            <div className={clsx(styles.link, [styles.pages])}>
            <LinkHeader to='/vacancyMapCustomer'><p>Mapa de Vagas</p></LinkHeader>
            </div>
            <div className={clsx(styles.link, [styles.pages])}>
              <LinkHeader to='/aboutApp'><p>Custos</p></LinkHeader>
            </div>
            <div className={clsx(styles.link, [styles.pages])}>
              <LinkHeader to='/'><p>Contate-nos</p></LinkHeader>
            </div>
          </div>
        </div>
        <div className={styles.login}>
          <a>
            <button type='submit'>
              <LinkHeader to='/loginPartner'><p>Login</p></LinkHeader>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header