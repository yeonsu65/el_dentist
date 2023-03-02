import Header from './component/Header';
import Section1 from './component/Section1';
import qrcode from './images/qrcode.png';
import kakao from './images/kakao.png';
import './App.css'
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Info from './component/Info';
import Section5 from './component/Section5';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <div className='infomation_wrap'>
        <div className='infomation'>
        <p><img src={kakao}/>카카오톡 상담하기&nbsp;<span>ID : eldental</span></p>
        <p>문자로상담하기&nbsp;<span>010.3786.2872</span></p>
        <p>큐알코드<img src={qrcode}/></p>
        </div>
      </div>
      <Section3 />
      <Section2 />
      <Info />
      <Section5/>
      <Footer/>
    </div>
  );
}

export default App;
