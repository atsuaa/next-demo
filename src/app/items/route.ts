export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const res = await fetch(`http://localhost:3000/resource?id=${id}`,{
        next: { revalidate: 10 }, // Revalidate every 60 seconds
      })
    const product = await res.json()

    return Response.json({ product })
  }