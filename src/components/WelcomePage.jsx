const WelcomePage = () => {
  return (
    <>
      <div className="min-h-screen  bg-purple-100 flex flex-wrap items-center  justify-center  ">
        <h1 className="text-5xl	text-center font-bold	">JDW Rhythm App</h1>
        <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container   ">
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-12 w-full md:max-w-min sm:w-full bg-white z-30">
            <div className="text-center py-4 px-7">
              <h3 className="text-gray-700 text-4xl">Easy</h3>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="text-center mt-3">
              <p>Start off with Whole note exercises.</p>
              <p>Move onto Half note exercises.</p>
              <p>Then try the Quarter note exercises.</p>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">Learn</button>
          </div>
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-12 w-full md:max-w-min sm:w-full bg-purple-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
            <div className="text-center py-4 px-7">
              <h3 className="text-white text-4xl">Medium</h3>
            </div>
            <div className="h-px bg-purple-800"></div>
            <div className="text-center mt-3 text-white">
              <p>Start off with 8th note exercises.</p>
              <p>Move onto dotted quarter note exercises.</p>
              <p>Then try the 16th note exercises.</p>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-purple-800 hover:shadow-xl duration-200 hover:bg-purple-800">Learn</button>
          </div>
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-12 w-full md:max-w-min sm:w-full bg-white z-30">
            <div className="text-center py-4 px-7">
              <h3 className="text-gray-700 text-4xl">Hard</h3>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="text-center mt-3">
              <p>Start off with syncopation exercises.</p>
              <p>Move onto dotted note exercises.</p>
              <p>Then try the compound time signatures.</p>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">Learn</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default WelcomePage;