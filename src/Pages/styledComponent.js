import styled, { keyframes } from "styled-components"
const NameTitle = styled.p`
width: 1060px; height: 30px;
font-family: 'NanumSquareRound';
font-weight: bold;
font-size:16px;
line-height: 30px;
margin-top:30px;
`
const Delivery = styled.div`
    width: 1060px;
    margin-bottom:60px;
`
const TitleTxt01 = styled.div`
    width:1060px; height: 100px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    border-top:1px solid #ccc;
    margin-top:20px;

`
const TitleTxt = styled.div`
    width:1060px; height: 100px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
`
const DeliTxt = styled.p`
    width: 212px; height: 100px;
    font-family: 'NanumSquareRound';
    font-size:15px;
    float: left;
    text-align: center;
    line-height: 100px;
    background-color: #eee;
    margin-right: 20px;
`
const DeliStxt =styled.p`
    width: 800px; height: 100px;
    font-family: 'NanumSquareRound';
    font-size: 15px;
    line-height: 100px;
    float: left;
`
const Delilong = styled.p`
    font-family: 'NanumSquareRound';
    font-size:15px;
    margin:8px 0;
`


const QnaMain = styled.div`
    width:1060px;
`
const Qnadiv = styled.div`
    width: 1060px; height: 50px;
    border-bottom:1px solid #ccc;
    overflow: hidden;
`
const Qnadivfirst = styled.div`
    font-family: 'NanumSquareRound';
    width: 1060px; height: 50px;
    border-bottom:1px solid #ccc;
    overflow: hidden;
    font-size: 15px;
    background-color: #eee;
    border-top:1px solid #ccc;
`

const Qnatxt = styled.p`
    width: 212px; height: 50px;
    font-family: 'NanumSquareRound';
    font-size:15px;
    float: left;
    text-align: center;
    line-height: 50px;
`

const ExchangeMain = styled.div`
    width: 1060px; 
    margin-bottom:100px;
`
const Exdiv = styled.div`
    width: 1060px; height: 205px;
    border-bottom:1px solid #ccc;
    overflow: hidden;
`
const Exdivfirst = styled.div`
    width: 1060px; height: 180px;
    border-bottom:1px solid #ccc;
    overflow: hidden;
    border-top:1px solid #ccc;
`
const Extitle = styled.p`
    width: 212px; height: 180px;
    font-family: 'NanumSquareRound';
    font-size: 14px;
    background-color: #eee;
    text-align: center;
    line-height: 170px;
    float: left;
`

const Extitlesecond = styled.p`
    width: 212px; height: 205px;
    font-family: 'NanumSquareRound';
    font-size: 14px;
    background-color: #eee;
    text-align: center;
    line-height:205px;
    float: left;
`

const  Extop = styled.p`
    width:800px; 
    font-family: 'NanumSquareRound';
    font-size:15px;
    float: left;
    margin:0 20px;
    padding-top:30px;
`

const Exbottom = styled.p`
width: 800px; 
font-family: 'NanumSquareRound';
font-size: 15px;
float: left;
margin:8px 20px;
`

const ReviewMain = styled.div`
    width: 1060px;
`
const Reviewtxt = styled.div`
    width: 1060px; height: 40px;
    padding:30px 0;
    border-bottom:1px solid #ccc;
`

const ReviewBox =styled.div`
width: 1060px; height: 210px;
overflow: hidden;
border-bottom: 1px solid #ccc;
`
const ReviewInner = styled.div`
width: 1060px; height: 100px;
line-height:45px;
overflow: hidden;
margin: 0 auto;
`
const ReviewInnerTop = styled.div`
width: 1060px; height: 100px;
line-height:45px;
overflow: hidden;
margin: 0 auto;
border-bottom:1px solid #ccc;
`
const ReInnerp01 = styled.p`
width: 600px; height: 100px;
line-height: 100px;
float: left;
`
const ReInnerp02 = styled.p`
width: 100px; height: 100px;
line-height: 100px;
float: right;
`
const ReInnerp03 = styled.p`
width: 150px; height: 100px;
line-height: 100px;
float: left; 
color: #00796F;
`

const saleMain = keyframes`
  0%{background-image:url(./images/sale_visual01.jpg);}
  20%{background-image:url(./images/sale_visual02.jpg);}
  40%{background-image:url(./images/sale_visual03.jpg);}
  60%{background-image:url(./images/sale_visual04.jpg);}
  80%{background-image:url(./images/sale_visual05.jpg);}
  100%{background-image:url(./images/sale_visual01.jpg);}
`
const SaleMain = styled.div`
width: 1276px; height: 900px;
margin:0 auto;
animation-duration: 1s;
animation: ${saleMain} 10s infinite;
`
const StyledSale = () => {
  return(
    <>
    <SaleMain/>
    </>
  )
}


const visualMain = keyframes`
  0%{background-image:url(./images/visual_img01.jpg);}
  25%{background-image:url(./images/visual_img02.jpg);}
  50%{background-image:url(./images/visual_img03.jpg);}
  75%{background-image:url(./images/visual_img04.jpg);}
  100%{background-image:url(./images/visual_img01.jpg);}
`
const VisualMain =styled.div`
width: 1276px; height:500px;
margin:0 auto;
animation-duration: 1s;
animation: ${visualMain} 10s infinite;
`


const StyledVisual = () => {
  return(
    <>
    <VisualMain/>
    </>
  )
}












const StyledReview = () => {
  return(
    <>
      <ReviewMain>
        <NameTitle>상품후기</NameTitle>

        <Reviewtxt>
   
        </Reviewtxt>
     
        <ReviewBox>
          <ReviewInnerTop>
            <ReInnerp03>★★★★★</ReInnerp03>
              <ReInnerp01 >오목해서 과일담기 좋아요! 유리가 도톰해서 잘 안깨질꺼 같아서 좋아요!</ReInnerp01>
              <ReInnerp02 >홍길*</ReInnerp02>
          </ReviewInnerTop>
          
          <ReviewInner>
            <ReInnerp03>★★★</ReInnerp03>
            <ReInnerp01 >튼튼해서 좋아요 ~ 아무곳에나 잘어울리는거 같아요!!</ReInnerp01>
            <ReInnerp02 >유지*</ReInnerp02>
          </ReviewInner>
        </ReviewBox>
      </ReviewMain>
    </>
  )
}


const StyledExchange = () => {
    return(
        <>
        
      <NameTitle>교환 및 반품안내</NameTitle>
      <ExchangeMain>  
        <Exdivfirst>
          <Extitle>교환 및 반품이 가능한 경우</Extitle>
          <Extop>-상품을 공급 받으신 날로부터 7일 이내 사전연락을 통하여 사유가 명확할시 교환 및 반품이 가능함</Extop>
           
          <Extop>
            -공급받으신 상품 및 용역의 내용이 표시, 광고 내용과 다르거나 다르게 이행된 경우에는 공급받은<br/><br/>날로부터 3월이내, 그사실을 알게 된 날로부터 30일이내 가능함.
          </Extop>
          
        </Exdivfirst>
        
        <Exdiv>
          <Extitlesecond>
            교환 및 반품이 불가능한 경우
          </Extitlesecond>
          <Exbottom>
            -고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우, 
            단, 상품의 내용을 확인하기 위하여 포장등을 훼손한 경우는 제외
          </Exbottom>
          <Exbottom>
            -포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우
          </Exbottom>
          <Exbottom>
            -고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우<br/>
            (자세한 내용은 고객만족센터 1:1 E-MAIL 상담을 이용해 주시기 바랍니다.)
          </Exbottom>
          <Exbottom>
            ※ 고객님의 마음이 바뀌어 교환, 
            반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다. <br/>
            (색상, 교환, 사이즈교환등 포함)
          </Exbottom>
        </Exdiv>
      </ExchangeMain>
        </>
    )
}

const StyledQna = () =>{
    return(
        <>
            <NameTitle >상품문의</NameTitle>
            <QnaMain>
            
                <Qnadivfirst>
                <Qnatxt>번호</Qnatxt>
                <Qnatxt>제목</Qnatxt>
                <Qnatxt>작성자</Qnatxt>
                <Qnatxt>작성일</Qnatxt>
                <Qnatxt>조회</Qnatxt>
                </Qnadivfirst>
                
                <Qnadiv>
                <Qnatxt>1</Qnatxt>
                <Qnatxt>배송/반품 문의</Qnatxt>
                <Qnatxt>홍길*</Qnatxt>
                <Qnatxt>2022-10-01</Qnatxt>
                <Qnatxt>10</Qnatxt>
                </Qnadiv>
                
                <Qnadiv>
                <Qnatxt>2</Qnatxt>
                <Qnatxt>상품문의</Qnatxt>
                <Qnatxt>이순*</Qnatxt>
                <Qnatxt>2022-09-10</Qnatxt>
                <Qnatxt>2</Qnatxt>
                </Qnadiv>

                <Qnadiv>
                <Qnatxt>3</Qnatxt>
                <Qnatxt>견적문의</Qnatxt>
                <Qnatxt>장영*</Qnatxt>
                <Qnatxt>2022-09-02</Qnatxt>
                <Qnatxt>5</Qnatxt>
                </Qnadiv>

                <Qnadiv>
                <Qnatxt>4</Qnatxt>
                <Qnatxt>견적문의</Qnatxt>
                <Qnatxt>안중*</Qnatxt>
                <Qnatxt>2022-08-25</Qnatxt>
                <Qnatxt>8</Qnatxt>
                </Qnadiv>

                <Qnadiv>
                <Qnatxt>5</Qnatxt>
                <Qnatxt>배송/반품문의</Qnatxt>
                <Qnatxt>김순*</Qnatxt>
                <Qnatxt>2022-08-10</Qnatxt>
                <Qnatxt>30</Qnatxt>
                </Qnadiv>
            </QnaMain>

        </>
    )
}


const StyledDelivery = () => {
  return (
    <>
     <NameTitle >배송안내</NameTitle>
      <Delivery>  
        
        <TitleTxt01>
          <DeliTxt>배송방법</DeliTxt>
          <DeliStxt>택배(대한통운)</DeliStxt>
        </TitleTxt01>
        
        <TitleTxt>
          <DeliTxt>배송지역</DeliTxt>
          <DeliStxt>전국지역</DeliStxt>
        </TitleTxt>

        <TitleTxt>
          <DeliTxt>배송비용</DeliTxt>
          <DeliStxt>3500원</DeliStxt>
        </TitleTxt>

        <TitleTxt>
          <DeliTxt>배송기간</DeliTxt>
          <DeliStxt>2~10일</DeliStxt>
       
        </TitleTxt>

        <TitleTxt>
            <DeliTxt>배송안내</DeliTxt>
            <Delilong>고객님께서 주문하신 상품은 입금 확인 후 배송 해드립니다. </Delilong>
            <Delilong> 다만, 상품종류에 따라 상품의 배송이 다소 지연될 수 있습니다.</Delilong>
            <Delilong>  네이버페이로 주문 시, 제주도 배송비가 설정이 되지않습니다.</Delilong>
        </TitleTxt>
      </Delivery>
    </>
  )
}











export {StyledDelivery, StyledQna, StyledExchange, StyledReview,  StyledVisual, StyledSale} 