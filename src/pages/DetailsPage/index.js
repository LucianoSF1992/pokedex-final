import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { URL_BASE } from "../../services/api";
import axios from "axios";
import Header from "../../components/Header";
import {
  ImagesContainer,
  ImgWrapper,
  MovesContainer,
  PokeInfosContainer,
  StatsContainer,
  TitleContainer,
  TypeAndMovesContainer,
  TypesContainer,
} from "./style";

export default function DetailsPage() {
  const { name } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_BASE}/${name}`)
      .then((resposta) => {
        setDetail(resposta.data);
      })
      .catch((erro) => {
        alert(erro);
      });
  }, [name]);

  return (
    <div>
      <Header
        button={
          <div>
            <button>
              <NavLink to={"/pokedex"}>Ver pokedex</NavLink>
            </button>
            <button>
              <NavLink to={"/"}>Ir para Home</NavLink>
            </button>
          </div>
        }
      />
      {detail && detail.sprites && (
        <PokeInfosContainer>
          <ImagesContainer>
            <ImgWrapper src={detail.sprites.front_default} />
            <ImgWrapper src={detail.sprites.back_default} />
          </ImagesContainer>
          <StatsContainer>
            <TitleContainer>Poderes</TitleContainer>
            {detail &&
              detail.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    <strong>{stat.stat.name}: </strong>
                    {stat.base_stat}
                  </p>
                );
              })}
          </StatsContainer>
          <TypeAndMovesContainer>
            <TypesContainer>
              {detail &&
                detail.types.map((type) => {
                  return <p key={type.type.name}>{type.type.name}</p>;
                })}
            </TypesContainer>
            <MovesContainer>
              <TitleContainer>Principais ataques</TitleContainer>
              {detail &&
                detail.moves.map((move, index) => {
                  return (
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                  );
                })}
            </MovesContainer>
          </TypeAndMovesContainer>
        </PokeInfosContainer>
      )}
    </div>
  );
}
