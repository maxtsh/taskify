import styled from "styled-components";
import { Responsive } from "styles/Mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .heading {
    &-text {
      font-size: 90%;
      font-weight: 400;

      &-new {
        border-radius: var(--brr-1);
        padding: 0.25rem;
        color: var(--blue-1);
        background-color: var(--gray-1);
      }
    }
  }

  .tasks {
    margin-top: 2rem;
    flex: 1;
    display: flex;

    &-item {
      display: flex;
      flex-direction: column;
      flex: 33.33%;

      &-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.45rem 0.5rem;
        background-color: var(--gray-3);
        border-radius: var(--brr-1);

        &-title {
          color: var(--black);
          font-size: 90%;
          font-weight: 500;
        }

        &-count {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80%;
          font-weight: 300;
          width: 20px;
          height: 20px;
          color: #fff;
          border-radius: var(--brr-1);
          padding: 0.25rem;
          background-color: var(--black);
        }
      }

      &-list {
        &-add {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          border: 1px dashed var(--gray-4);
          border-radius: var(--brr-1);
          cursor: pointer;

          &-icon {
            font-size: 3rem;
            color: var(--gray-4);
          }
        }
      }

      :not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  ${Responsive.tablet.standard`

  .tasks{
    flex-direction: column;

      &-item{
        margin-top: 2rem;
        margin-right: 0 !important;
        flex: 100%;
      }
    }
  `}
`;
