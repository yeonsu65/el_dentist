import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './NavbarHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavbarHeader(){
  return(
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="이엘 치과소개" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">이엘치과 병원소개</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.2">
              대표원장 인사말
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">이엘둘러보기</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.4">
              병원 인증
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/1.4">
              이사장 인사말
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/1.4">
              의료진 소개
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/1.4">
              찹아오시는길/주차안내
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/1.4">
              병원장 인사말
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/1.4">
              의료장비 소개
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/1.4">
              병원 연혁
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="양악,안면윤곽센터" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/2.1">양악,안면윤곽 센터소개</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">
              양악,안면윤곽 수술전후
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/2.3">양악다이어리</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="임플란트센터" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">임플란트 센터소개</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              전신질환/뼈이식 임플란트
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">CAD/CAM 임플란트 센터</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">내비게이션/수면 임플란트</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">치아건강소식지</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="교정센터" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">EL턱성장 클리닉</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">EL스페셜 교정</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">EL일반교정</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">EL교정 전후사진</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="소아청소년치과센터" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">소아청소년 치과센터소개</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">소아충치 수면치료</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">유치원 견학신청</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="수면/종합진료센터" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">EL수면 치료센터</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">예진/진단과</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">예방치료과</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">턱관절 통증 클리닉</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">보존/보철과</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">미백치료</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">디지털 보철센터</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="이엘스토리" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">공지사항</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">보도자료</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">이엘치과를 방문한 스타</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">선교 및 사회활동</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="미디어" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">방송출연</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">
              MBC캠페인
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">라디오출연</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">이엘메거진</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="전후사진/후기" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">이엘 리얼스토리</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">
              시술후기
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="상담예약" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">질문과 답변</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">
              카톡상담
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">온라인예약</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">예약확인</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default NavbarHeader;