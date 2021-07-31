import homeImg from '../../assets/homeImg.jpg'

export function Home() {
  return (
    <div className="home">
      <div>
        <img src={homeImg} alt="cabelo loiro e cacheado" />
      </div>

      <div>
        <h1>Saúde natural para os seus cabelos</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          eligendi, at maiores aperiam, porro excepturi fuga magni magnam eaque
          odit nesciunt. Quidem iusto aperiam, sunt quod autem corporis unde
          eaque.
        </p>
      </div>
    </div>
  )
}
