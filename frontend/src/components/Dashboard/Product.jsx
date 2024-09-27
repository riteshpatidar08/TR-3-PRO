import React , {useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {fetchProduct} from './../../redux/productSlice'
import {useSelector, useDispatch} from 'react-redux'
function Product() {
  const dispatch = useDispatch() ;
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  const {product} = useSelector((state)=>state.product)

  const columns = [
    {field : 'image' , headerName : 'Image' , renderCell : (params)=>(
    <img className='object-contain w-8' src={`http://localhost:3000/${params.value}`}/>
    )} ,
  { field: 'name', headerName: 'Product Name', width: 90 },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
 
];

  return (
    <div className='m-10'>
      <button className='m-2 bg-blue-500 text-md font-semibold text-white py-2 px-6'>Add Product</button>
  <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={product}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
       
      />
    </Box>
    </div>
  )
}

export default Product
