import fetchBlogs from "../../https/blog";

export default function NextPage(props: {blogs:any, env:any}){
  console.log(props.env);

  return (
    <main>
      <h1>Blogs</h1>

      <p>{props.blogs[0].title}</p>
    </main>
  )
}

export const getStaticProps = async()=>{
  const blogs = await fetchBlogs();
  const env = await fetch('/api/env');
  return {
    props: {
      blogs,
      env
    }
  }
}
