import React from "react";
import TextTable from "../../component/TextTable";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-title">
        <div className="main-accent">CSS</div>의 새로운 색상 공간
        <div className="main-accent"> OKLCH</div>
      </div>
      <div className="main-content">
        css의 기존 색상이었던 RGB와 HSL 에서 새로운 색상 공간인 OKLCH 로
        전환하게 되었습니다. 위 프로젝트는 OKLCH 로 색상 공간이 전환하게 된
        이유에 대한 웹 프레젠테이션을 설명하고 있습니다. 그리고 OKLCH 색상으로
        색상 팔레트를 생성하는 제너레이터 플러그인을 제작해보았습니다.
      </div>
      <TextTable sub="Define OKLCH" title="OKLCH 란 무엇인가요?" />
      <div className="main-content-one">
        웹 기술이 발전함에 따라 css의 색 표현 기술 또한 발전하고 있습니다.  이제
        정적인 색 하나를 표현하는 것을 넘어, 색을 재사용하거나 변화를 주는 등 더
        동적으로 사용하고 있습니다.  그리고 기존 sRGB를 넘어 DCI-P3 색영역을
        지원하는 모니터가 출시하고 있어 더 다양한 색을 지정할 필요 또한
        생겼습니다. 이에 따라 css에서는 새로운 색상 표기법으로 oklch( ) 를 추가
        했습니다.
      </div>
      <div className="main-content-two">
        OKLCH 는 색을 나타내는 색상 공간 중 하나로, 인간의 시각에 더 적합한 색상
        표현을 목표로 만들어졌습니다. 밝기 (L), 채도 (C), 색상 (H) 으로 색을
        표현합니다. 이를 통해 다양한 색상의 정확한 표현과 비교가 가능합니다.
      </div>
      <div className="main-content-two">
        <div>OKLCH의 구성 요소 :</div>
        <li>
          L (Lightness, 밝기) : 색의 밝기 정도를 나타내며 값이 0 이면 가장
          어두운 색 (검정), 100 이면 가장 밝은 색 (흰색)을 의미합니다.
        </li>
        <li>
          C(Chroma, 채도) : 색의 강렬함을 나타냅니다. 값이 클수록 색이 더 생동감
          있고, 강렬합니다. 0 이면 회색처럼 채도가 없는 색을 의미합니다.
        </li>{" "}
        <li>
          H(Hue, 색상) : 색상의 유형을 나타내며, 색상환에서 색의 위치를 가도로
          나타냅니다. 예를 들어 1도는 빨강, 120도는 초록, 240도는 파랑입니다.
        </li>
      </div>
      <TextTable
        sub="Define OKLCH"
        title="HSL에서 OKLCH로 색상 공간을 전환한 이유?"
      />
      <div className="main-content-one">
        HSL 과 OKLCH의 lightness 에서 대비감을 비교해 볼 수 있습니다. HSL 에서의
        L 값도 0에서 100 까지 범위를 가지며 0은 검정, 100은 흰색을 의미합니다.
        하지만 HSL의 L 값도 RGB 색상 공간의 기초에서 계산되므로 밝기 값이
        동일하더라도 선형적이지 않다는 특징이 있습니다. 즉, HSL 의 lightness
        값이 0에서 100 사이로 변할때, 사람이 느끼는 실제 밝기가 그 값과 일치하지
        않다는 의미입니다. HSL 에서 밝기 L는 기본적으로 RGB 색상 공간의 삼각형을
        기반으로 한 계산입니다. 이는 수학적으로 정의된 색 공간이지만, 인간의
        시각적인 밝기 인식과는 다소 차이가 있습니다
      </div>
      <div className="main-content-one">
        예를 들어, L = 50 은 HSL 에서 중간 밝기를 의미하지만, 이것이 인간이
        느끼기에 정확한 밝기를 나타내지 못하고, 일관된 밝기 변화를 제공해주지
        않습니다. L 값이 0에서 50으로 증가할 때와, 50에서 100으로 증가할 때
        밝기의 변화는 사람의 눈에 동일하게 느껴지지 않습니다. 이는 밝기 변화가
        선형적으로 사람의 눈에 반영되지 않는다는 뜻입니다. 이는 HSL이 RGB 값의
        혼합을 기반으로 하고 있어 중간 값이 실제로 시각적 중간 밝기와 맞지 않기
        때문입니다.
      </div>
      <div className="main-content-one">
        RGB 색상 공간은 빛의 강도를 기반으로 한 물리적인 모델이지만, 인간의
        시각은 선형적이지 않습니다. 사람의 눈은 빛의 변화에 대해 비선형적으로
        반응합니다. 인간의 눈이 인식하는 밝기 변화는 이보다 복잡하기 때문에 그
        차이가 발생하게 됩니다. OKLCH 는 이러한 문제들을 해결해주고,
        디스플레이에서 더 자연스러운 색 표현과 인간의 시각에 더 적합한 밝기,
        채도, 색상 제어를 가능하게 합니다. 이는 특히 디자인 일관성과 접근성을
        높이는데 중요한 역할을 했습니다.
      </div>
    </div>
  );
};

export default Main;
