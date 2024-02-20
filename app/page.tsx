import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
    <Info/>
    <Projects/>
    <Skills/>
   
    {/* <Navbar/> */}
    
  </Layout>
  );
}
