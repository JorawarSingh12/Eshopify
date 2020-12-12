import React, { Component } from 'react'
import { connect } from 'react-redux'
import {TextField, Button} from '@material-ui/core'
import {createProduct} from '../actions/itemsActions'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class Create extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             Brand:"",
             description:"",
             price:"",
             type:"electronics",
             file:"",
             link:""
        }
    }

    fileHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.files[0]
        })
    }
   

    render() {
        console.log(this.props.isProductError)
        let error=<div></div>
        if(this.props.isProductError)
            error=<div>Error Creating Product ! Please Try Later </div>            
        this.changeHandler= (e)=>{
            this.setState({
                [e.target.name] : e.target.value
            })
            
        }
        this.submitHandler= (e)=>{
            e.preventDefault()
            console.log(this.state)
           this.props.createProduct(this.state,this.props.uid)
            
        }
        
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                {error}
                <h3>Add Your Product to sell on Eshopify</h3>
                <form  onSubmit={this.submitHandler }  style={{margin:20,padding:60,maxWidth:450,border: "1px solid black"}}>
                <TextField name="title" fullWidth onChange={this.changeHandler} label="Product Name" variant="outlined" required/>
                <TextField name="Brand" style={{marginTop:30}} fullWidth onChange={this.changeHandler}  label="Brand" variant="outlined" required />
                <TextField name="description" style={{marginTop:30}} fullWidth onChange={this.changeHandler}  label="Description" variant="outlined"required />
                <TextField name="price" style={{marginTop:30}} fullWidth onChange={this.changeHandler}  label="Price" variant="outlined" required /> 
                <Select
            labelId="Type"
            id="demo-simple-select"
            value={this.state.type}
            name="type"
            onChange={this.changeHandler}
            fullWidth
            style={{marginTop:30}}
            required
        >
          <MenuItem value={"laptops"}>Laptops</MenuItem>
          <MenuItem value={"mobiles"}>Mobiles</MenuItem>
          <MenuItem value={"accessories"}>Accessories</MenuItem>
        </Select> 
        <TextField
            required
               style={{marginTop:30}}
              name="file" label="Image"
             type="file" id="image" 
             onChange={this.fileHandler}
           />
 
                <Button style={{marginTop:30,padding:10}} fullWidth type="submit" variant="contained" color="primary" >Submit</Button>
                </form>        
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return({
    uid:state.firebase.auth.uid,
    isProductError:state.user.isProductError
 })

   
}

const mapDispatchToProps = (dispatch)=>({
    createProduct: (product)=>dispatch(createProduct(product))
})

export default connect(mapStateToProps,mapDispatchToProps)(Create)
