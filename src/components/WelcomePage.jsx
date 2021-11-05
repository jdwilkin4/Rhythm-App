import { Link } from "react-router-dom";

const WelcomePage = () => {

  const cardOptions = [{
    title: "Easy",
    description: "Whole note, Half note, Quarter note exercises.",
    titleStyles: "text-gray-700 text-4xl",
    bgColor: "h-px bg-gray-100",
    cardColor: "py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-12 w-full md:max-w-min sm:w-full bg-white z-30",
    fontStyle: "text-center mt-3",
    buttonStyle: "w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800",
    path: '/easy-rhythms'
  }, {
    title: "Medium",
    description: "8th note, dotted quarter note, 16th note exercises.",
    cardColor: "py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-12 w-full md:max-w-min sm:w-full bg-purple-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl",
    titleStyles: "text-white text-4xl",
    bgColor: "h-px bg-purple-800",
    fontStyle: "text-center mt-3 text-white",
    buttonStyle: "w-full mt-6 mb-3 py-2 text-white font-semibold bg-purple-800 hover:shadow-xl duration-200 hover:bg-purple-800",
    path: '/medium-rhythms'
  }, {
    title: "Hard",
    description: "Syncopation, 6/8, 3/8 signature exercises.",
    titleStyles: "text-gray-700 text-4xl",
    cardColor: "py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-12 w-full md:max-w-min sm:w-full bg-white z-30",
    bgColor: "h-px bg-gray-200",
    fontStyle: "text-center mt-3",
    buttonStyle: "w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800",
    path: '/hard-rhythms'
  }]

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
      <Link to={path} className={buttonStyle}>Learn</Link>
    </div>
  )
}

