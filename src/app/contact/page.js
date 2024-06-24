import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const contact = () => {
    return (
      <>
      <Navbar/>
      <h1 className='text-center font-bold text-5xl pt-10 pb-6 text-red-700 bg-white '>Contact Us</h1>
      <h2 className='text-center font-bold text-2xl pt-5 pb-5'>Our Team is always ready to help</h2>
      <form action="https://formspree.io/f/mqazzqzz"
  method="POST">
      <section class="text-black body-font relative">
  <div class="container px-5 pb-10 mx-auto ">
    <div class="flex flex-col text-center w-full mb-12 ">
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto ">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
        
          <div class="relative">
            <label htmlFor="name" for="name" class="leading-7 text-sm text-black">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required></input>
            <label for="phone" htmlFor="phone" class="leading-7 text-sm text-black">Phone No</label>
            <input type="phone" id="phone" name="phone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required></input>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" htmlFor="email" class="leading-7 text-sm text-black">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required></input>
            <label for="course" htmlFor="course" class="leading-7 text-sm text-black">Select Course</label>

            <input type="course" id="course" name="course" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required></input>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" htmlFor="message" class="leading-7 text-sm text-black">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>
</form >

        <Footer/>
      </>
    )
  }
  
  export default contact