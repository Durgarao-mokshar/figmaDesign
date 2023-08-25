export default function AboutSection2() {
  return (
    <section className=" bg-black text-white">
      <div className="max-w-8xl mx-auto py-24 px-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-24 items-start ">
          <div className="max-w-xl flex flex-col gap-14  lg:sticky lg:top-24 md:sticky md:top-24">
            <h1 className="lg:text-6xl md:text-5xl text-4xl  text-start">
              {" "}
              Go Further
            </h1>

            <p className="  max-w-md lg:text-xl md:text-lg text-sm">
              At BMD, we are here to move organizations forward, enabling them
              to achieve their most ambitious goals. Whether we are creating
              brand identities, signage and wayfinding, digital or physical
              spaces, we make design one of the most powerful instruments of
              change.
            </p>
          </div>

          <div className=" overflow-y-auto">
            <div className="flex flex-col gap-5 border-b-2 border-gray-500 lg:pb-16 md:pb-14  pb-12 ">
              <h3 className="lg:text-5xl md:text-4xl text-2xl max-w-sm">
                DESIGN FOR DISTINCTION{" "}
              </h3>
              <p className=" lg:text-xl text-sm max-w-md ">
                Work that is true to our clients and unique to the world. We
                listen deeply and sketch broadly so we can deliver strategically
                relevant and extraordinary design.
              </p>
            </div>

            <div className="flex flex-col gap-5 border-b-2 border-gray-500 py-16 ">
              <h3 className="lg:text-5xl md:text-4xl text-2xl max-w-sm">
                {" "}
                RALLY COMMUNITIES{" "}
              </h3>
              <p className=" lg:text-xl text-sm max-w-md ">
                Design that inspires audiences across cultures and communities.
                We bring together clear ideas and strong signals so that the
                work resonates with the people you want to connect with.
              </p>
            </div>

            <div className="flex flex-col gap-5 border-b-2 border-gray-500 py-16 ">
              <h3 className="lg:text-5xl md:text-4xl text-2xl max-w-sm">
                {" "}
                ANTICIPATE THE FUTURE{" "}
              </h3>
              <p className=" lg:text-xl text-sm max-w-md ">
                Systems and tools that stretch across channels and evolve over
                time. We build dynamic brands for right now and for what is to
                come.
              </p>
            </div>
            <div className="flex flex-col gap-5 border-b-2 border-gray-500 py-16 ">
              <h3 className="lg:text-5xl md:text-4xl text-2xl max-w-sm">
                {" "}
                INTEGRATE SEAMLESSLY{" "}
              </h3>
              <p className=" lg:text-xl text-sm max-w-md ">
                Strategists, writers, graphic, motion, ux, spatial designers
                work together seamlessly to deliver richly developed brands and
                experiences.
              </p>
            </div>
            <div className="flex flex-col gap-5 border-b-2 border-gray-500 py-16 ">
              <h3 className="lg:text-5xl md:text-4xl text-2xl max-w-sm">
                GET EVERYONE ON BOARD{" "}
              </h3>
              <p className="lg:text-xl text-sm max-w-md ">
                Collaborative leadership that builds consensus. We design
                engagement processes for every scale of organization, inspiring
                and galvanizing the whole team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
