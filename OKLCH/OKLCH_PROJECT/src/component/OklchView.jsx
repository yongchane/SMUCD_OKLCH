import React from "react";

const OklchView = () => {
  return (
    <div className="ok-container">
      <div className="ok-content">
        <div className="ok-title">HSL vs OKLCH 대비 비교해보기</div>
        <div className="ok-line"></div>
        <div className="ok-interaction"> 인터랙션 필요</div>
      </div>
      <div className="ok-footer">
        <div className="ok-footer-content">
          <div className="ok-footer-line"></div>
          <div className="ok-footer-detail">
            CSS에서 OKLCH 를 사용하면 보다 자연스럽고 정확한 색상 제어가
            가능해집니다. 특히 밝기 (L), 채도(C), 색상 (H)의 선형적이고
            시각적으로 일관된 제어는 디자이너와 개발자에게 일관된 디자인을
            유지하면서 접근성을 높일 수 있는 강력한 도구를 제공합니다. 디지털
            콘텐츠의 시각적 품질을 높이고, 더 나은 사용자 경험을 보장할 수 있는
            중요한 이유입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OklchView;
