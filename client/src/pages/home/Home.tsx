import React from 'react'
import styles from './home.module.scss'
import { Header } from '../../components/index'
import parking from '../../assets/imgs/parking.svg'
import phone from '../../assets/imgs/phone.svg'
import bestPark from '../../assets/imgs/partners/bestPark.svg'
import estapar from '../../assets/imgs/partners/estapar.svg'
import filePark from '../../assets/imgs/partners/filePark.svg'
import multiPark from '../../assets/imgs/partners/multiPark.svg'
import clsx from 'clsx'

function Home() {
  return (
    <div>
      <Header />
      <body>
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.contentText}>
              <img src={parking} alt="Estacionamento imagem"/>
              <div className={styles.text}>
                <h1>VagaKey</h1>
                <p>
                  A gerência do seu estacionamento na palma da sua mão. Isso mesmo, chegamos para facilitar seu gerenciamento
                  relacionado a quantidade de vagas disponiveis e quais estão sendo ocupadas. Além da disponibilização de um APP 
                  aos seus clientes que não irão mais perder tempo procurando vagas ou contado com a sorte, com o VagaKey seu cliente 
                  reserva sua vaga e você gerencia seu estacionamento.
                </p>
              </div>
            </div>
            <div className={styles.contentText}>
              <div className={clsx(styles.text, [styles.textTwo])}>
                <div className={styles.alignContentTwo}>
                  <h2>Nossos gráficos</h2>
                  <p>
                    Os usuários também podem receber informações sobre a disponibilidade de estacionamento em tempo real, permitindo que eles 
                    encontrem um lugar para estacionar rapidamente.
                  </p>
                  <p>
                    Apresentamos em tempo real dados como a lotação de vagas, movimentação, reservas e tudo o que seu cliente precisa saber para sair de casa despreocupado.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.contentText}>
              <div className={styles.text}>
                <h2>Conheça nossos cálculos</h2>
                <p>
                  A gerência do seu estacionamento na palma da sua mão. Isso mesmo, chegamos para facilitar seu gerenciamento
                  relacionado a quantidade de vagas disponiveis e quais estão sendo ocupadas. Além da disponibilização de um APP 
                  aos seus clientes que não irão mais perder tempo procurando vagas ou contado com a sorte, com o VagaKey seu cliente 
                  reserva sua vaga e você gerencia seu estacionamento.
                </p>
              </div>
            </div>
            <div className={styles.partners}>
              <h2>Quem utiliza nossos serviços</h2>
              <div className={styles.cards}>
                <div className={styles.partner}>
                  <img src={bestPark} alt='bestPark'/>
                </div>
                <div className={styles.partner}>
                  <img src={estapar} alt='estapar'/>
                </div>
                <div className={styles.partner}>
                  <img src={filePark} alt='filePark' className={styles.filePark}/>
                </div>
                <div className={styles.partner}>
                  <img src={multiPark} alt='multiPark'/>
                </div>
              </div>
            </div>
            <div className={styles.contentFooter}>
              <div className={styles.text}>
                <h2>Vem fazer parte do time também</h2>
                <a href=''>
                  <button type='submit'>
                    <p>Contratar Serviço</p>
                  </button>
                </a>
              </div>
              <img src={phone} alt="Telefone"/>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Home