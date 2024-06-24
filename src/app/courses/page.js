import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'


const page = () => {
  return (
    <div>
        {/* Navbar sestion */}
        <Navbar/>

        {/* courses tital sestion */}
      <h1 className='text-center text-red-700 font-bold text-5xl pt-14 pb-16 font-s bg-white'>Expore Our Top-Rated Courses Selected By Professionals</h1>


{/* courses sestion 3/9 */}
    <section class="text-gray-600 body-font">
  <div class="container pt-10 pb-2 py-10  mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
          <Image width={200} height={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src="/python.jpg" alt="blog"></Image>
          <div class="p-6">
            <h1 class="title-font text-lg font-extrabold text-gray-900 mb-3 ">Python</h1>
            <p class="leading-relaxed mb-3">Python is a general-purpose language, which means it can be used for a wide range of applications, from web development to scientific computing, data analysis, artificial intelligence, and more.</p>
            <h2 className='text-black font-bold'>RS.26,000</h2>
            <div class="flex items-center flex-wrap ">
              <Link href={"/contact"} class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Register Now
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
          <Image width={200} height={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src="/ecom.jpg" alt="blog"></Image>
          <div class="p-6">
            <h1 class="title-font text-lg font-extrabold text-gray-900 mb-3">E-Commerce</h1>
            <p class="leading-relaxed mb-3">E-commerce, short for electronic commerce, refers to the buying and selling of goods or services over the internet. It has revolutionized the way businesses operate and how consumers shop.</p>
            <h2 className='text-black font-bold'>RS.23,000</h2>
            <div class="flex items-center flex-wrap">
            <Link href={"/contact"} class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Register Now
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
          <Image height={200} width={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src="/ML.jpg" alt="blog"></Image>
          <div class="p-6">
            <h1 class="title-font text-lg font-extrabold text-gray-900 mb-3">Machine Learning</h1>
            <p class="leading-relaxed mb-3">Machine Learning (ML) is a branch of artificial intelligence (AI) that focuses on developing algorithms and techniques that allow computers to learn from and make predictions or decisions based on data. </p>
            <h2 className='text-black font-bold'>RS.26,000</h2>
            <div class="flex items-center flex-wrap ">
            <Link href={"/contact"} class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Register Now
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




{/* courses sestion 6/9 */}
<section class="text-gray-600 body-font">
  <div class="container px-2 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
          <Image width={200} height={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src="/web.jpg" alt="blog"></Image>
          <div class="p-6">
            <h1 class="title-font text-lg font-extrabold text-gray-900 mb-3">Web Development</h1>
            <p class="leading-relaxed mb-3">Web development refers to the process of building and maintaining websites and web applications. It encompasses various aspects including web design, web content development, client-side/server-side scripting, and network security configuration. </p>
            <h2 className='text-black font-bold'>RS.20,000</h2>
            <div class="flex items-center flex-wrap ">
            <Link href={"/contact"} class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Register Now
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
          <Image width={50} height={50} class="lg:h-48 md:h-36 w-full object-cover object-center" src="/CS.jpg" alt="blog"></Image>
          <div class="p-6">
            <h1 class="title-font text-lg font-extrabold text-gray-900 mb-3">Cyber Security</h1>
            <p class="leading-relaxed mb-3">Cybersecurity is the practice of protecting computer systems, networks, devices, and data from unauthorized access, cyberattacks, theft, or damage. It encompasses a wide range of technologies, processes, and practices designed to ensure the confidentiality, integrity, and availability of information and systems. </p>
            <h2 className='text-black font-bold'>RS.26,000</h2>
            <div class="flex items-center flex-wrap">
            <Link href={"/contact"} class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Register Now
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
          <Image height={200} width={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src="/EH.png" alt="blog"></Image>
          <div class="p-6">
            <h1 class="title-font text-lg font-extrabold text-gray-900 mb-3">Ethical Hacking</h1>
            <p class="leading-relaxed mb-3">Ethical hacking, also known as penetration testing or white-hat hacking, refers to the practice of intentionally probing computer systems, networks, or applications to discover vulnerabilities that malicious hackers could exploit. </p>
            <h2 className='text-black font-bold'>RS.28,000</h2>
            <div class="flex items-center flex-wrap ">
            <Link href={"/contact"} class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Register Now
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



{/* courses sestion 9/9 */}
<section class="text-gray-600 body-font">
  <div class="container px-2 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
          <Image width={200} height={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src="/DS.jpeg" alt="blog"></Image>
          <div class="p-6">
            <h1 class="title-font text-lg font-extrabold text-gray-900 mb-3">Data Science</h1>
            <p class="leading-relaxed mb-3">Data Science is a multidisciplinary field that combines techniques from statistics, mathematics, computer science, and domain knowledge to extract insights and knowledge from structured and unstructured data.</p>
            <h2 className='text-black font-bold'>RS.25,000</h2>
            <div class="flex items-center flex-wrap ">
            <Link href={"/contact"} class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Register Now
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
          <Image width={200} height={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src="/GD.jpg" alt="blog"></Image>
          <div class="p-6">
            <h1 class="title-font text-lg font-extrabold text-gray-900 mb-3">Graphic Design</h1>
            <p class="leading-relaxed mb-3">Graphic design is a multifaceted discipline that leverages visual elements to communicate messages effectively. It combines art and technology to create visually appealing and functional designs across various media.</p>
            <h2 className='text-black font-bold'>RS.15,000</h2>
            <div class="flex items-center flex-wrap">
            <Link href={"/contact"} class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Register Now
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
          <Image height={200} width={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src="/ai.jfif" alt="blog"></Image>
          <div class="p-6">
            <h1 class="title-font text-lg font-extrabold text-gray-900 mb-3">Artificial Intelligence</h1>
            <p class="leading-relaxed mb-3">Artificial Intelligence (AI) is a branch of computer science dedicated to creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, language understanding, and interaction. </p>
            <h2 className='text-black font-bold'>RS.26,000</h2>
            <div class="flex items-center flex-wrap ">
            <Link href={"/contact"} class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Register Now
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>
    </div>
  )
}

export default page


