import fetchLearns from "../../https/learn";

export default function NextPage(props: {learns:any}){

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
      learns
    }
  }
}
