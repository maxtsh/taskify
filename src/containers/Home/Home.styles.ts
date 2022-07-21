import styled from "styled-components";

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
      padding: 0.45rem 0.5rem;
      background-color: var(--gray-3);
      border-radius: var(--brr-1);

      &-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;

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

      :not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;
