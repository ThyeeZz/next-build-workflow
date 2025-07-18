import { useEffect } from "react";
import fetchBlogs from "../../https/blog";

export default function NextPage(props: {blogs:any, env:any}){
  console.log('env from static props',props.env);

  useEffect(()=>{
    const fetchEnv = async()=>{
      const res = await fetch('/api/env');
      const data = await res.json();
      console.log(data);
    }
    fetchEnv();
  },[]);

  return (
    <main>
      <h1>Blogs</h1>

      <p>{props.blogs[0].title}</p>
    </main>
  )
}

export const getStaticProps = async()=>{
  const blogs = await fetchBlogs();
  return {
    props: {
      blogs,
      env:process.env.CMS_URL
    }
  }
}
