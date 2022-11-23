<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable max-len -->
<template>
  <div class="bg-main relative w-full h-full overflow-x-hidden">
    <header class="w-full h-[720px]">
      <nav class="flex h-24 w-full px-10 md:px-32">
        <section class="cursor_pointer flex w-24">
          <img src="../src/img/Union (2).png" alt="travel_icon" class="w-10 h-9 m-auto">
          <p class="font-sen font-bold text-xl m-auto pl-2"> Salty</p>
        </section>
        <section class="flex w-full m-auto font-poppins text-base font-normal pl-36 md:pl-20">
          <a class="some cursor_pointer pr-9">Home</a>
          <a class="cursor_pointer pr-9 w-max">About us</a>
          <a class="cursor_pointer pr-9">Destination</a>
          <a class="cursor_pointer pr-9">Tours</a>
          <a class="cursor_pointer pr-9">Blog</a>
        </section>
        <section class="invisible flex w-80 border border-solid border-orangeCustom rounded-[37px] h-14 m-auto lg:visible">
          <button class="flex mx-auto">
            <p class="none text-orangeCustom pl-2 font-medium my-auto md:block">Book Now</p>
            <img src="../src/img/Vector (1).png" alt="fly_icon" class="w-5 h-5 my-auto ml-1.5">
          </button>
        </section>
      </nav>
      <div class="flex w-full h-max md:h-[624px] px-10 md:px-32 ml-[94px] md:ml-0">
        <div class="w-1/2 mt-[15px] md:my-auto">
          <h1 class="w-[577px] h-[258px] font-sen font-bold text-[84px] leading-[86px] text-fontDark">Discover the Best Lovely Places</h1>
          <p class="w-[500px] h-[56px] font-main font-normal text-lg text-fontLight mt-5">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
          <div class="flex w-[500px] h-[76px] rounded-[38px] bg-white mt-5">
            <div class="my-auto w-[170px] pl-5">
              <h3 class="font-main font-medium text-[18px] leading-[17px] text-fontDark">Where</h3>
              <div class="flex">
                <input type="text" placeholder="Center Point, Lo..." class="placeholder: font-main font-normal text-fontLight text-xs pt-1">
                <img src="../src/img/Vector (2).png" alt="point_icon" class="h-[18px] w-[13px] ml-[-31px] md:ml-0">
              </div>
            </div>
            <div class="border border-solid border-[#EAEAEB] h-[47px] ml-5 my-auto"></div>
            <div class="my-auto w-[170px] pl-5">
              <h3 class="font-main font-medium text-[18px] leading-[17px] text-fontDark">Date</h3>
              <div class="flex">
                <input type="text" placeholder="09th March,2021" class="placeholder: font-main font-normal text-fontLight text-xs pt-1">
                <img src="../src/img/Union.png" alt="point_icon" class="h-[15px] w-[15px] ml-[-25px] md:ml-0">
              </div>
            </div>
            <button class="flex bg-orangeCustom w-14 h-14 rounded-[31px] m-auto ml-16">
              <div class="m-auto">
                <img src="../src/img/Vector (4).png" alt="circle" class="w-5 h-5 m-auto mt-[3px]">
                <img src="../src/img/Vector (5).png" alt="line" class="w-[6px] h-[6px] m-auto ml-[18px] mt-[-3px]">
              </div>
            </button>
          </div>
        </div>
        <div class="invisible w-1/2 mx-auto lg:visible">
          <img src="../src/img/Image.png" alt="main_picture">
        </div>
      </div>
    </header>
    <main class="md:mt-24 mt-0">
      <div class="categories w-full h-max px-10 md:px-32">
        <div class="flex justify-between">
          <div>
            <h2 class="w-[298px] h-[56px] font-main font-semibold text-[56px] leading-[56px] text-fontDark">Categories</h2>
            <p class="w-[370px] h-[78px] font-main font-normal text-[16px] leading-[26px] text-fontLight mt-[30px]">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
          </div>
          <div>
            <button class="scroll_btn border border-solid border-fontDark w-14 h-14 rounded-[100px] mr-[16px] text-fontDark text-[18px] font-medium">&lt;</button>
            <button class="scroll_btn border border-solid border-fontDark w-14 h-14 rounded-[100px] text-fontDark text-[18px] font-medium">></button>
          </div>
        </div>
        <div class="travel_cards lg:flex justify-around my-auto mt-[60px] grid grid-cols-3">
          <div>
            <img src="../src/img/Rectangle 4406.png" alt="beach" class="w-[170px] h-[230px] m-auto">
            <h4 class="mt-5 text-center font-main font-medium text-[22px] leading-[26px] text-fontDark">Beach</h4>
          </div>
          <div>
            <img src="../src/img/Rectangle 4407.png" alt="desert" class="w-[170px] h-[230px] m-auto">
            <h4 class="mt-5 text-center font-main font-medium text-[22px] leading-[26px] text-fontDark">Desert</h4>
          </div>
          <div>
            <img src="../src/img/Rectangle 4408.png" alt="mountain" class="w-[170px] h-[230px] m-auto">
            <h4 class="mt-5 text-center font-main font-medium text-[22px] leading-[26px] text-fontDark">Mountain</h4>
          </div>
          <div>
            <img src="../src/img/Rectangle 4409.png" alt="temple" class="w-[170px] h-[230px] m-auto mt-3 md:mt-0">
            <h4 class="mt-5 text-center font-main font-medium text-[22px] leading-[26px] text-fontDark">Temple</h4>
          </div>
          <div>
            <img src="../src/img/Rectangle 4410.png" alt="tower" class="w-[170px] h-[230px] m-auto mt-3 md:mt-0">
            <h4 class="mt-5 text-center font-main font-medium text-[22px] leading-[26px] text-fontDark">Tower</h4>
          </div>
          <div>
            <img src="../src/img/Rectangle 4411.png" alt="pyramid" class="w-[170px] h-[230px] m-auto mt-3 md:mt-0">
            <h4 class="mt-5 text-center font-main font-medium text-[22px] leading-[26px] text-fontDark">Pyramid</h4>
          </div>
        </div>
      </div>
      <div class="flex justify-between mr-[60px] md:mr-0 px-10 md:px-32 mt-24">
        <div class="invisible w-1/2 m-auto lg:visible">
          <img src="../src/img/Images.png" alt="second_main_picktures">
        </div>
        <div class="lg:w-1/2 mx-auto">
          <div class="flex flex-col justify-between w-[538px] h-[514px] m-auto">
            <h3 class="text-orangeCustom font-main font-semibold text-[20px] leading-[20px] tracking-[0.2em]">Our Experience</h3>
            <h2 class="w-[467px] font-main font-semibold text-[56px] leading-[66px] text-fontDark">Our Stories Have Adventures</h2>
            <p class="w-[467px] font-main font-normal text-[16px] leading-[26px] text-fontLight">We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</p>
            <div class="statistics_blocks flex justify-between">
              <div class="w-[166px] h-[178px] bg-white rounded-[14px] flex flex-col justify-evenly">
                <p class="text-orangeCustom font-main font-semibold text-[46px] leading-[46px] ml-[26px]">12K+</p>
                <p class="text-fontLight font-main font-normal text-[21px] leading-[29px] text-center w-[86px] ml-[26px]">Succes Journey</p>
              </div>
              <div class="w-[166px] h-[178px] bg-white rounded-[14px] flex flex-col justify-evenly">
                <p class="text-orangeCustom font-main font-semibold text-[46px] leading-[46px] ml-[26px]">16+</p>
                <p class="text-fontLight font-main font-normal text-[21px] leading-[29px] text-center w-[86px] ml-[26px]">Awards Winning</p>
              </div>
              <div class="w-[166px] h-[178px] bg-white rounded-[14px] flex flex-col justify-evenly">
                <p class="text-orangeCustom font-main font-semibold text-[46px] leading-[46px] ml-[26px]">20+</p>
                <p class="text-fontLight font-main font-normal text-[21px] leading-[29px] text-center w-[86px] ml-[26px]">Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="find_popular_destenation w-full h-[707px] px-10 md:px-32 mt-24">
        <div class="flex justify-between">
          <div>
            <h2 class="w-[400px] h-[132px] font-main font-semibold text-[56px] leading-[66px] text-fontDark">Find Popular Destination</h2>
          </div>
          <div>
            <button class="scroll_btn border border-solid border-fontDark w-14 h-14 rounded-[100px] mr-[16px] text-fontDark text-[18px] font-medium">&lt;</button>
            <button class="scroll_btn border border-solid border-fontDark w-14 h-14 rounded-[100px] text-fontDark text-[18px] font-medium">></button>
          </div>
        </div>
        <div class="all_cards flex justify-between mt-[35px] w-[1644px]">
          <div class="single_card w-[386px] h-[440px] rounded-[16px] border-2 border-solid border-white">
            <img src="../src/img/image (1).png" alt="hiking_tour" class="w-[362px] h-[252px] mx-auto mt-[12px]">
            <h4 class="w-[251px] h-[24px] font-main font-semibold text-[24px] leading-[24px] text-fontDark ml-[12px] mt-[24px]">Mountain Hiking Tour</h4>
            <p class="w-[141px] h-[14px] font-main font-normal text-[14px] leading-[14px] text-fontLight ml-[12px] mt-[14px]">Mountain Hiking Tour</p>
            <div class="flex justify-between mt-[35px]">
              <p class="ml-[12px] font-main font-semibold text-[24px] leading-[20px] text-fontDark">$89 <span class="text-fontLight font-normal text-[14px] leading-[14px]">/Person</span></p>
              <button class="scroll_btn mr-[12px] text-fontDark font-normal text-[14px] leading-[14px] w-[100px] h-[37px] rounded-[46px] border border-solid border-fontDark">Book Now</button>
            </div>
          </div>
          <div class="single_card w-[386px] h-[440px] rounded-[16px] border-2 border-solid border-white">
            <img src="../src/img/image (2).png" alt="hiking_tour" class="w-[362px] h-[252px] mx-auto mt-[12px]">
            <h4 class="w-[251px] h-[24px] font-main font-semibold text-[24px] leading-[24px] text-fontDark ml-[12px] mt-[24px]">Machu Picchu, Peru</h4>
            <p class="w-[141px] h-[14px] font-main font-normal text-[14px] leading-[14px] text-fontLight ml-[12px] mt-[14px]">Machu Picchu, Peru</p>
            <div class="flex justify-between mt-[35px]">
              <p class="ml-[12px] font-main font-semibold text-[24px] leading-[20px] text-fontDark">$99 <span class="text-fontLight font-normal text-[14px] leading-[14px]">/Person</span></p>
              <button class="scroll_btn mr-[12px] text-fontDark font-normal text-[14px] leading-[14px] w-[100px] h-[37px] rounded-[46px] border border-solid border-fontDark">Book Now</button>
            </div>
          </div>
          <div class="single_card w-[386px] h-[440px] rounded-[16px] border-2 border-solid border-white">
            <img src="../src/img/image (3).png" alt="hiking_tour" class="w-[362px] h-[252px] mx-auto mt-[12px]">
            <h4 class="w-[328px] h-[24px] font-main font-semibold text-[24px] leading-[24px] text-fontDark ml-[12px] mt-[24px]">The Grand Canyon, Arizona</h4>
            <p class="w-[141px] h-[14px] font-main font-normal text-[14px] leading-[14px] text-fontLight ml-[12px] mt-[14px]">Mountain Hiking Tour</p>
            <div class="flex justify-between mt-[35px]">
              <p class="ml-[12px] font-main font-semibold text-[24px] leading-[20px] text-fontDark">$70 <span class="text-fontLight font-normal text-[14px] leading-[14px]">/Person</span></p>
              <button class="scroll_btn mr-[12px] text-fontDark font-normal text-[14px] leading-[14px] w-[100px] h-[37px] rounded-[46px] border border-solid border-fontDark">Book Now</button>
            </div>
          </div>
          <div class="single_card w-[386px] h-[440px] rounded-[16px] border-2 border-solid border-white">
            <img src="../src/img/image (4).png" alt="hiking_tour" class="w-[362px] h-[252px] mx-auto mt-[12px]">
            <h4 class="w-[251px] h-[24px] font-main font-semibold text-[24px] leading-[24px] text-fontDark ml-[12px] mt-[24px]">Rome, Italy</h4>
            <p class="w-[141px] h-[14px] font-main font-normal text-[14px] leading-[14px] text-fontLight ml-[12px] mt-[14px]">Mountain Hiking Tour</p>
            <div class="flex justify-between mt-[35px]">
              <p class="ml-[12px] font-main font-semibold text-[24px] leading-[20px] text-fontDark">$89 <span class="text-fontLight font-normal text-[14px] leading-[14px]">/Person</span></p>
              <button class="scroll_btn mr-[12px] text-fontDark font-normal text-[14px] leading-[14px] w-[100px] h-[37px] rounded-[46px] border border-solid border-fontDark">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="top_destenations w-full h-max px-10 md:px-32 md:mt-24">
        <div class="m-auto w-full">
          <h2 class="font-main font-semibold text-[56px] leading-[66px] w-full text-center text-fontDark">Top Destinations</h2>
          <p class="font-main font-normal text-[16px] leading-[16px] w-full text-center text-fontLight mt-[16px]">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
        </div>
        <div class="flex justify-around md:pr-[400px] md:pl-[400px]">
          <button class="scroll_btn ml-[3px] mr-[3px] font-poppins font-normal text-[14px] leading-[14px] text-fontDark border border-solid border-fontDark w-max rounded-[30px] h-[34px] mt-[28px] pl-[20px] pr-[20px]">London</button>
          <button class="scroll_btn ml-[3px] mr-[3px] font-poppins font-normal text-[14px] leading-[14px] text-fontDark border border-solid border-fontDark w-max rounded-[30px] h-[34px] mt-[28px] pl-[20px] pr-[20px]">Bangkok</button>
          <button class="scroll_btn ml-[3px] mr-[3px] font-poppins font-normal text-[14px] leading-[14px] text-fontDark border border-solid border-fontDark w-max rounded-[30px] h-[34px] mt-[28px] pl-[20px] pr-[20px]">Singapore</button>
          <button class="scroll_btn ml-[3px] mr-[3px] font-poppins font-normal text-[14px] leading-[14px] text-fontDark border border-solid border-fontDark w-max rounded-[30px] h-[34px] mt-[28px] pl-[20px] pr-[20px]">England</button>
          <button class="scroll_btn ml-[3px] mr-[3px] font-poppins font-normal text-[14px] leading-[14px] text-fontDark border border-solid border-fontDark w-max rounded-[30px] h-[34px] mt-[28px] pl-[20px] pr-[20px]">Italy</button>
        </div>
        <div class="flex">
          <div class="mt-[55px]">
            <div class="first_pic w-[270px] h-[250px]" backgr>
              <div class="relative w-[42px] h-[24px] bg-white rounded-[12px] top-[24px] ml-[24px]"><p class="font-main font-medium text-[14px] leading-[14px] w-[42px] h-[24px] m-auto text-center pt-[5px]">3.5</p></div>
              <p class="relative font-main font-semibold text-[20px] leading-[20px] text-white left-[24px] top-[155px]">Vietnam</p>
              <p class="relative font-main font-normal text-[14px] leading-[14px] text-white left-[24px] top-[170px]">Worefall</p>
            </div>
            <div class="second_pic w-[270px] h-[250px] mt-[26px]">
              <div class="relative w-[42px] h-[24px] bg-white rounded-[12px] top-[24px] ml-[24px]"><p class="font-main font-medium text-[14px] leading-[14px] w-[42px] h-[24px] m-auto text-center pt-[5px]">3.5</p></div>
              <p class="relative font-main font-semibold text-[20px] leading-[20px] text-white left-[24px] top-[155px]">Vietnam</p>
              <p class="relative font-main font-normal text-[14px] leading-[14px] text-white left-[24px] top-[170px]">Worefall</p>
            </div>
          </div>
          <div class="mt-[55px]">
            <div class="third_pic w-[370px] h-[526px] ml-[30px]">
              <div class="relative w-[42px] h-[24px] bg-white rounded-[12px] top-[24px] ml-[24px]"><p class="font-main font-medium text-[14px] leading-[14px] w-[42px] h-[24px] m-auto text-center pt-[5px]">3.5</p></div>
              <p class="relative font-main font-semibold text-[20px] leading-[20px] text-white left-[24px] top-[420px]">Vietnam</p>
              <p class="relative font-main font-normal text-[14px] leading-[14px] text-white left-[24px] top-[435px]">Worefall</p>
            </div>
          </div>
          <div class="mt-[55px]">
            <div class="fourth_pic w-[470px] h-[250px] ml-[30px]">
              <div class="relative w-[42px] h-[24px] bg-fontDark rounded-[12px] top-[24px] ml-[24px]"><p class="text-white font-main font-medium text-[14px] leading-[14px] w-[42px] h-[24px] m-auto text-center pt-[5px]">3.5</p></div>
              <p class="relative font-main font-semibold text-[20px] leading-[20px] text-white left-[24px] top-[155px]">Vietnam</p>
              <p class="relative font-main font-normal text-[14px] leading-[14px] text-white left-[24px] top-[170px]">Worefall</p>
            </div>
            <div class="mt-[13px] flex">
              <div class="fifth_pic w-[170px] h-[263px] ml-[30px]">
                <div class="relative w-[42px] h-[24px] bg-fontDark rounded-[12px] top-[24px] ml-[24px]"><p class="text-white font-main font-medium text-[14px] leading-[14px] w-[42px] h-[24px] m-auto text-center pt-[5px]">3.5</p></div>
                <p class="relative font-main font-semibold text-[20px] leading-[20px] text-white left-[24px] top-[155px]">Vietnam</p>
                <p class="relative font-main font-normal text-[14px] leading-[14px] text-white left-[24px] top-[170px]">Worefall</p>
              </div>
              <div class="sixth_pic w-[270px] h-[263px] ml-[30px]">
                <div class="relative w-[42px] h-[24px] bg-fontDark rounded-[12px] top-[24px] ml-[24px]"><p class=" text-white font-main font-medium text-[14px] leading-[14px] w-[42px] h-[24px] m-auto text-center pt-[5px]">3.5</p></div>
                <p class="relative font-main font-semibold text-[20px] leading-[20px] text-white left-[24px] top-[155px]">Vietnam</p>
                <p class="relative font-main font-normal text-[14px] leading-[14px] text-white left-[24px] top-[170px]">Worefall</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="customer_said mt-24 px-10 md:px-32 w-full h-max flex ml-[-71px] md:ml-0">
        <div class="invisible w-1/2 lg:visible">
          <img src="../src/img/Images (1).png" alt="man_with_camera" class="w-[407px] h-[563px] m-auto">
        </div>
        <div class="md:w-1/2">
          <div class="border-[4px] w-[67px] border-solid border-[#FFD482] rounded-[4px]"></div>
          <h2 class="w-[467px] h-[132px] font-main font-semibold text-[56px] leading-[66px] mt-[12px] text-fontDark">A customer said about us:</h2>
          <div class="w-[537px] h-[283px] rounded-[14px] bg-white mt-[26px]">
            <p class="w-[473px] h-max font-main font-normal text-[18px] leading-[30px] text-fontLight ml-[30px] mr-[34px] pt-[32px]">Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.</p>
            <div class="flex ml-[30px] pt-[27px]">
              <img src="../src/img/Vector (6).png" alt="star" class="w-[18px] h-[17px]">
              <img src="../src/img/Vector (6).png" alt="star" class="w-[18px] h-[17px] ml-[4px]">
              <img src="../src/img/Vector (6).png" alt="star" class="w-[18px] h-[17px] ml-[4px]">
              <img src="../src/img/Vector (6).png" alt="star" class="w-[18px] h-[17px] ml-[4px]">
              <img src="../src/img/Vector (6).png" alt="star" class="w-[18px] h-[17px] ml-[4px]">
            </div>
            <div class="flex justify-between pr-[30px]">
              <div>
                <p class="font-main font-medium text-[20px] leading-[20px] text-fontDark mt-[17px] ml-[30px]">Andrew Sarma</p>
                <p class="font-main font-normal text-[12px] leading-[12px] text-fontLight mt-[8px] ml-[30px]">Enterpreneur</p>
              </div>
              <div class="my-auto">
                <button class="scroll_btn border border-solid border-fontDark w-[40px] h-[40px] rounded-[100px] mr-[16px] text-fontDark text-[18px] font-medium">&lt;</button>
                <button class="scroll_btn border border-solid border-fontDark w-[40px] h-[40px] rounded-[100px] text-fontDark text-[18px] font-medium">></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sign_up_to_newsletter w-full h-[450px] px-10 md:px-32 md:mt-32">
        <div class="yellow_area md:w-[1170px] h-[358px] rounded-[30px] bg-[#FFD482]">
          <img src="../src/img/Intersect.png" alt="random_line" class="relative">
          <h2 class="relative bottom-[240px] md:bottom-[350px] pt-[75px] text-center font-main font-semibold text-[40px] leading-[40px] text-fontDark">Sign up to our newsletter</h2>
          <p class="relative bottom-[240px] md:bottom-[350px] w-[415px] h-[52px] mx-auto pt-[16px] text-center font-main font-normal text-[16px] leading-[26px] text-fontLight">Reciev latest news, update, and many other things every week. </p>
          <form action="info" class="mt-[188px] md:mt-[40px] relative bottom-[350px]">
            <input id="" type="text" name="" class="w-[450px] h-[60px] rounded-[12px] bg-white ml-[118px] md:ml-[355px] font-main font-normal text-[14px] leading-[14px] pl-[26px]" placeholder="Enter Your email address">
            <button class="relative w-[40px] h-[40px] bg-orangeCustom rounded-[12px] top-[15px] right-[50px]">
              <img src="../src/img/Vector (7).png" alt="fly_icon" class="w-full h-full pt-[7px]">
            </button>
          </form>
        </div>
      </div>
    </main>
    <footer class="px-10 md:px-32 md:mt-24 mt-0 mb-[81px] md:flex flex flex-col-reverse md:flex-row">
      <div class="ml-[276px] mt-[90px] md:ml-0 md:mt-0">
        <div class="w-24 flex">
          <img src="../src/img/Union (2).png" alt="travel_icon" class="w-10 h-9 m-auto">
          <p class="font-sen font-bold text-xl m-auto pl-2"> Salty</p>
        </div>
        <p class="w-[141px] h-[52px] font-main font-normal text-[15px] leading-[26px] text-fontLight mt-[28px]">Enjoy the touring with Salty</p>
        <div class="mt-[40px] flex">
          <button class="active_btn  border border-solid border-fontDark w-[32px] h-[32px] rounded-[100px] mr-[16px] text-fontDark text-[18px] font-medium">
            <img src="../src/img/facebook.png" alt="facebook_icon" class="w-[6px] h-[12px] m-auto text-orangeCustom">
          </button>
          <button class="active_btn border border-solid border-fontDark w-[32px] h-[32px] rounded-[100px] mr-[16px] text-fontDark text-[18px] font-medium">
            <img src="../src/img/instagram.png" alt="facebook_icon" class="w-[12px] h-[12px] m-auto text-orangeCustom">
          </button>
          <button class="active_btn  border border-solid border-fontDark w-[32px] h-[32px] rounded-[100px] mr-[16px] text-fontDark text-[18px] font-medium">
            <img src="../src/img/tweet.png" alt="facebook_icon" class="w-[15px] h-[12px] m-auto text-orangeCustom">
          </button>
        </div>
      </div>
      <div class="md:ml-[275px] ml-0 flex">
        <div>
          <h3 class="w-[91px] h-[18px] font-main font-medium text-[18px] leading-[18px] text-fontDark">Resources</h3>
          <p class="w-[92px] h-[136px] font-main font-normal text-[14px] leading-[34px] text-fontLight mt-[22px]">
            Download
            Help Center
            Guide Book
            App Directory
          </p>
        </div>
        <div class="mr-[-35px] md:mr-0">
          <h3 class="w-[91px] h-[18px] font-main font-medium text-[18px] leading-[18px] text-fontDark ml-[113px]">Travellers</h3>
          <p class="w-[115px] h-[136px] font-main font-normal text-[14px] leading-[34px] text-fontLight mt-[22px] ml-[113px]">
            Why Travellers
            Enterprice
            Customer Stories
            Instagram post
          </p>
        </div>
        <div class="mr-[-35px] md:mr-0">
          <h3 class="w-[91px] h-[18px] font-main font-medium text-[18px] leading-[18px] text-fontDark ml-[113px]">Company</h3>
          <p class="w-[89px] h-[136px] font-main font-normal text-[14px] leading-[34px] text-fontLight mt-[22px] ml-[113px]">
            Travelling
            About Locato
            Success
            Information
          </p>
        </div>
        <div class="mr-[-35px] md:mr-0">
          <h3 class="w-[91px] h-[18px] font-main font-medium text-[18px] leading-[18px] text-fontDark ml-[113px]">Get App</h3>
          <p class="w-[119px] h-[68px] font-main font-normal text-[14px] leading-[34px] text-fontLight mt-[22px] ml-[113px]">
            App Store
            Google Play Store
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// YOUR CODE HERE
/* const isEdited = ref(false)
const contactInput = ref() */

/* const selectEditView = async () => {
  isEdited.value = true
  await nextTick()
  contactInput.value.focus()
} */
</script>

<style lang="scss">
.app-container {
  max-width: 1440px;
  padding: 30px;
}

.contact-list {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.cursor_pointer:hover {
  cursor: pointer;
}

.scroll_btn:hover {
  background-color: #2D3134;
  color: #FAF8ED;
}

.first_pic {
  background-image: url(../src/img/Rectangle\ 4389.png);
  background-size: contain;
}

.second_pic {
  background-image: url(../src/img/Group.png);
  background-size: contain;
}

.third_pic {
  background-image: url(../src/img/Rectangle\ 4391.png);
  background-size: contain;
}

.fourth_pic {
  background-image: url(../src/img/Rectangle\ 4392.png);
  background-size: contain;
  background-repeat: no-repeat;
}

.fifth_pic {
  background-image: url(../src/img/Rectangle\ 4394.png);
  background-size: contain;
}

.sixth_pic {
  background-image: url(../src/img/Rectangle\ 4395.png);
  background-size: contain;
}

.active_btn:hover {
  border-color: #F66F4D;
}

.some:hover {
  background-image: url(../src/img/Rectangle\ 719.png);
  background-repeat: no-repeat;
}
</style>
