import React from 'react';
import './styles.css';
import styles from './Button.module.css';
import styled from 'styled-components';
  
const StyledComponent = styled.div`
  background-color: pink;
  padding: 15px;
  border-radius: 10px;
`;
function App() {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <p className="myClass">Styled with CSS Class </p>
      <button className={styles.button}>Styled with CSS Module</button>
      <StyledComponent>Styled with CSS-in-JS</StyledComponent>
      Inline Styling Example
    </div>
    
  
  );
}


export default App;
