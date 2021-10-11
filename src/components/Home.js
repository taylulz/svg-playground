import { ReactComponent as Logo } from '../img/logo.svg';
import { Container } from 'react-bootstrap';

const item = document.querySelector("SvgLogo");
// console.log(item.getTotalLength())
console.log(Logo.Container)

function Home() {
  return (
    <>
      <Container>
        <Logo className="App-logo" alt="logo"/>

      </Container>
    </>
  );
}

export default Home;
