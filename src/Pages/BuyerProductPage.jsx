import React, {useState} from 'react'
import Slider from 'react-slick'
import Select from 'react-select'
import InfiniteScroll from 'react-infinite-scroll-component'
import selectItems from '../Components/datastore'
import garri from '../resources/garri.png'
import egusi from '../resources/egusi.jpg'
import yam from '../resources/yams.jpg'
import Menu from '../Components/Menu'
import SelectDropDown from '../Components/SelectDropDown'

const ProductCarts = (props) => {
    return(
        <div className=' scroll' onClick={()=>alert('Youclicked me')}>
                <img src={props.food} alt='garri' />
            <div className='textContainer scrollItem'>
            <span style={{fontSize:'1.2em',fontWeight:'bold ',marginBottom:'2em'}}>Calabar Garri</span><br/>
                <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.2em'}}>2,000 XAF</span>
                
            </div> 
  
        </div>
    )
  }
  
  const InfiniteProductScroll =() =>{
    return(
      <div>
    <InfiniteScroll 
      
      dataLength={6}
      // next={fetchData}
      hasMore={true}
      loader={<p>Loading .....</p>}
      endMessage={<p>No more data to load</p>}
      >
        <h1 style={{fontSize:'2em', marginTop:'2em', marginLeft:'0.4em'}}>All Products</h1>
        <ul style={{marginTop:'em'}}>
          
        </ul>
  
      </InfiniteScroll>
      {/* {error && <p>Error:{error.message}</p>} */}
      </div>
     
    )
  }
const BuyerPage = () => {
  const [selectedOption, setselectedOption] = useState(null)

  return (
    <div  className='scroll-hori'>

        <Menu/>
        <SelectDropDown selectItems={selectItems} selectedOption={selectedOption} setselectedOption={setselectedOption} />
          <div style={{width:'100%',}}>
         <ProductCarts food={garri} />
          <ProductCarts food={egusi}/>
          <ProductCarts food={yam}/>
          <ProductCarts food={yam}/>
          <ProductCarts food={garri}/>
          <ProductCarts food={egusi}/></div>        
    </div>
  )
}

export default BuyerPage