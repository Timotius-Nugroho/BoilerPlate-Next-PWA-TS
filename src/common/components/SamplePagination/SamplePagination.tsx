import { FC } from "react"
import { iSamplePagination } from "./types"

const SamplePagination:FC<iSamplePagination> = ({ currPage, listPage }) => {
  return(
    <>
      <div className="d-flex justify-content-between">
        <div>
          <p>10 records found!</p>
        </div>
        <div>
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              {listPage.map((e, i) => {

                if(e === currPage) {
                  return(
                    <li className="page-item active" aria-current="page" key={i}>
                      <span className="page-link">{e}</span>
                    </li>
                  )
                }

                return(
                  <li className="page-item" key={i}><a className="page-link" href="#">{e}</a></li>
                )

              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default SamplePagination