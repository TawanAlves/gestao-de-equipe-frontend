import React from 'react';

//components
import RetangleBox  from '../../components/RetangleBox/RetangleBox';
import BaseScreen from '../../components/Screen/BaseScreen'

import {ArrowRightIcon, HeaderTitle } from '../Dashboard/DashboardCss'

const Dashboard: React.FC = () => {
  return (
   <BaseScreen header="Dashboard">   
      <RetangleBox style={{borderRadius:"100px 10px 10px 100px", margin:"40px 0"}}>
         <div></div>
         <div><HeaderTitle> Visualização por Membros</HeaderTitle> </div>
         <div><ArrowRightIcon /></div>
         
      </RetangleBox>   
   </BaseScreen>
  )
}

export default Dashboard;