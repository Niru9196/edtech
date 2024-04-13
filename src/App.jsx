import Navbar from "./pages/Navbar/Navbar"
import FeaturedCourses from "./pages/courses/FeaturedCourses"
import MainContent from "./pages/hero-section/MainContent"

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
      </main>
    </>
  )
}

export default App
