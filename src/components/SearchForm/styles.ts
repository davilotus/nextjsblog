import styled from 'styled-components';

export const Form = styled.form`
  gap: 5px;
  display: flex;

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #fff;
    width: -webkit-fill-available;
  }

  button {
    border-radius: 4px;
    padding: 6px 8px;
    border: 1px solid var(--violet-500);
    background: var(--violet-500);
    color: #fff;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border-color: var(--violet-700);
      background: var(--violet-700);
    }
  }
`;
