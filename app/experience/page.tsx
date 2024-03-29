import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import { constants } from "@/utilities";
import { EducationType, ExperienceType } from "@/interfaces";
import Education from "@/components/Education";

const Work = () => {
  return (
    <Layout>
      {/* <div className="xs:mt-[4.7rem] lg:mt-20 mx-auto border border-gray-200" /> */}
      <div className="xs:mx-8 lg:mx-16 xs:my-2 md:my-3 lg:my-6">
        <div>
          <h3 className="xs:text-xl md:text-3xl lg:text-4xl font-bold text-[#333333] xs:my-2 lg:my-4 m-auto">
            Experience
          </h3>
          <div className="xs:px-4 lg:px-4">
            {constants.EXPERIENCES.map((experience: ExperienceType) => (
              <Experience data={experience} key={experience.description[0]} />
            ))}
          </div>
        </div>

        <div className="xs:mt-2 md:mt-4 lg:mt-8">
          <h3 className="xs:text-xl md:text-3xl lg:text-4xl font-bold text-[#333333] xs:my-2 lg:my-4 m-auto">
            Education
          </h3>
          <div className="xs:px-4 lg:px-4">
            {constants.EDUCATION.map((education: EducationType) => (
              <Education data={education} key={education.university} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Work;
