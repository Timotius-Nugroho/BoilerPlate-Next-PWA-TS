const SampleTable = () => {
  return(
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">
              <p className="text-end">Handle</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><p className="text-end">@mdo</p></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td><p className="text-end">@fat</p></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td><p className="text-end">@facebook</p></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SampleTable