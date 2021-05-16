import * as S from './styled'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de uma átomo e React Avançado escrito ao lado."
    />

    <S.Title>react avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Component
    </S.Description>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a tela com código."
    />
  </S.Wrapper>
)

export default Main
