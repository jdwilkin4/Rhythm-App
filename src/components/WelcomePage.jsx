import { Link } from "react-router-dom";
import cardOptions from "../card-options";

const WelcomePage = () => {

  return (
    <>
      <div className="min-h-screen  bg-purple-50 flex flex-wrap items-center  justify-center">
        <h1 className="text-5xl	text-center font-bold">JDW Rhythm App</h1>
        <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container">
          {cardOptions.map((option, index) => (
            <div key={index}>
              <WelcomeCard {...option} />
            </div>
          ))}
        </div>
      </div >
    </>
  )
}
export default WelcomePage;



const WelcomeCard = ({ title, description, titleStyles, bgColor, cardColor, fontStyle, buttonStyle, path }) => {
  return (
    <div className={cardColor}>
      <div className="text-center py-4 px-7">
        <h3 className={titleStyles}>{title}</h3>
      </div>
      <div className={bgColor}></div>
      <div className={fontStyle}>
        <p>{description}</p>
      </div>
      <div className="text-center mt-6 py-6">
        <Link to={path} className={buttonStyle}>Learn</Link>
      </div>

    </div>
  )
}

