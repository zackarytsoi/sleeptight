import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container id="about" className="my-5">
      <Row >
        <Col md={12}>
          {/* <img src={startupImage} alt="Startup Image" className="img-fluid" /> */}
        </Col>
        <Col md={12}>
          <h2>關於我們</h2>
          <p>
          我們的人工智慧技術使用深度學習模型來學習您的聲音模式和語音特徵。當您提供足夠的聲音樣本後，我們的模型就可以生成一個高度逼真的聲音克隆。然後，我們可以使用這個聲音克隆來講述睡前故事，讓您的孩子可以聆聽您的聲音，就像您在他們身邊講故事一樣。
          </p>
          <p>
            我們的技術專家不斷努力改進我們的產品，以確保能夠提供最逼真的語音克隆體驗。
          </p>
          <br />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>如何運作</h2>
          </Col>
          <Col md={4}>
            <h3>上傳您的聲音</h3>
            <p>為了生成一個高度逼真的聲音克隆，我們需要足夠的聲音樣本，通常需要至少 1 分鐘的語音樣本。</p>
          </Col>
          <Col md={4}>
            <h3>選擇故事</h3>
            <p>您可以從多個睡前故事中選擇您喜歡的故事。這些故事包括經典童話、寓言故事和原創故事等，都是為孩子們量身打造的。</p>
          </Col>
          <Col md={4}>
            <h3>等待通知</h3>
            <p>當您的聲音克隆生成後，我們的應用程式會發出通知，讓您知道您可以開始使用我們的睡前故事服務了。

如果您還沒有收到通知，請耐心等待，因為生成聲音克隆需要一些時間。如果您等待了很長時間仍未收到通知，請聯繫我們的客戶支持團隊，我們會盡快為您處理。</p>
          </Col>
      </Row>
    </Container>
  );
}

export default About;