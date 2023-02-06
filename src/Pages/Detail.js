import{ Outlet, useNavigate, useParams } from "react-router-dom"; 
import { useState } from "react";
import ScrollToTop from "./ScrollToTop"
import { addItem } from "./store";
import { useDispatch } from "react-redux";


export default function Details(props) {
  const navigate = useNavigate()
  const {New} = props
  const {id} = useParams()  
  const[count, setCount] = useState(1)
  const{Newdetail} =props
  const dispatch = useDispatch()
  const [cartmodal, setPopup] = useState(false)

  return(
    <div className="detail">
    
      <div className="detail_top">
        <div className="detail_img">
          <img src={New[id].image} alt=""/>
        </div>

        <div className="detail_right">
          <p className="detail_title">[당일발송] {New[id].title} </p>
          <p className="detail_txt span1">판매가 <span> {New[id].price}</span>원</p>
          <p className="detail_txt span2">결제수단 <span>카드결제, 무통장 입금, 휴대폰 결제, 적립금</span></p>

          <div className="quantity">
            {New[id].title}
            <button className="btn_num" onClick={() => setCount(count+1)}> + </button>
            {count}
            <button className="btn_num" onClick={() => setCount(count-1)}> - </button>
          </div>
        
        
          <p className="option">위 옵션을 선택하시면 아래에 상품이 추가됩니다.</p>
          <p className="mini_txt">(최소주문수량 1개 이상)</p>
          <p className="total">TOTAL : <span>{count * New[id].price}</span>원</p>
        
          <button className="btn_buy">구매하기</button>
          <div className="btn_cart">
          
            <button onClick={() => {
              dispatch(addItem({id: New[id].id, title: New[id].title, price: New[id].price, image: New[id].image, count: count}))
              setPopup(true)
            }}>장바구니</button>      
            <button>찜하기</button>
          </div>
        </div>
      </div>



      <div className="detail_bottom">
        <button onClick={()=>navigate('explain')}>상품설명</button>
        <button onClick={()=>navigate('review')}>상품후기</button>
        <button onClick={()=>navigate('qna')}>상품문의</button>
        <button onClick={()=>navigate('delivery')}>배송안내</button>
        <button onClick={()=>navigate('exchange')}>교환 및 반품안내</button>
      
        <Outlet/>

        <div className="explain_img">
          <img src={Newdetail[id].image} alt="" />
        </div>
      </div>
     <ScrollToTop/>
      
    {
      cartmodal === true 
      ?<CartModal setPopup={setPopup}/>
      :null
    }
    </div>

  )

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



