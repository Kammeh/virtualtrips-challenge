import React from 'react';
import Logo from '../Logo';

const Header = () => (
  <React.Fragment>
    <header>
      <Logo />
    </header>

    <style jsx>
      {`
        header {
          width: 100%;
          height: 100px;
          background: #cecece;
          display: flex;
          justify-content: center;
          align-items: center;

          h1 {
            font-size: 2.6rem;
          }
        }
      `}
    </style>
  </React.Fragment>
);

export default Header;