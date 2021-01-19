import Input from '../Input';

const Form = ({ onSubmit }) => {
  const submitQuery = (val) => {
    onSubmit(val);
  }

  return (
    <form name='location-search'>
      <p>Enter your search term below to match on locations around GB</p>
      <Input name='location' placeholder='Enter location...' onTextChange={submitQuery} />

      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          p { 
            font-size: 1.8rem;
          }
        `}
      </style>
    </form>
  )
}

export default Form;