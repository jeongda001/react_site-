import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, subCount, deleteItem } from './store';
import ScrollToTop from './ScrollToTop';




export default function Cart() {
  const state = useSelector((state) => {return state})
  const dispatch = useDispatch()
  let totalprice = 0
  



  const btnstyle ={
    width: '33px',
    height: '33px',
    border: '1px solid #00796F',
    color:'#00796F',
    fontSize:'21px',
    fontWeight:'bold',
    marginRight:'5px',
    marginTop:'30px'
  }

  return(
  

    <div className='cart_box'>
      <div className='ctitle'>장바구니</div>
      <div className='cart_top'>
        <Table>
          <thead>
            <tr>
              <th>상품</th>
              <th>상품정보</th>
              <th>상품구매금액</th>
              <th>수량</th>
              <th></th>
              <th>상품당 구매금액</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              state.cart.map((item,i) => {
                totalprice += (state.cart[i].price)*(state.cart[i].count)
                return(
                  <tr key={i}>
                    <td><img src={state.cart[i].image} alt="" /></td>
                    <td>{state.cart[i].title}</td>
                    <td>{state.cart[i].price}원</td>
                    <td>{state.cart[i].count}</td>
                    <td>
                      <button style={btnstyle} onClick={()=> {
                        dispatch(addCount(state.cart[i].id))
                      }}>+</button>
          
                      <button style={btnstyle} onClick={()=> {
                        dispatch(subCount(state.cart[i].id))
                      }}>-</button>
                    </td>

                    <td>{(state.cart[i].price)*(state.cart[i].count)}원</td>
                    
                    <td>     
                      <button className='x_btn' onClick={()=>{
                        dispatch(deleteItem(state.cart[i].id))
                      }}>x</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>

      <div className='cart_bottom'>  
        <div>
          <p>총 상품금액</p>
          <p>{totalprice}원</p>
        </div>
      </div>

        <ScrollToTop/>
    </div>
  )



}
