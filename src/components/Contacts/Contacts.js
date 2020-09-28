import React from 'react';

const Contacts = () => {
  return (
    <section className="contacts " id="contact">
      <div className="main-container">
        <h3 className="contacts__h3">Cвязаться cо мной :</h3>
        <div className="contacts__wrap">
          <div>
            <p className="contacts__p">Skype</p>
            <a className="contacts__a" href="skype:d.shchet">d.shchet</a>
          </div>
          <div>
            <p className="contacts__p">Telegram</p>
            <a className="contacts__a" href="https://t.me/d_shchet">@d_shchet</a>
          </div>
          <div>
            <p className="contacts__p">E-mail:</p>
            <a className="contacts__a" href="mailto:d.shchet@gmail.com">d.shchet@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contacts;