import style from './Footer.module.css'
export default function Footer(){
    return (
<footer className='p-5'>
  <div className="container">
    <div className="row justify-content-between align-items-start text-center py-4">
      <div className="col-lg-6">
        <div className={`${style.contact} contact row flex-column align-items-center justify-content-center gap-4 text-center px-4`}>
          <h3 className={`${style.fontColor} fw-bolder`}>Contact Us</h3>
          <p className={`${style.pStyle}`}>You can call us by these numbers </p>
          <div className={`${style.bg} row flex-column gap-2 w-50 p-2`}>
          <a href="tel:0096385254825">+96385254825</a>
          <a href="tel:0096385254825">+96385254825</a>
          </div>

        </div>
      </div>
      <div className="col-lg-6">
        <div className='row flex-column align-items-center justify-content-center gap-4 text-center px-3'>
          <h3 className={`${style.fontColor} fw-bold `} >Find Your Recipe</h3>
          <p className={`${style.pStyle}`}>Click here to find your favorite Recipe</p>
          <button className={`${style.btnFooter} w-50`}>Click Here</button>
        </div>
      </div>
    </div>
  </div>
  </footer>



    );
}