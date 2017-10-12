import * as React from 'react'
import MainContainer from '../components/business-page/main-content/main-container'

interface Props {}
interface State {}

export default class Business extends React.Component <Props, State> {
  render(){
    return (
      <div>
       <MainContainer/>
      </div>
    )
  }
}