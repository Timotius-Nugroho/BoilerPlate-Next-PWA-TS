import Layout from "common/components/Layout"
import SampleTable from "common/components/SampleTable"
import SamplePagination from "common/components/SamplePagination"

const SamplePage = () => {
  return(
    <Layout screenName="Sample Page">
      <h2 className="text-center">Welcome to Sample Page !</h2>

      <div className="mt-5 mx-3 shadow py-2 px-4 bg-body rounded">
        <SampleTable/>
        <SamplePagination
          currPage={2}
          listPage={[1,2,3,4,5,6]}
        />
      </div>
    </Layout>
  )
}

export default SamplePage