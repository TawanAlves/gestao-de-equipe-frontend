import React from 'react';
//css
import {ArrowRightIcon, HeaderTitle, DashboardContent } from '../Dashboard/DashboardCss'

//components
import RetangleBox  from '../../components/RetangleBox/RetangleBox';
import BaseScreen from '../../components/Screen/BaseScreen'
import SquareBox from '../../components/SquareBox/SquareBox';
import SquareNumberBox from '../../components/SquareNumberBox/SquareNumberBox'


const Dashboard: React.FC = () => {
  return (
     <BaseScreen header="Dashboard">   
      <div>
         <RetangleBox style={{borderRadius:"100px 10px 10px 100px", margin:"40px 0"}}>
            <div></div>
            <div><HeaderTitle> Visualização por Membros</HeaderTitle> </div>
            <div><ArrowRightIcon /></div>         
         </RetangleBox>  
         <DashboardContent>      
            <SquareBox title='Total Mês Atual' aplicou={10} recebeu={10}/>
            <SquareBox title='Total Mês Passado' aplicou={10} recebeu={10}/>
         </DashboardContent>    
         <DashboardContent>                 
            <SquareBox title='Últimos 6 meses' aplicou={10} recebeu={10}/>
            <SquareBox title='Geral' aplicou={10} recebeu={10}/>
         </DashboardContent>  
         <DashboardContent>                 
            <SquareNumberBox title='Total de Membros' result={10}/>
            <SquareNumberBox title='Membros IOS' result={10}/>
         </DashboardContent>   
         <DashboardContent>                 
            <SquareNumberBox title='Membros SSA' result={10}/>
            <SquareNumberBox title='Membros VDC' result={10}/>
         </DashboardContent>     
      </div>
   </BaseScreen>
  )
}

export default Dashboard;