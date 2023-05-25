import { html } from 'lit';

export const checkIcon = html` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
</svg>`;

export const errorIcon = html` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
</svg>`;

export const warningIcon = html` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
</svg>`;

export const editIcon = html` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none" />
  <path
    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
  />
</svg>`;

export const closeIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
`;
