import {
  PokeCardContainer,
  ImgContainer,
  PokeImg,
  ButtonsContainer,
} from "./style";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg
          src={props.pokemons.sprites.front_default}
          alt={"imagem do pokemon"}
        />
      </ImgContainer>
      <ButtonsContainer>
        <button onClick={() => props.fun(props.pokemons)}>
          {props.actionOne}
        </button>
        {props.actionSec && (
          <button>
            <NavLink to={`details/${props.pokemons.name}`}>
              {props.actionSec}
            </NavLink>
          </button>
        )}
      </ButtonsContainer>
    </PokeCardContainer>
  );
}
