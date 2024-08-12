import { Link } from "react-router-dom"

const CharactersByHero = ({alter_ego, characters}) => {
  // if( alter_ego === characters ) return (<></>);
  // return <p><small>{characters}</small></p>

  return (alter_ego === characters)
    ? <></>
    : <p><small>{characters}</small></p>
}

export const HeroCard = ({ 
  id, 
  superHero,
  publisher,
  alter_ego,
  first_appearance,
  characters
 }) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutter">
          <div className="col-4 animate__animated animate__fadeIn">
            <img src={heroImageUrl} className="card-img" alt={superHero} />
          </div>

          <div className="col-8">
            <div className="cat-body">
              <h5 className="card-title">
                {superHero}
              </h5>
              <p className="card-text">{alter_ego}</p>
              {/* {
                (alter_ego !== characters) && (<p>{characters}</p>)
              } */}

              <CharactersByHero characters={characters} alter_ego={alter_ego}/>

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${ id }`}>
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}