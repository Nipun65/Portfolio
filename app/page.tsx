import Info from "@/components/Info";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Layout>
      <Info />
      <Projects />
      <Skills />
    </Layout>
  );
}
