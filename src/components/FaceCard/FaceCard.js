import React from 'react';

const FaceCard = () => {
  return (
  <section className="face-card">
    <div className="main-container">
      <div className="intro-wrapper">
        <div className="nav-wrapper">
          <div className="dots-wrapper">
            <div className="browser-dot browser-dot_1"></div>
            <div className="browser-dot browser-dot_2"></div>
            <div className="browser-dot browser-dot_3"></div>
          </div>
          <a className="navigation" href="index.html#contact">Contact</a>
        </div>
        <div className="left-column">
          <div className="profile_pic" ></div>
          <h5 style={{'textAlign': 'center','lineHeight': '0'}}>Денис Щетинин</h5>
          <div className="preview-shadow">
            <div className="preview">
              <div className="corner corner_tl"></div>
              <div className="corner corner_tr"></div>
              <h3>Frontend-верстальшик с многолетним опытом</h3>
              <div className="corner corner_br"></div>
              <div className="corner corner_bl"></div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="about-wrapper">
            <div className="about-me">
              <p>Специлизируюсь на верстке, многолетний опыт, могу верстать для React и Wordpress</p>
              <p>Верстка по макету получается точная пиксель в пиксель</p>
              <ul>
                <li>Адаптивность с Mobile First подходом</li>
                <li>Семантические HTML5 элементы </li>
                <li>БЭМ-методология BEM methodology)</li>
                <li>Микроразметка Open Graph, Schema.org</li>
                <li>CSS3 – Stylus, Sass/SCSS, Less</li>
                <li>Grid Layout и Flexbox</li>
                <li>JavaScript – библиотеки на JS/jQuery</li>
                <li>Компонентный подход (сборка Gulp'ом)</li>
                <li>Кроссбраузерность (тесты в BrowserStack)</li>
                <li>Git-репозиторий (GitHub, BitBucket)</li>
                <li>В среднем 90+ баллов в Google PageSpeed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default FaceCard;