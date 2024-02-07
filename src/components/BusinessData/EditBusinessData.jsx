import { useEffect, useState } from "react"
import { observer } from "mobx-react"
import DataServer from '../../store/server'
import BusinessData from "./BusinessData"
import Edit from './Edit'

const EditBusinessData = (observer(() => {

  const [editData, setEditData] = useState(false)
  useEffect(() => {
    DataServer.getBusinessData()
  }, []);
  return (
    <>
      {editData ? <Edit setEditData={setEditData} /> : <BusinessData setEditData={setEditData}/>}
    </>
  )
}))
export default EditBusinessData