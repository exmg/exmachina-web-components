import { css } from 'lit';

export const style = css`
  .description {
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.5);
    display: block;
    margin-right: 4rem;
    margin-top: 0.4rem;
  }

  .horizontal {
    display: flex;
    flex-direction: row;
  }

  .horizontal > *:not(:first-child) {
    margin-left: 0.5rem;
  }

  .horizontal > * {
    flex: 1;
  }

  paper-input {
    min-width: 160px;
  }

  paper-checkbox {
    margin-top: 1rem;
    display: block;
  }

  section {
    margin-bottom: 1.2rem;
  }
`;
