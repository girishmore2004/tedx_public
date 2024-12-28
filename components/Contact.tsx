import Image from "next/image";
import map from "../public/assets/map.jpg";
import logo from "../public/assets/logo.jpg";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact">
      <div className="grid grid-cols-2 lg:grid-cols-3 space-y-10 md:space-x-10 lg:space-y-0 lg:space-x-5 items-center p-10">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-7">
          <Image src={logo} alt="logo" className="self-center" />
          <div className="text-4xl font-black self-center">Contact Us</div>
          <div className="grid grid-rows-3 gap-3 text-2xl justify-center lg:px-10 py-2">
            <span>Organiser,Co-organiser</span>
            <span> Tanvi Malode, Abhijeet Singh</span>
            <span> +91 90967 79472, +91 85048 27156</span>
            <Link href="mailto:tedxvnit@vnit.ac.in" className="ml-2">
              tedxvnit@vnit.ac.in
            </Link>
            <Link href="https://instagram.com/tedxvnit" className="w-full">
              <div className="flex gap-2 justify-start">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.175 7.325C25.8783 7.325 25.5883 7.41297 25.3416 7.5778C25.095 7.74262 24.9027 7.97689 24.7892 8.25097C24.6756 8.52506 24.6459 8.82666 24.7038 9.11764C24.7617 9.40861 24.9046 9.67588 25.1143 9.88566C25.3241 10.0954 25.5914 10.2383 25.8824 10.2962C26.1733 10.3541 26.4749 10.3244 26.749 10.2108C27.0231 10.0973 27.2574 9.90503 27.4222 9.65836C27.587 9.41168 27.675 9.12167 27.675 8.825C27.675 8.42718 27.517 8.04564 27.2357 7.76434C26.9544 7.48304 26.5728 7.325 26.175 7.325ZM31.925 10.35C31.9007 9.31287 31.7064 8.28675 31.35 7.3125C31.0322 6.47892 30.5375 5.7241 29.9 5.1C29.281 4.45928 28.5244 3.96772 27.6875 3.6625C26.7158 3.2952 25.6886 3.09651 24.65 3.075C23.325 3 22.9 3 19.5 3C16.1 3 15.675 3 14.35 3.075C13.3114 3.09651 12.2842 3.2952 11.3125 3.6625C10.4771 3.97081 9.72117 4.46195 9.1 5.1C8.45928 5.71897 7.96772 6.47555 7.6625 7.3125C7.2952 8.28418 7.09651 9.31144 7.075 10.35C7 11.675 7 12.1 7 15.5C7 18.9 7 19.325 7.075 20.65C7.09651 21.6886 7.2952 22.7158 7.6625 23.6875C7.96772 24.5244 8.45928 25.281 9.1 25.9C9.72117 26.538 10.4771 27.0292 11.3125 27.3375C12.2842 27.7048 13.3114 27.9035 14.35 27.925C15.675 28 16.1 28 19.5 28C22.9 28 23.325 28 24.65 27.925C25.6886 27.9035 26.7158 27.7048 27.6875 27.3375C28.5244 27.0323 29.281 26.5407 29.9 25.9C30.5403 25.2782 31.0354 24.5227 31.35 23.6875C31.7064 22.7132 31.9007 21.6871 31.925 20.65C31.925 19.325 32 18.9 32 15.5C32 12.1 32 11.675 31.925 10.35ZM29.675 20.5C29.6659 21.2935 29.5222 22.0796 29.25 22.825C29.0504 23.369 28.7298 23.8605 28.3125 24.2625C27.9071 24.6756 27.4165 24.9955 26.875 25.2C26.1296 25.4722 25.3435 25.6159 24.55 25.625C23.3 25.6875 22.8375 25.7 19.55 25.7C16.2625 25.7 15.8 25.7 14.55 25.625C13.7261 25.6404 12.9057 25.5136 12.125 25.25C11.6072 25.0351 11.1392 24.716 10.75 24.3125C10.3351 23.9109 10.0186 23.419 9.825 22.875C9.51982 22.1189 9.35055 21.3149 9.325 20.5C9.325 19.25 9.25 18.7875 9.25 15.5C9.25 12.2125 9.25 11.75 9.325 10.5C9.3306 9.68882 9.47869 8.88493 9.7625 8.125C9.98256 7.59739 10.3203 7.12707 10.75 6.75C11.1298 6.32021 11.5991 5.97887 12.125 5.75C12.8869 5.47505 13.69 5.33135 14.5 5.325C15.75 5.325 16.2125 5.25 19.5 5.25C22.7875 5.25 23.25 5.25 24.5 5.325C25.2935 5.3341 26.0796 5.47781 26.825 5.75C27.393 5.96082 27.9029 6.30356 28.3125 6.75C28.7221 7.13397 29.0422 7.60342 29.25 8.125C29.5278 8.88617 29.6716 9.68972 29.675 10.5C29.7375 11.75 29.75 12.2125 29.75 15.5C29.75 18.7875 29.7375 19.25 29.675 20.5ZM19.5 9.0875C18.2323 9.08997 16.9937 9.46816 15.9408 10.1743C14.8879 10.8804 14.068 11.8827 13.5845 13.0547C13.1011 14.2266 12.9759 15.5156 13.2247 16.7587C13.4736 18.0017 14.0853 19.1432 14.9826 20.0387C15.8799 20.9343 17.0225 21.5438 18.2661 21.7902C19.5096 22.0366 20.7983 21.9089 21.9693 21.4232C23.1403 20.9375 24.1411 20.1155 24.8452 19.0613C25.5492 18.007 25.925 16.7677 25.925 15.5C25.9267 14.6564 25.7615 13.8208 25.439 13.0412C25.1166 12.2616 24.6432 11.5535 24.0461 10.9576C23.449 10.3616 22.7399 9.8896 21.9597 9.56866C21.1796 9.24773 20.3436 9.0842 19.5 9.0875ZM19.5 19.6625C18.6767 19.6625 17.872 19.4184 17.1874 18.961C16.5029 18.5036 15.9694 17.8535 15.6544 17.0929C15.3393 16.3323 15.2569 15.4954 15.4175 14.6879C15.5781 13.8805 15.9745 13.1388 16.5567 12.5567C17.1388 11.9745 17.8805 11.5781 18.6879 11.4175C19.4954 11.2569 20.3323 11.3393 21.0929 11.6544C21.8535 11.9694 22.5036 12.5029 22.961 13.1874C23.4184 13.872 23.6625 14.6767 23.6625 15.5C23.6625 16.0466 23.5548 16.5879 23.3456 17.0929C23.1365 17.5979 22.8299 18.0568 22.4433 18.4433C22.0568 18.8299 21.5979 19.1365 21.0929 19.3456C20.5879 19.5548 20.0466 19.6625 19.5 19.6625Z"
                    fill="black"
                  />
                </svg>
                Instagram
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/company/tedxvnit/mycompany/"
              className="w-full"
            >
              <div className="ml-2 flex gap-2 justify-start">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.1906 7.49693C6.44935 7.49693 7.46977 6.47651 7.46977 5.21776C7.46977 3.95902 6.44935 2.9386 5.1906 2.9386C3.93186 2.9386 2.91144 3.95902 2.91144 5.21776C2.91144 6.47651 3.93186 7.49693 5.1906 7.49693Z"
                    fill="black"
                  />
                  <path
                    d="M10.6299 9.27323V23.9103H15.1745V16.6719C15.1745 14.762 15.5338 12.9123 17.902 12.9123C20.2376 12.9123 20.2665 15.096 20.2665 16.7925V23.9115H24.8136V15.8846C24.8136 11.9416 23.9647 8.9115 19.3562 8.9115C17.1436 8.9115 15.6604 10.1257 15.0539 11.2748H14.9924V9.27323H10.6299ZM3.22394 9.27323H7.77579V23.9103H3.22394V9.27323Z"
                    fill="black"
                  />
                </svg>
                LinkedIn
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="text-center">
            <div className="text-4xl font-black">Important Links</div>
            <div className="text-red-500 underline underline-offset-1 flex flex-col justify-center gap-3 mt-8 text-3xl">
              <Link href="ted.com">TED</Link>
              <Link href="https://www.ted.com/about/programs-initiatives/tedx-program">
                TEDx
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={map}
          alt="Map"
          className="self-center col-span-2 lg:col-span-1 h-full md:w-[90%]"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 px-10 py-4 items-center">
        <div className="bg-red-500 h-2 my-[9px] w-full"></div>
        <div className="text-md flex-grow lg:text-center">
          This Independent TEDx Event Is Operated Under License From TED.
        </div>
        <div className="bg-red-500 h-2 my-[9px] w-full"></div>
      </div>
    </div>
  );
};

export default Contact;
