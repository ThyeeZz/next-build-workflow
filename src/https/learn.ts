const url = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL;

const fetchLearns = async()=>{
  const res = await fetch(`${url}/learns?id=530`);
  const data = await res.json();
  return data;
}

export default fetchLearns;
