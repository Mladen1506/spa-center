import Btn from "./Btn";



const ContactForm = (props) => {
  return (
    <>
      <div className="form-contact-us">
        <form>

          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <label>First Name</label>
                <input type="text"/>
              </div>
              <div className="col-12 col-sm-6">
                <label>First Name</label>
                <input type="text"/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>e-mail</label>
                <input type="email"/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Comment</label>
                <textarea />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Btn>SUBMIT</Btn>
              </div>
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;