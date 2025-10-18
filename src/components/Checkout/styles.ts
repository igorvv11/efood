import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.div`
  h3 {
    color: ${cores.laranja};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${cores.laranja};
  margin-bottom: 24px;

  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    background-color: ${cores.laranja};
    margin-top: 8px;
    display: block;
    width: 100%;
    padding: 8px;
    border: 1px solid ${cores.laranja};
    color: #4b4b4b;
  }

  small {
    color: ${cores.laranja};
    font-size: 12px;
    margin-top: 4px;
    display: block;
  }

  .CepNumber {
    display: flex;
    gap: 34px;

    div {
      flex: 1;
    }
  }

  .card-fields {
    div:first-child {
      flex-grow: 1;
    }
    div:last-child {
      flex-grow: 0;
      flex-basis: 87px;
    }
  }

  .marginTop {
    margin-top: 24px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 34px;
`;

export const InputWrapper = styled.div`
  flex: auto;
`;
