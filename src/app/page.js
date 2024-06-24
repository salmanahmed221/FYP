import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section class="text-gray-600 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
              <h1 class="font-extrabold text-3xl title-font  mb-4  text-red-700 ">
                Welcome to IT Institute - No. 1 IT Training Institute in
                Pakistan
              </h1>
              <p class="leading-relaxed mb-4">
                Are you ready to take your IT skills to the next level with one
                of the leading IT Training Institute in Pakistan? Introducing
                our cutting-edge training program on emerging technologies,
                designed to build a thriving IT ecosystem in Pakistan. Get ready
                to tackle real-world business challenges and become job-ready
                for international opportunities and global competition.
              </p>
              <Link href={"/contact"}>
                <button class="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Register Now
                </button>
              </Link>
            </div>
            <Image
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover  object-center rounded"
              src="/home.jpg"
              width={700}
              height={700}
            ></Image>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center border-red-700 ">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-red-700 animate-bounce shadow-2xl">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-white">50+</h2>
                <p class="leading-relaxed text-white">Courses</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg  bg-red-700 animate-bounce shadow-2xl">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class=" text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl  text-white">
                  1.3k
                </h2>
                <p class="leading-relaxed  text-white">Students</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg  bg-red-700 animate-bounce shadow-2xl">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class=" text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl  text-white">
                  150+
                </h2>
                <p class="leading-relaxed  text-white">Instructor</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg  bg-red-700 animate-bounce shadow-2xl">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class=" text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl  text-white">80+</h2>
                <p class="leading-relaxed  text-white">Mou’s Sign</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-white">
        <div class="container py-24 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 shadow-2xl">
              <Image
                alt="gallery"
                class="w-full object-cover h-full object-center block opacity-60 absolute inset-0"
                src="/ad.jpg"
                width={200}
                height={200}
              ></Image>
              <div class="text-center relative z-10 w-full">
                <h2 class="text-4xl text-black  font-extrabold title-font mb-2 px-10">
                  Admissions are open for the fresh batch. Let’s grow together!
                </h2>
                <Link href={"/contact"}>
                  <button class="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="font-extrabold text-5xl title-font  text-red-700 text-center pt-10 bg-white">
        Honoring Excellence: Certification Moments
      </h1>

      <section class="text-gray-600 body-font bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center ">
            <div class="sm:w-1/2 mb-10 px-4 ">
              <div class="rounded-lg h-64 overflow-hidden shadow-2xl">
                <Image
                  alt="content"
                  class="object-cover object-center h-full w-full "
                  src="/s3.jpg"
                  width={1200}
                  height={1200}
                ></Image>
              </div>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden shadow-2xl">
                <Image
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/s2.jpg"
                  width={1200}
                  height={600}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="font-extrabold text-5xl title-font  text-red-700 text-center pt-10 pb-10 bg-white">
        What our students have to say
      </h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center bg-white rounded-lg shadow-2xl">
                <Image
                  alt="testimonial"
                  class="w-20 mt-4 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/fd1.jpg"
                  width={200}
                  height={200}
                ></Image>
                <p class="leading-relaxed">
                  My experience with IT Institute is really great.I learn a lot
                  in a very short time. IT Institute is the best Institute.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-red-700 mt-6 mb-4"></span>
                <h2 class="text-black font-bold  title-font tracking-wider text-sm">
                  Zain Ali
                </h2>
                <p class="text-gray-500">Web Designer</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center  bg-white rounded-lg shadow-2xl">
                <Image
                  alt="testimonial"
                  class="w-20 h-20 mb-8 mt-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/fd2.jpg"
                  width={200}
                  height={200}
                ></Image>
                <p class="leading-relaxed">
                  The best Institute ever. After completion my Certification
                  from IT Institute, I would strongly recommend this Institute
                  to others.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-red-700 mt-6 mb-4"></span>
                <h2 class="text-black font-bold  title-font tracking-wider text-sm">
                  Umair
                </h2>
                <p class="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center  bg-white rounded-lg shadow-2xl">
                <Image
                  alt="testimonial"
                  class="w-20 h-20 mb-8 mt-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/fd3.jpg"
                  width={200}
                  height={200}
                ></Image>
                <p class="leading-relaxed">
                  IT Institute provided me a great environment for learning. The
                  faculty and staff are very experienced.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-red-700 mt-6 mb-4"></span>
                <h2 class="font-bold text-black title-font tracking-wider text-sm">
                  Hamza
                </h2>
                <p class="text-gray-500">Web Develeoper</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
