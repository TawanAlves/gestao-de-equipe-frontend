import styled from 'styled-components'
import { MdKeyboardArrowRight } from "react-icons/md";

export const HeaderTitle = styled.p`
   color: #005B64;
   font-weight: bold;
   font-size: 15px;
   text-align: left;
`
export const ArrowRightIcon = styled(MdKeyboardArrowRight)`
   color: #000000 !important;
   font-size: 25px;
`
export const DashboardContent = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   padding-bottom: 22px;
`