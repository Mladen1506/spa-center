const PageForma = () => {
  return (
    <div className="fl-rich-text">
      <p>A non-invasive skin procedure that uses heat and radio frequency to increase collagen production in the face, therefore lifting, tightening, and contouring your skin.</p>
      <h6>Pricing</h6>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td></td>
            <td>Single</td>
            <td>Pkg x 3</td>
            <td>Pkg x 6</td>
          </tr>
          <tr>
            <td>Face Or Neck</td>
            <td>$650</td>
            <td></td>
            <td>$3300</td>
          </tr>
          <tr>
            <td>Face And Neck</td>
            <td>$1200</td>
            <td>$4400</td>
            <td>$6000</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default PageForma;