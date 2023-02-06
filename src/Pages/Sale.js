import { StyledSale } from "./styledComponent";
import ScrollToTop from "./ScrollToTop";

export default function Sale() {

  return(
    <div className="sale">
      <div className='sale_title'>
        <StyledSale/>
      </div>

      <div className='sale_detail'>
          <img src={process.env.PUBLIC_URL+'/images/sale_top.jpg'} alt="" />
      </div>

      <div className="sale_mid">
        <div className="mid_title">
          <p>warmtable Best Item</p>
          <p>추가할인에 증정까지!</p>
        </div>

        <div className="mid_img">
          <div><img src={process.env.PUBLIC_URL+'/images/sale_item01.jpg'} alt="" /></div>
          <div><img src={process.env.PUBLIC_URL+'/images/sale_item02.jpg'} alt="" /></div>
          <p className="best01_txt">유리컵 Best 보러가기</p>
          <p className="best02_txt">트레이 Best 보러가기</p>
        </div>
        
        <div className="mid_img">
          <div><img src={process.env.PUBLIC_URL+'/images/sale_item03.jpg'} alt="" /></div>
          <div><img src={process.env.PUBLIC_URL+'/images/sale_item04.jpg'} alt="" /></div>
          <p className="best01_txt">시리얼컵 Best 보러가기</p>
          <p className="best02_txt">생활용품 Best 보러가기</p>
        </div>
      </div>

      <div className='sale_bottom'>
        <img src={process.env.PUBLIC_URL+'/images/sale_bottom.jpg'} alt="" />
      </div>

      <ScrollToTop/>
    </div>
  ) 
}