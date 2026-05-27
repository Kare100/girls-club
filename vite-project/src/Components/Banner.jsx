import girls from '../assets/girls.jpg'
export default function Banner() {

return(
    <div className= "Banner">
        <img src={girls} alt="Banner Image" className="imgBanner"/>
        <div className="bannerText">
           <h1 className="titleBanner">Welcome to the Girls' Club!</h1>
           <p className = "descBanner">A Community of Women for Women by Women</p>
        </div>

    </div>
)


}