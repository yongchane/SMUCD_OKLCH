import React from "react";
import TextTable from "../../component/TextTable";

const Gui = () => {
  return (
    <div className="gui-container">
      <TextTable sub="GUI 1." title="Swatch step" />
      <div className="gui-content">
        <div className="gui-picture">사진 필요</div>
        <div className="gui-detail-content">
          색상 팔레트의 색 단계를 설정해주는 기능을 하고 있습니다. 10, 5, 2, 1
          단계의 색상 설정이 가능합니다.
        </div>
      </div>
      <TextTable sub="GUI 2." title="Color Picker (Hue) " />
      <div className="gui-content">
        <div className="gui-picture">사진 필요</div>
        <div className="gui-detail-content">
          <div className="gui-detail-content-one">
            Hue (색상) 을 선택할 수 있는 칼라 피커 스펙트럼입니다.
            <br /> OKLCH 의 Hue 는 0° 에서부터 360° 까지의 Hue 값을 설정할 수
            있습니다.
          </div>
          <div className="gui-detail-content-one">
            first color 는 설정한 기본 색상을 의미하고, last color를 활성화 하게
            되면 두가지의 색상으로 하나의 팔레트를 생성할 수 있습니다.
          </div>
          <div className="gui-detail-content-one">
            색상 스펙트럼 윗부분에 last color 가 활성화되며 선택한 색상
            팔레트에서 색상을 조절할 수 있습니다.
          </div>
        </div>
      </div>
      <TextTable sub="GUI 3." title="Color Gamut (Lightness & Chroma)" />
      <div className="gui-content">
        <div className="gui-picture"> 사진 필요</div>
        <div className="gui-detail-content">
          <div className="gui-detail-content-one">
            Color Gamut 에서는 선택한 Hue 값의 Lightness 와 Chroma를 OKLCH 의
            색상 영역에서 시각적으로 나타내며 설정할 수 있습니다.
          </div>
          <div className="gui-detail-content-one">
            Lightness 는 0에서부터 100까지의 범위를 가지고 있고,
            <br />
            Chroma 는 특정 색상과 밝기 조합에 따라 최댓값이 많이 달라지는 특성을
            가지고 있습니다. 따라서 0에서부터 최대 0.4 ~ 1.0 사이의 값을 <br />
            가지고 있으나,일반적으로 약 0.4의 최댓값의 범위를 나타냅니다
          </div>
          <div className="gui-detail-content-one">
            ‘+’ 아이콘을 드래그해서 위아래로 움직이면 Chroma를, 양옆으로
            움직이면 Lightness 값을 설정할 수 있습니다.
          </div>
        </div>
      </div>
      <TextTable sub="GUI 4." title="Color Palettes" />
      <div className="gui-content">
        <div className="gui-picture"> 사진 필요</div>
        <div className="gui-detail-content">
          <div className="gui-detail-content-one">
            swatch steps 에서 설정한 색상 단계가 위에서 가장 먼저 보여지며,
            <br />
            팔레트를 선택하게 되면 색상 툴을 활용해서 팔레트를 설정할 수
            있습니다.
          </div>
          <div className="gui-picture"> 사진 필요</div>
          <div className="gui-detail-content-one">
            선택한 팔레트의 음영 단계도 설정 가능하도록 하였습니다.
          </div>
        </div>
      </div>
      <TextTable sub="Component" title="Buttons" />
      <div className="gui-content">
        <div className="gui-picture">사진 필요</div>
        <div className="gui-detail-content">
          <div className="gui-detail-content-one">
            create a palette 버튼을 누를시 새로운 팔레트를 생성해 줍니다.{" "}
          </div>
          <div className="gui-detail-content-one">
            SVG, CSS, SCSS, JSON 파일로 플러그인에서 생성한 팔레트를 추출할 수
            있습니다.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gui;
