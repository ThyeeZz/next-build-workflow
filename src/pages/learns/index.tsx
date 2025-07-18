import fetchLearns from "../../https/learn";
import { useEffect } from "react";

export default function NextPage(props: {learns:any, env:any}){
  console.log('evn from server side props',props.env);

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
      <h1>Learns</h1>

      <p>{props.learns[0].title}</p>
    </main>
  )
}

export const getServerSideProps = async()=>{
  const learns = await fetchLearns();
  
  return {
    props: {
      learns,
      env:process.env.CMS_URL
    }
  }
}
