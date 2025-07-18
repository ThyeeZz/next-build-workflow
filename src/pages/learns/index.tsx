import fetchLearns from "../../https/learn";

export default function NextPage(props: {learns:any, env:any}){
  console.log(props.env);
  return (
    <main>
      <h1>Learns</h1>

      <p>{props.learns[0].title}</p>
    </main>
  )
}

export const getServerSideProps = async()=>{
  const learns = await fetchLearns();
  const env = await fetch('/api/env');
  return {
    props: {
      learns,
      env
    }
  }
}
