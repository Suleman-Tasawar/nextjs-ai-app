type Params = Promise<{slug:string}>

const page = async({params}:{params:Params}) => {
    const {slug} = await params
  return (
    <div>Slug page:{slug} </div>
  )
}

export default page