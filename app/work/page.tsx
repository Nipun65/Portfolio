import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import { constants } from "@/utilities";

const Work = () => {
return ( <Layout>
    <section className="m-auto border border-gray-200"/>
    {/* <div className="lg:mx-20 lg:my-6"> */}
    <h3 className="xs:text-xl md:text-3xl lg:text-4xl font-bold text-[#333333] w-[80%] my-4 m-auto">Experiences</h3>
<div className="bg-white xs:px-16 lg:px-32 my-12">
    {
    constants.EXPERIENCES.map((experience:any)=><Experience data={experience}/>)

    }
</div>
{/* </div> */}
</Layout>)

}
export default Work;