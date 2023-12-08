

const Footer = () => {
    return (
<footer className="footer  lg:p-10 px-28 bg-base-200 text-base-content">
  <aside>
 <img src="https://i.ibb.co/CzCrLZp/pngtree5111.png" alt="" className="w-32 " />
    <p className="uppercase text-xl font-light  " ><br/>many many happy <br />
     returns of the day</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
  </nav>
</footer>



    );
};

export default Footer;