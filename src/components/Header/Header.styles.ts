import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  .left {
    display: flex;
    align-items: center;

    &-title {
      font-size: 200%;
      font-weight: 700;
    }

    &-icon {
      font-size: 200%;
      margin-right: 0.5rem;
    }
  }

  .right {
    display: flex;

    &-item {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--gray-1);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &-search {
        font-size: 1.2rem;
      }

      &-notif {
        font-size: 1.5rem;
      }

      &-avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      &-count {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 20px;
        height: 20px;
        top: -2px;
        right: 1px;
        font-size: 90%;
        font-weight: 400;
        border-radius: 50%;
        color: #fff;
        background-color: var(--red-1);
      }

      :not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;
