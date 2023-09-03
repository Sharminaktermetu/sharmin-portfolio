import SectionTitle from "../../Shared/SectionTitle";


const Contact = () => {
    return (
        <div className="mx-auto text-center mb-20">
            <SectionTitle title={'Contact With Me'}></SectionTitle>
<div className="join">
  <input className="input input-bordered join-item" placeholder="Email"/>
  <button className="btn join-item rounded-r-full">Send</button>

</div>
    </div>
    );
};

export default Contact;