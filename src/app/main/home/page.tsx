import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-start pb-section bg-akasacara">
      {/* START SHOWREEL */}
      <section className="showreel relative w-screen h-screen overflow-hidden">
        <video 
          src="/assets/showreel.mp4" 
          autoPlay 
          loop 
          muted
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute top-6 left-6 z-10">
          <img 
            src="/assets/logo.png" 
            alt="Akasacara Film Logo" 
            className="w-64 h-15"
          />
        </div>
      </section>
      {/* END SHOWREEL */}

      {/* START OUR WORK */}
      <section className="py-section px-container flex flex-col items-start gap-xl self-stretch">
        <div className="flex flex-col justify-end items-start self-stretch gap-xl">
          <h2 className="headline-1 uppercase akasacara-title self-start">OUR WORK!</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img src="/assets/GanyangSetanAlas.jpg" alt="About Us Akasacara" className="w-full md:w-1/2 card-pictporto" />
            <p className="flex-1 text-justify sub-heading-reg">
              Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
              Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p className="flex-1 text-justify sub-heading-reg">
              Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
              Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
            </p>
            <img src="/assets/DarahNyai.png" alt="About Us Akasacara" className="w-full md:w-1/2 card-pictporto" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img src="/assets/GanyangSetanAlas.jpg" alt="About Us Akasacara" className="w-full md:w-1/2 card-pictporto" />
            <p className="flex-1 text-justify sub-heading-reg">
              Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
              Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
            </p>
          </div>
        </div>
      </section>
      {/* END OUR WORK */}

      {/* START ABOUTE US */}
      <section className="py-section px-container flex flex-col items-start gap-xl self-stretch">
        <div className="flex flex-col justify-end items-start self-stretch gap-xl">
          <h1 className="headline-1 uppercase akasacara-title self-start">
            About Us!
          </h1>

          <div className="flex flex-col md:flex-row justify-start items-start gap-12 self-stretch">
            <img src="/assets/aboutus.jpg" alt="About Us Akasacara" className="w-full md:w-1/2" />
            <p className="flex-1 text-justify sub-heading-reg">
              Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
              <br/>
              <br/>
              Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
            </p>
          </div>
        </div>
      </section>
      {/* END ABOUTE US  */}
    </div>
  );
};

export default Home;