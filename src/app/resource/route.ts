export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const data = {
        "id": id,
        'data1': "sample 1",
        "rand": Math.random()
    }

    await new Promise(resolve => setTimeout(resolve, 1000))

    return Response.json({ data })
  }