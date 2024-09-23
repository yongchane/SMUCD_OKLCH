import React from "react";
import TextTable from "../../component/TextTable";

const Studies = () => {
  return (
    <div className="main-container">
      <TextTable
        sub="Studies 1."
        title="인간의 시각적 인식에 더 적합한 밝기 제어"
      />
      <div className="main-content-one">
        1. OKLCH의 Lightness는 인간의 눈이 인식하는 밝기와 일치하게 설계
        되었습니다. CSS에서 HSL 과 같은 전통적인 색상 공간은 밝기가 선형적이지
        않아, 같은 밝기값이라도 색이 비일관적으로 보일 수 있습니다.
      </div>
      <div className="main-content-one">
        2. HSL의 L 값이 선형적이지 않아서 L = 50 과 같은 값은 실제로 사람의 눈에
        완벽한 중간 밝기로 인식되지 않을 수 있습니다. 반면, OKLCH의 L 값은
        시각적으로 정확한 중간 밝기를 제공합니다.
      </div>
      <div className="main-content-one">
        3. 이를 통해 텍스트 대비를 맞추거나, 어두운 테마와 밝은 테마 간의 색상을
        더 일관성있게 조정할 수 있습니다.
      </div>
      <div style={{ marginTop: 120 }} />
      <TextTable sub="Studies 2." title="채도(C) 와 색상(H)의 직관적 제어" />
      <div className="main-content-one">
        1. OKLCH의 C값 (채도)는 색의 생동감을 나타내며, 이것이 선형적으로 변하기
        때문에 채도가 낮아질수록 자연스럽게 회색에 가까워지고, 채도가 높아질수록
        강렬한 색을 만들 수 있습니다.
      </div>
      <div className="main-content-one">
        2. 반면 HSL 에서의 S값 (채도) 는 다소 비선형적이고, 같은 S 값이라도 다른
        색상에서 채도의 강도 차이가 생길 수 있습니다.
      </div>
      <div className="main-content-one">
        3. 색상 (H) 값도 OKLCH에서는 시각적으로 일관되며 색상 변화를 보다 예측
        가능하고 직관적으로 처리할 수 있습니다.
      </div>
      <div style={{ marginTop: 120 }} />
      <TextTable
        sub="Studies 3."
        title="더 나은 접근성 : 명도 대비와 색상 대비 최적화"
      />
      <div className="main-content-one">
        1. 명도 대비는 웹 접근성에서 중요한 요소입니다. 텍스트와 배경 색상 간의
        충분한 대비가 있으면 더 많은 사용자가 내용을 쉽게 읽을 수 있습니다.명도
        대비는 웹 접근성에서 중요한 요소입니다. 텍스트와 배경 색상 간의 충분한
        대비가 있으면 더 많은 사용자가 내용을 쉽게 읽을 수 있습니다.명도 대비는
        웹 접근성에서 중요한 요소입니다. 텍스트와 배경 색상 간의 충분한 대비가
        있으면 더 많은 사용자가 내용을 쉽게 읽을 수 있습니다.명도 대비는 웹
        접근성에서 중요한 요소입니다. 텍스트와 배경 색상 간의 충분한 대비가
        있으면 더 많은 사용자가 내용을 쉽게 읽을 수 있습니다.
      </div>
      <div className="main-content-one">
        2. OKLCH 는 인간이 인식하는 색상 간 차이를 더 잘 반영하므로, 명도 대비를
        더욱 정확하게 조정할 수 있습니다. 이는 WCAG (웹 콘텐츠 접근성
        가이드라인) 기준을 충족하는 디자인을 보다 쉽게 만들 수 있게 합니다.
      </div>
      <div className="main-content-one">
        3. CSS 에서 텍스트 대비를 설정할 때, OKLCH를 사용하면 동일한 밝기 (L) 와
        채도 (C) 로 색상을 선택할 수 있어 더 나은 접근성을 보장하면서도 디자인을
        유지할 수 있습니다.
      </div>

      <div style={{ marginTop: 120 }} />
      <TextTable sub="Studies 4." title="색상 변화의 일관성" />
      <div className="main-content-one">
        1. OKLCH 는 색상 차이가 선형적으로 보이게끔 설계되어 있어, 색상을
        점진적으로 변환하거나 애니메이션할 때 일관된 변화를 시각적으로
        제공합니다. HSL 이나 RGB 같은 전통적인 색상 공간에서는 이러한 변화가
        종종 비선형적이어서, 색상이 변할 때 급격하거나 예상치 못한 변화가 생길
        수 있습니다.
      </div>
      <div className="main-content-one">
        2. 그라디언트를 만들때 OKLCH에서는 색상 변화가 자연스럽고 일정한 밝기와
        채도를 유지하면서 부드럽게 나타납니다. 반면 HSL 이나 RGB 에서는 밝기나
        채도에서 예상치 못한 변화가 발생할 수 있습니다.
      </div>
      <div style={{ marginTop: 120 }} />
      <TextTable sub="Studies 5." title="더 넓은 색상 표현 범위" />
      <div className="main-content-one">
        1. OKLCH는 sRGB 뿐 아니라 더 넓은 색상 공간에서도 사용될 수 있습니다.
        이는 고품질 디스플레이에서 더 정확한 색 표현을 가능하게 하며, 특히
        디자인에서 다양한 색을 사용할 수 있게 합니다.
      </div>
    </div>
  );
};

export default Studies;
