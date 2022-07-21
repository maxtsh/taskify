import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--brr-1);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  min-height: 150px;

  .head {
    display: flex;
    justify-content: space-between;

    &-icons {
      display: flex;
      align-items: center;
      justify-content: center;

      &-move,
      &-dots {
        color: var(--gray-2);
        cursor: pointer;
      }

      &-dots {
        font-size: 1.2rem;
      }

      &-move {
        font-size: 1rem;
        margin-right: 0.5rem;
      }
    }

    &-emoji {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      font-size: 0.8rem;
      border-radius: 50%;
      padding: 0.25rem;
      background-color: var(--gray-3);
    }
  }

  .body {
    &-text {
      font-size: 90%;
      font-weight: 400;
      margin: 0.5rem 0rem;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-date {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.1rem 0.25rem;
      height: 25px;
      border-radius: var(--brr-1);
      background-color: var(--blue-1);

      &-text {
        color: #fff;
        font-size: 80%;
        font-weight: 300;
      }

      &-icon {
        font-size: 90%;
        color: #fff;
        margin-right: 0.25rem;
      }
    }

    &-avatars {
      display: flex;

      &-img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      &-img:not(:first-child) {
        margin-left: -8px;
      }
    }
  }
`;
