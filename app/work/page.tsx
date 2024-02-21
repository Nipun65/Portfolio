import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import { constants } from "@/utilities";

const Work = () => {
  return (
    <Layout>
      <div className="mx-auto border border-gray-200" />
      <div className="xs:px-8 lg:px-16 xs:py-2 md:py-3 lg:py-6">
        <h3 className="xs:text-xl md:text-3xl lg:text-4xl font-bold  text-[#333333] xs:my-2 lg:my-4 m-auto">
          Experience
        </h3>
        <div className="xs:px-4 lg:px-4">
          {constants.EXPERIENCES.map((experience: any) => (
            <Experience data={experience} key={experience.description[0]} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Work;
