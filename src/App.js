import './App.css'; 
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import {NewData, BestData } from './Pages/ProductData';
import Sub from './Pages/Sub';
import Details from './Pages/Detail';
import BestCom from './Pages/Best';
import Sale from './Pages/Sale';
import Cart from './Pages/Cart';
import { useState } from 'react';
import './Pages/style/SassComponent.scss';
import {NewDeData, BestDeData} from './Pages/DetailData';
import {StyledDelivery, StyledQna, StyledExchange, StyledReview, StyledVisual} from './Pages/styledComponent';
import { useDispatch } from 'react-redux';
import { addItem } from './Pages/store';


function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [News] = useState(NewData)
  const [Bests] = useState(BestData) 
  const [Newdetails] = useState(NewDeData)
  const [Bestdetails] = useState(BestDeData)
  const [cartmodal, setPopup] = useState(false)


  return (
    <div className="App">

      <header>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
          <li onClick={()=>{navigate('/cart')}}>장바구니</li>
          <li>고객센터</li>
        </ul>
        <div className='logo'>
          <Link to='/warmtable_react/'>
            <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="logo" />
          </Link>
        </div>
      </header>

      <ul className='lnb'>
        <li onClick={()=>{navigate('/warmtable_react/')}}>Home</li>
        <li onClick={()=>{navigate('/sub')}}>Warmtable Styling</li>
        <li onClick={()=>{navigate('/sale')}}>Mid-Season Sale</li>
      </ul>

    
    

      <Routes>
        <Route path='warmtable_react/' element={
          <Container>
            <div className='visual_main'>
              <StyledVisual/>
            </div>
            
            <p className='title'>New</p>
            
            <div className='New_box'>
              <Row>
                {
                  News.map((NewData, i)=> {
                    
                    return(
                      <Col key={NewData.id}>
                        <div className='thum_img'>
                          <Link to={`/detail/${i}`}>
                            <img src={NewData.image} alt="new_img" />
                            
                            <p className='new_title'>{NewData.title}</p>
                            <p className='new_price'>{NewData.price}원</p>
                          </Link>
                          <div className='new_on'>  
                              <div className='cart_img' onClick={() => {
                                dispatch(addItem({id: NewData.id, title: NewData.title, price: NewData.price, image:NewData.image, count:1}))
                                setPopup(true)
                                }}>
                               <img src={NewData.cartimg} alt="cart_img" />
                              </div>
                              <div className='heart_img'>
                                <img src={NewData.heartimg} alt="heart_img" />
                              </div>
                          </div>
                        </div>
                      </Col>    
                    )
                  })
                }  
            
              </Row>
            </div>

            <div className='banner'>
              <div className='banner_top' onClick={()=>{navigate('/sale')}}>
                <img src={process.env.PUBLIC_URL+'/images/banner_01.jpg'}  alt="배너이미지1" />
                <div className='banner01_on'><p>미드시즌 세일 프로모션</p></div>
              </div>

              <div className='banner_bottom' onClick={()=>{navigate('/sub')}}>
                <img src={process.env.PUBLIC_URL+'/images/banner_02.jpg'} alt="배너이미지2" />
                <div className='banner02_on'>Warmtable Styling</div>
              </div>
            </div>

         


            <p className='title'>Best</p>
            <div className='New_box'>
              <Row>
                  {
                    Bests.map((BestData, i)=> {
                      
                      return(
                        <Col key={BestData.id}>
                         
                        
                            <div className='thum_img' >
                              <Link to={`/best/${i}`}>
                                <img src={BestData.image} alt="new_img"/>
                                <p className='new_title'>{BestData.title}</p>
                                <p className='new_price'>{BestData.price}원</p>
                              </Link>
                              <div className='new_on'>
                                <div className='cart_img' onClick={() => {
                                dispatch(addItem({id: BestData.id, title: BestData.title, price: BestData.price,image:BestData.image, count:1}))
                                setPopup(true)
                                }}
                                >
                                  <img src={BestData.cartimg} alt="cart_img"/>
                                </div>
                                <div className='heart_img'>
                                  <img src={BestData.heartimg} alt="heart_img"/>
                                </div>
                              </div>
                            </div>
                        
                       
                        </Col>
                      )
                    })
                  }  
                </Row>
              </div>

              {
                  cartmodal === true 
                  ?<CartModal setPopup={setPopup}/>
                  :null
                }
          </Container>
        }/>

        <Route path='sub' element={<Sub/>}/>
        <Route path='sale' element={<Sale/>}/>
        <Route path='cart' element={<Cart/>}/>

        <Route path ='detail/:id' element={<Details New={News} Newdetail={Newdetails} />}>
          <Route path='explain' element={<div></div>}/>
          <Route path='review' element={<StyledReview/>}/>
          <Route path='qna' element={<StyledQna/>}/>
          <Route path='delivery' element={<StyledDelivery/>}/>
          <Route path='exchange' element={<StyledExchange/>}/>  
        </Route> 

        <Route path ='best/:id' element={<BestCom Best={Bests} Bestdetail={Bestdetails}/>}>
          <Route path='explain' element={<div></div>}/>
          <Route path='review' element={<StyledReview/>}/>
          <Route path='qna' element={<StyledQna/>}/>
          <Route path='delivery' element={<StyledDelivery/>}/>
          <Route path='exchange' element={<StyledExchange/>}/>  
        </Route> 
      </Routes>

      <footer>
        <div className='footer_top'>
          <div><img src={process.env.PUBLIC_URL+'/images/footer_logo.png'} alt="" /></div>
          <ul>
            <li>상호명</li>
            <li>대표자</li>
            <li>대표전화</li>
            <li>고객센터</li>
            <li>사업자등록번호</li>
          </ul>
          <ul>
            <li><span>COMPANY</span></li>
            <li>따뜻한 식탁</li>
            <li>김윤미</li>
            <li>010-0000-0000</li>
            <li>1577-3561</li>
            <li>617-25-31153</li>
          </ul>
          <ul>
            <li><span>SHOP GUIDE</span></li>
            <li>HOME</li>
            <li>개인정보처리방침</li>
            <li>이용약관</li>
            <li>이용안내</li>
            <li>회사소개</li>
          </ul>
          <ul>
            <li><span>고객문의</span></li>
            <li>자주 묻는 질문</li>
            <li>1:1 맞춤상담</li>
            <li>배송조회</li>
            <li>카카오톡 상담</li>
          </ul>
          <ul>
            <li><span>CS CENTER</span></li>
            <li>월~금 AM 10:00 ~ PM 16:00</li>
            <li>점심시간 PM 12:00 ~ PM 13:00</li>
            <li>토요일, 일요일 , 공휴일 휴무</li>
          </ul>
        </div>

        <div className='footer_bottom'>
          <ul>
            <li>COPYRIGHT WARMTABLE ALL RIGHT RESERVED.</li>
            <li>주소 48311 부산광역시 수영구 황령대로 481번길 56 (남천동) 백운빌딩 3층</li>
          </ul>
          <ul>
            <li>통신판매업신고 2016-부산수영-2094</li>
            <li>결제대금예치업 등록번호 02-006-00024[서비스가입사실확인]</li>
          </ul>
        </div>
      </footer>
      
    </div>
  );


  function CartModal(props) {
    const {setPopup} =props
    
    return(
    
    <div className='cart_modal'>
   
      <div className='cart_line'>
        <p>장바구니 담기</p> 
        <p onClick={()=>setPopup(false)}>X</p> 
      </div>
  
      <div><img src={process.env.PUBLIC_URL+'/images/modal_cart.png'}  alt="" /></div>
      
      <p className='cart_txt'>
        상품이 장바구니에 담겼습니다.
      </p>
  
      <div>
        <button className='cartbtn01' onClick={()=>setPopup(false)}>계속쇼핑하기</button>
        <button className='cartbtn02' onClick={() =>{navigate('/cart')} }>장바구니 보기</button>
      </div>
    </div>
    
    )
  }



}




export default App;
