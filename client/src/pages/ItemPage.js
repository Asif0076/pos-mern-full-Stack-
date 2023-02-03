import React,{useEffect,useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {DeleteOutlined,EditOutlined} from '@ant-design/icons'
import { Table, Button, Modal, Form, Input, Select,message } from 'antd'



function ItemPage() {
  
  const dispatch = useDispatch()

const [itemsData, setItemsData] = useState([])
const [popUpModal, setPopUpModal] = useState(false)
const [editItem, setEditItem] = useState(null)


const getAllItems = async () => {
  try {
    dispatch({
      type: "SHOW_LOADING",
    })
    const {data} = await axios.get('/api/items/get-item')
    setItemsData(data)
    console.log(data);     
    dispatch({
      type:"HIDE_LOADING"
    })
  }
  catch (error) {
    dispatch({
      type:"HIDE_LOADING"
    })
    console.log(error);
  }
}
  useEffect(() => {
  
    getAllItems()
  },[])

//form submit

const handleSubmit = async (value) => {
  if(editItem === null){
    try {
      dispatch({
        type: "SHOW_LOADING",
      })
      const res = await axios.post('/api/items/add-item',value) 
      console.log(res);   
      message.success('Item Added Successfully')
      getAllItems()
      setPopUpModal(false)
      dispatch({
        type:"HIDE_LOADING"
      })
    }
    catch (error) {
      dispatch({
        type:"HIDE_LOADING"
      })
      message.error('SomeThing Went Wrong')
      console.log(error);
    }
  }else{
    try {
      dispatch({
        type: "SHOW_LOADING",
      })
      await axios.put('/api/items/edit-item',{...value,itemId:editItem._id})    
      message.success('Item Updated Successfully')
      getAllItems()
      setPopUpModal(false)
      dispatch({
        type:"HIDE_LOADING"
      })
    }
    catch (error) {
      dispatch({
        type:"HIDE_LOADING"
      })
      message.error('SomeThing Went Wrong')
      console.log(error);
    }
  }
 
}
//handle delete
const handleDelete = async (record) => {
  try {
    dispatch({
      type: "SHOW_LOADING",
    })
    await axios.post('/api/items/delete-item',{itemId:record._id}) 
    message.success('Item Deleted Successfully')
    getAllItems()
    setPopUpModal(false)
    dispatch({
      type:"HIDE_LOADING"
    })
  }
  catch (error) {
    dispatch({
      type:"HIDE_LOADING"
    })
    message.error('SomeThing Went Wrong')
    console.log(error);
  }
}

  //table data
  const columns = [
    {
        title: 'Name', 
        dataIndex: "name"
    },
    {
        title: 'Image',
        dataIndex: "image", 
        render: (image,record) => <img src={image} alt={record.name} height="60" width="60" />
    },
    {
        title: 'Price',
        dataIndex: "price"
    },
    {
        title: 'Actions',
        dataIndex: "_id",
        render:(_id,record) => 
        <div> 
          <EditOutlined 
          style={{cursor:"pointer"}}
          onClick= {() => {
            setEditItem(record)
            setPopUpModal(true)
          }}
          />
          <DeleteOutlined 
          style={{cursor:"pointer"}}
          onClick={() => {
            handleDelete(record)
          }}
          />
        </div>
         

    },
]


  return (
<>
<DefaultLayout>
    <div className='d-flex justify-content-between'>
    <h1>Item List</h1>
    <Button type='primary' onClick={() => setPopUpModal(true)}>Add Item</Button>
    </div>

  <Table columns={columns} dataSource={itemsData} bordered/>
 
 {
  popUpModal && (
    <Modal 
    title={`${editItem !== null ? "Edit Item" : "Add New Item"} `} 
    open={popUpModal} 
    onCancel={() => {
      setEditItem(null)
      setPopUpModal(false)
    }} 
    footer={false}>
        <Form 
        layout='vertical' 
        initialValues={editItem}
        onFinish={handleSubmit}
        >
          <Form.Item name="name" label= "Name">
            <Input/>
          </Form.Item>
          <Form.Item name="price" label= "Price">
            <Input/>
          </Form.Item>
          <Form.Item name="image" label= "Image URL">
            <Input/>
          </Form.Item>
          <Form.Item name='category' label='Category'>
          <Select>
            <Select.Option value="drinks">Drinks</Select.Option>
            <Select.Option value="rice">Rice</Select.Option>
            <Select.Option value="noodles">Noodles</Select.Option>
          </Select>
          </Form.Item>
          
          <div className='d-flex justify-content-end'>
              <Button type='primary' htmlType='submit'>Save</Button>
          </div>
        </Form>
  </Modal>
  )
 }

</DefaultLayout>
</>
  )
  }

export default ItemPage
