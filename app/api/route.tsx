export default async function Route() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await res.json()

  return (
    <div>
      <h1>Route Page!</h1>
      <p>{data.title}</p>
    </div>
  )
}