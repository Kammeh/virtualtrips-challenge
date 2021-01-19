const Results = ({ results, empty = true }) => {
  console.log(results);
  return (
    <div className='results'>
      {results.length === 0 ? (
        <p>{empty ? `You haven't entered a valid search term yet, try in the box above!` : 'No results match your query.'}</p>
      ) : (
        <>
          <table>
            <tr>
              <th>Name</th>
              <th>Co-ordinates</th>
            </tr>
            {results.map(res => (
              <tr>
                <td>{res.name}</td>
                <td className='small'>{`${res.latitude}, ${res.longitude}`}</td>
              </tr>
            ))}
          </table>
        </>
      )}

      <style jsx>
        {`
          .results {
            max-width: 600px;
            margin: 0 auto;
            padding-top: 20px;

            p {
              font-size: 1.5rem;
              line-height: 2.0rem;
              text-align: center;
            }

            table {
              width: 100%;

              td, th {
                font-size: 1.8rem;
                line-height: 2.0rem;
                width: 50%;
                padding: 5px;
  
                &.small {
                  font-size: 1.4rem;
                  margin-left: 40px;
                }
              }
  
              th {
                text-align: left;
              }
            }
          }
        `}
      </style>
    </div>
  );
}

export default Results;