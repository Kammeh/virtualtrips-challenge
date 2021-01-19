import { useState } from 'react';

import Header from '../Header';
import Form from '../Form';
import Results from '../Results';

import { getLocations } from '../../utils/api';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getMatchingLocations = async (query) => {
    try {
      setSearchTerm(query);
      const res = await getLocations(query);
      setResults(res);
      setErrorMessage('');
    } catch (e) {
      setResults([]);
      if (e.message !== 'NOT_LONG_ENOUGH') {
        setErrorMessage('Uh-oh, something went wrong!');
      }
    }
  }

  return (
    <>
      <Header />
      <div className='content'>
        <div className='form'>
          <Form onSubmit={getMatchingLocations} searchTerm={searchTerm} />
          <div className='error'>
            <p>{errorMessage}</p>
          </div>
          <div className='spacer'></div>
        </div>

        <Results results={results} empty={searchTerm.length < 2} />
      </div>

      <style jsx>
        {`
          .content {
            padding: 20px;

            .form {
              padding: 80px 0;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;

              .spacer {
                width: 80px;
                height: 1px;
                border-top: 1px solid #cecece;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
              }

              .error {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                display: ${errorMessage === '' ? 'none' : 'block'};
              }
            }
          }
        `}
      </style>
    </>
  )
}

export default Main;