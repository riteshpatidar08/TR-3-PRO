import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { fetchProduct } from './../../redux/productSlice';
import { FiEdit2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteOutline } from 'react-icons/md';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
function Product() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
  };
  const { product } = useSelector((state) => state.product);

  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      renderCell: (params) => (
        <img
          className="object-contain w-8"
          src={`http://localhost:3000/${params.value}`}
        />
      ),
    },
    { field: 'name', headerName: 'Product Name', width: 90 },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
    },
    {
      field: 'stock',
      headerName: 'Stocks',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: () => (
        <div className="flex gap-2 items-center justify-center mt-2">
          <FiEdit2 className="text-blue-500" size={26} />
          <MdDeleteOutline size={26} className="text-red-500" />
        </div>
      ),
    },
  ];

  return (
    <div className="m-10">
      <button
        onClick={handleOpen}
        className="m-2 bg-blue-500 text-md font-semibold text-white py-2 px-6"
      >
        Add Product
      </button>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <label>Name</label>
            <input {...register('name')} type="text" />
            <label>Price</label>
            <input {...register('Price')} type="text" />
            <label>Image</label>
            <input type="file" {...register('name')} />
            <button>Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Product;
