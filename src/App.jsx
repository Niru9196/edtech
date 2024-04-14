import Navbar from "./pages/Navbar/Navbar"
import FeaturedCourses from "./pages/courses/FeaturedCourses"
import MainContent from "./pages/hero-section/MainContent"
import Testimonial from "./pages/testimonial/Testimonial"

function App() {

  return (
    <>
      <main>
        <header>
          <Navbar />
        </header>
        <hr className="shadow-amber-50 shadow-2xl"/>
        <section>
          <MainContent />
        </section>
        <aside>
          <FeaturedCourses />
        </aside>
        <div className="mt-24 w-[1000px] m-auto flex gap-3">
          <Testimonial />
          <Testimonial />
        </div>
        
        <div>
          <h2>hii</h2>
        </div>
      </main>
    </>
  )
}

export default App
