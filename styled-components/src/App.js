import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

// const ReactButton = (props) => {
//   const style = {
//     color:'white',
//     backgroundColor:'blue'
//   }
//   return <button style={style}>{props.children}</button>
// }

// const StyledButton = styled.button`
//   color: 'white';
//   background-color: 'blue';
// `;

const SimpleButton = styled.button`
  color: white;
  background-color: pink;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

const ReactButton = props => {
  console.log('props', props);
  return <button className={props.className}>{props.children}</button>
}

const LargeReactButton = styled(ReactButton)`
  font-size: 50px;
`;

const PrimaryButton = styled.button`
  color: ${ props => props.primary ? 'pink' : 'white' };
  background-color: ${ props => props.primary ? 'white' : 'black'};
`;

export default function App() {
  return (
    <div className="App">
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <LargeReactButton>React Large</LargeReactButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>primary</PrimaryButton>
    </div>
  );
}
