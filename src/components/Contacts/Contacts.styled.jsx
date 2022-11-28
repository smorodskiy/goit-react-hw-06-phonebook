// For stylish components
import styled from 'styled-components';

// Contact list
export const ContactList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

// Contact info
export const ContactInfo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  background-color: #fff;
  padding: 10px 30px 10px 30px;
`;

// Contact
export const Contact = styled.p`
  /* color: #35d8ac; */
  font-size: 18px;
  font-weight: 600;
`;

// Button
export const DeleteButton = styled.button`
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 2;
  outline: transparent;
  padding: 0 10px;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  :not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }

  :not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
`;
