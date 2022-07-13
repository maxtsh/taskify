import styled, { css } from "styled-components";

const active = css`
  background-color: #fff;
  padding: 0.5rem;
  border-radius: var(--brr-1);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

export const Container = styled.div`
  width: 100%;
  flex: 15%;
  padding: 2rem 1rem;
  background-color: var(--gray-1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .top {
    .logobox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${active}

      &-logo {
        display: flex;
        align-items: center;

        &-img {
          display: flex;
          align-items: center;
          margin-right: 0.5rem;

          img {
            width: 40px;
          }
        }

        &-title {
          font-size: 120%;
          font-weight: 700;
        }
      }
    }

    .nav {
      margin-top: 2rem;

      &-list {
        padding: 0;
        list-style: none;

        &-item {
          display: flex;
          align-items: center;
          color: var(--text-1);
          font-size: 100%;
          cursor: pointer;

          &-icon {
            font-size: var(--i-size-1);
            margin-right: 1rem;
          }

          :not(:first-child) {
            margin-top: 1rem;
          }
        }
      }
    }

    .access {
      margin-top: 2rem;

      &-list {
        padding: 0;
        list-style: none;

        &-item {
          display: flex;
          align-items: center;
          color: var(--black);
          font-size: 100%;
          padding: 0.5rem;
          cursor: pointer;

          &-icon-1 {
            font-size: var(--i-size-1);
            color: var(--gray-2);
            margin-right: 0.5rem;
          }

          &-icon-2 {
            font-size: var(--i-size-1);
            margin-right: 0.5rem;
            color: var(--black);
          }

          :not(:first-child) {
            margin-top: 0.5rem;
          }

          &.active {
            ${active}
          }
        }
      }
    }
  }

  .buttom {
    &-btnicon {
      font-size: 200%;
      color: #fff;
      margin-left: 0.5rem;
    }
  }
`;
