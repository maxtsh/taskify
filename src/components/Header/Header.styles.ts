import styled from "styled-components";
import { Responsive } from "styles/Mixins";

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

  .hamburger {
    width: 40px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    display: none;

    span {
      position: absolute;
      display: block;
      height: 5px;
      width: 100%;
      background: var(--black);
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      :nth-child(1) {
        top: 25%;
      }

      :nth-child(2),
      :nth-child(3) {
        top: 50%;
      }

      :nth-child(4) {
        top: 75%;
      }
    }

    &.open {
      span {
        :nth-child(1) {
          top: 25%;
          width: 0%;
          left: 50%;
        }

        :nth-child(2) {
          transform: rotate(45deg);
        }

        :nth-child(3) {
          transform: rotate(-45deg);
        }

        :nth-child(4) {
          top: 75%;
          width: 0%;
          left: 50%;
        }
      }
    }
  }

  ${Responsive.laptop.standard`
    .hamburger{
      display: block;
    }
  `}

  ${Responsive.mobile.standard`
    .left{
        &-title {
          font-size: 130%;
          font-weight: 600;
        }

        &-icon {
          font-size: 140%;
          margin-right: 0.5rem;
        }
    }

    .right{
      &-item {
        width: 40px;
        height: 40px;
  
        &-search {
          font-size: 1rem;
        }
  
        &-notif {
          font-size: 1rem;
        }
  
        &-avatar {
          width: 100%;
          height: 100%;
        }
  
        &-count {
          width: 15px;
          height: 15px;
          top: -2px;
          right: 1px;
          font-size: 80%;
          font-weight: 400;
        }
  
        :not(:last-child) {
          margin-right: 0.5rem;
        }
      }
    }
  `}
`;
