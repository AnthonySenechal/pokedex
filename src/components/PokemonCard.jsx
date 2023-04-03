import PropTypes from 'prop-types';



function PokemonCard (props) {
    return (
    <figure className="card">
        {props.imgSrc ? (
            <img src={props.imgSrc} alt={props.name} className="card-img"/>
        ) : (
            <p>???</p>
        )
        }
        <figcaption>{props.name}</figcaption>
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

