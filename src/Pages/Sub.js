import ScrollToTop from "./ScrollToTop"


 export default function Sub() {
    return(
      <div className="trend_box">

        <div className="trend_visual">
          <img src={process.env.PUBLIC_URL+'/images/trend01.jpg'}  alt="" />
          <p className="trend_mtxt">Happier Moments, 행복한 일상의 순간</p>
          <p className="trend_stxt">warmtable은 고객의 행복한 공간 실현을 위해 변화하는 라이프 스타일 트렌드를 빠르게 캐치하여 지속가능하고 새로운 리빙 인사이트를 제시합니다.</p>
        </div>
        <div className="trend_healing">
          <img src={process.env.PUBLIC_URL+'/images/trend02.jpg'}  alt="" />
          <p className="healing_title">Healing Minimalism</p>
          <p className="healing_subtitle">힐링 미니멀리즘</p>
          <p className="healing_btn">더보기 +</p>
          <p>시각적 편안함을 주는 뉴트럴 컬러와 따뜻하고 부드러운 촉감,마음을 진정시키는 차분한 디자인, <br/>한 차원 높은 퀄리티로 긴장감을 내려놓고 휴식을 취할 수 있는 평온한 공간을 선사합니다.</p>
        </div>
        <div className="trend_bold">
          <img src={process.env.PUBLIC_URL+'/images/trend03.jpg'}  alt="" />
          <p className="bold_title">Bold Midcentury</p>
          <p className="bold_subtitle">볼드 미드센츄리</p>
          <p className="bold_btn">더보기 +</p>
          <p>색상, 패턴 및 형태에 대한 경계를 허물고 예기치 않은 구성을 통해 변신한 미드센츄리 모던시대와 스타일을 <br/> 혼합하고 레이어링하여 대담하고 창의적인 방법으로 재해석 합니다.</p>
        </div>
        <div className="trend_joyful">
          <img src={process.env.PUBLIC_URL+'/images/trend04.jpg'}  alt="" />
          <p className="joy_title">Joyful Scandi</p>
          <p className="joy_subtitle">조이풀 스칸디</p>
          <p className="joy_btn">더보기 +</p>
          <p>행복을 발산하는 즐거운 스칸디나비안 스타일. 다채로운 컬러와 단순하지만 <br/>
            눈길을 사로잡는 패턴으로 디자인에 생명을 불어 넣어, 일상에 즐거운 에너지를 가져다 줍니다.
          </p>
        </div>

        <div className="trend_core">
          <img src={process.env.PUBLIC_URL+'/images/trend05.jpg'}  alt="" />
          <p className="core_title">Cabincore</p>
          <p className="core_subtitle">캐빈 코어</p>
          <p className="core_btn">더보기 +</p>
          <p>가을 감성으로 진화한 코티지 코어. <br/>
            빈티지풍의 색채 배합과 아늑한 질감 그리고 소박한 디테일이 빈티지 미학을 새롭게 업데이트 합니다.
          </p>
        </div>
        <ScrollToTop/>
      </div>
      
    )


 }