import React from "react";
import Image from "next/image";
import vcImg from "../public/VCNew1.jpeg";
const about = () => {
  return (
    <>
      <div className="container px-5 mx-auto mb-8 md:px-10">
        <div className="w-full py-5 transition duration-200 transform shadow-lg rounded-2xl hover:scale-95 glassmorphism">
          <h1 className="text-2xl font-bold text-center text-white md:text-4xl">
            About Institute
          </h1>
        </div>

        <div className="w-full p-4 mx-auto mt-8 mb-8 shadow-lg md:p-10 glassmorphism rounded-2xl">
          <h1 className="pb-4 text-xl font-semibold text-white uppercase md:text-2xl">
            The Vice-Chancellor
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 ">
              {/* col-1 */}
            <div className="flex flex-col items-center md:max-h-[600px] p-4 border-2 border-gray-500 shadow-xl rounded-xl md:col-span-2">
              <Image
                src={vcImg}
                unoptimized
                alt="logo"
                height="150px"
                width="150px"
                className="rounded-full"
              />
              <h1 className="py-2 text-xl font-bold text-center text-white md:text-2xl">
                Prof. Ravi Shanker Singh
              </h1>
              <h1 className="font-medium text-white text-opacity-80">
                Vice-Chancellor
              </h1>
              <h1 className="my-6 font-medium text-center text-white text-opacity-80">
                Dr.Rammanohar Lohia Avadh University,
                <br />
                Ayodhya, (UP)-224001, India
              </h1>
              <div className="w-full text-gray-500 bg-white divide-y divide-gray-200 rounded shadow-lg">
                <div className="p-2">
                  <p>
                    <span className="font-bold">Email :</span> vc@rmlau.ac.in
                  </p>
                </div>
                <div className="p-2">
                  <p>
                    <span className="font-bold">Tel :</span> +91-5278-246223
                  </p>
                </div>
                <div className="p-2">
                  <p>
                    <span className="font-bold">Fax :</span> +91-5278-246330
                  </p>
                </div>
              </div>
              <h1 className="p-2 my-8 font-bold tracking-tighter text-justify text-red-400 rounded shadow-xl md:text-red-500 ">
                Took Charge as the Vice-Chancellor, Dr.Rammanohar Lohia Avadh
                University on 31st of July 2020
              </h1>
            </div>
            
            {/* col-2 desktop */}

            <div className="p-4 font-semibold text-gray-700 shadow-xl glassmorphism text-opacity-90 rounded-xl md:col-span-4">
              <span className="text-xl text-gray-900 underline">
                Message from VC, Dr. Rammanohar Lohia Avadh University{" "}
              </span>
              <br />
              <br />
              It is a matter of extreme honour and pride for me to be a part of
              Dr. Rammanohar Lohia Avadh University (Dr. RMLAU). I thank the
              Almighty 'Lord Ram' for showering his blessings on me by virtue of
              which I could get the chance of being a part of this esteemed
              place of learning in the role of a Vice Chancellor.
              <br />
              <br />
              As a Vice Chancellor, I stand committed to tirelessly work towards
              achieving the goals of the university and making it a centre of
              excellence. Presently, the university is offering state-of-the-art
              undergraduate, post graduates and doctoral programmes in various
              streams.
              <br />
              <br />
              Today Dr. RMLAU is a well-known educational institute in Uttar
              Pradesh catering to the education of more than 5 lakh students
              through its 9 residential PG departments and on campus Institute
              of Engineering and Technology along-with more than 700 affiliated
              colleges.
              <br />
              <br />
              On behalf of the university, I invoke the interest of all the
              faculty members, students and administrators to play their
              respective roles with perfection and utmost dedication for the
              academic excellence.
              <br />
              <br />
              Dr. RMLAU's focus is not merely on providing academic excellence
              to the students, but the overall motto is to create a pool of
              learned professionals that are equipped with the knowledge and
              proficiency required for playing decisive and leadership roles in
              whatever fields they desire to excel in.
              <br />
              <br />
              At Dr. RMLAU, we have well crafted programs for faculty
              development that ensures a vibrant and innovative environment for
              teaching and research. It is our ongoing process to encourage
              academic excellence, futuristic learning approach, high quality
              research, and socio-economic innovations through various dedicated
              programs.
              <br />
              <br />
              Our focus is to adapt to the global demands in higher education so
              that the students passing out of the university may not be
              considered as mere degree holders, but should be able to be a part
              of change that requires in shaping a nation. Our basic principle
              should focus on supporting our students in making them achieve
              their goals and go out in the real world to transform lives and
              enhance the social structure.
              <br />
              <br />
              The ultimate dream is to make Dr. RMLAU a center of excellence in
              scientific, humanities and technical education for nurturing
              creative thinkers, self-assured leaders, high quality technocrats
              social entrepreneurs, political masters, scientific geniuses and
              nation builders.
              <br />
              <br />
              As you can see, our university has a very ambitious agenda and we
              need your cooperation to implement it. I have a strong belief that
              all of us will continue to work sincerely to the greater cause of
              making our university an excellent place for education, learning
              and innovation realizing the vision of Dr. Ram Manohar Lohiya and
              our Prime Minister keeping in view the importance of Ayodhya.
              <br />
              <br />
              We are a nation of diverse cultures, languages, religions with
              rich heritage and our greatest strength is unity in diversity. We
              must try to develop Ram Rajya in our premise to work together by
              maintaining brotherhood, harmony and goodwill among all the
              sections of the society. This holds true not only for our campus,
              but it is very crucial for our country as a whole.
              <br />
              <br />
              On behalf of Dr. RMLAU, I would like to assure you all that we
              will leave no stone unturned in achieving the Mission and Vision
              of the university. I assure you, my whole-hearted support.
              <br />
              <br />
              Thank you, may Lord Rama bless you and all your loved ones.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
