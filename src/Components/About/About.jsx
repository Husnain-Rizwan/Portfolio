import { Footer } from "../Footer/footer";
import { Header } from "../Header/Header";

export function About() {
  return (
    <>
    <Header/>
    <section id="about" className="w-[90%] mx-auto my-20 px-4">
      {/* About Me */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#42446E] mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Hi, my name is <span className="font-semibold">Husnain Rizwan</span>. 
          I am currently pursuing a <span className="font-semibold">BSCS</span> at Virtual University. 
          I specialize in front-end development and have created multiple projects using HTML, CSS, JavaScript, and React. 
          My goal is to become a full-stack developer and build professional, responsive web applications.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#42446E] mb-6">Experience</h2>
        <div className="flex flex-col gap-6">
          
          {/* Entry 1 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-2 border-gray-300 pl-4 relative">
            <span className="absolute left-[-10px] top-2 w-4 h-4 bg-indigo-600 rounded-full"></span>
            <div>
              <h3 className="font-semibold text-gray-800">Front-End Developer</h3>
              <p className="text-gray-500">Self-Learning </p>
            </div>
            <div className="flex gap-2 items-center mt-2 sm:mt-0">
              <span className="text-sm text-gray-400">Nov 2025 - Present</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Full-time</span>
            </div>
          </div>

        </div>

        <div className="mt-6">
          <a href="/#projects" className="bg-[#42446E] hover:bg-[#36385a] text-white font-semibold px-4 py-2 rounded-xl transition-all">
            See Projects
          </a>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-3xl font-bold text-[#42446E] mb-6">Education</h2>
        <div className="flex flex-col gap-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-2 border-gray-300 pl-4 relative">
            <span className="absolute left-[-10px] top-2 w-4 h-4 bg-indigo-600 rounded-full"></span>
            <div>
              <h3 className="font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-500">Virtual University, Lahore</p>
            </div>
            <div className="flex gap-2 items-center mt-2 sm:mt-0">
              <span className="text-sm text-gray-400">2023 - Present</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Ongoing</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-2 border-gray-300 pl-4 relative">
            <span className="absolute left-[-10px] top-2 w-4 h-4 bg-indigo-600 rounded-full"></span>
            <div>
              <h3 className="font-semibold text-gray-800">Intermediate in Computer Science</h3>
              <p className="text-gray-500">Allama Iqbal College</p>
            </div>
            <div className="flex gap-2 items-center mt-2 sm:mt-0">
              <span className="text-sm text-gray-400">2021 - 2023</span>
            </div>
          </div>

        </div>
      </div>

    </section>
    <Footer />
    </>
  );
}
