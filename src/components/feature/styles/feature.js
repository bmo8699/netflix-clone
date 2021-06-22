import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 134px 45px;
  color: white;
  text-align: center;
  border-bottom: 8px solid #222;
`

export const Title = styled.h1`
  font-size: 3.125rem;
  max-width: 640px;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: 400;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`