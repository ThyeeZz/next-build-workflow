const url = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL;

const fetchBlogs = async()=>{
  const res = await fetch(`${url}/blogs?id=1701`);
  const data = await res.json();
  return data;
}

export default fetchBlogs;
