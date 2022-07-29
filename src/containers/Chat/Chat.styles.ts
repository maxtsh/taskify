import styled from "styled-components";
import { Responsive } from "styles/Mixins";

export const Container = styled.div`
  width: 100%;
  flex: 25%;
  padding: 2rem 1rem;
  border-left: 1px solid var(--gray-1);

  ${Responsive.laptop.standard`
    display: none;
  `}
`;
