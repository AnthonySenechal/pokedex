import PropTypes from 'prop-types';



function PokemonCard (props) {
    return (
    <figure className="card">
        {props.imgSrc ? (
            <img src={props.imgSrc} alt={props.name}/>
        ) : (
            <p>???</p>
        )
        }
        <figcaption>Bulbasaur</figcaption>
    </figure>
    );
  }
  PokemonCard.proptype = {
    pokemon: PropTypes.shape ({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }) .isRequired,
  }



export default PokemonCard  

