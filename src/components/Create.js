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
             type:"electronics"
        }
    }
    
    render() {
        this.changeHandler= (e)=>{
            this.setState({
                [e.target.name] : e.target.value
            })
            
        }
        this.submitHandler= (e)=>{
            e.preventDefault()
            console.log(this.props)
           this.props.createProduct(this.state,this.props.uid)
            
        }
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                <h3>Add Your Product to sell on Eshopify</h3>
                <form onSubmit={this.submitHandler }  style={{margin:20,padding:60,maxWidth:450,border: "1px solid black"}}>
                <TextField name="title" fullWidth onChange={this.changeHandler} label="Product Name" variant="outlined" />
                <TextField name="Brand" style={{marginTop:30}} fullWidth onChange={this.changeHandler}  label="Brand" variant="outlined" />
                <TextField name="description" style={{marginTop:30}} fullWidth onChange={this.changeHandler}  label="Description" variant="outlined" />
                <TextField name="price" style={{marginTop:30}} fullWidth onChange={this.changeHandler}  label="Price" variant="outlined" /> 
                <Select
            labelId="Type"
            id="demo-simple-select"
            value={this.state.type}
            name="type"
            onChange={this.changeHandler}
            fullWidth
            style={{marginTop:30}}
        >
          <MenuItem value={"electronics"}>Electronics</MenuItem>
          <MenuItem value={"fashionwear"}>Fashionwear</MenuItem>
          <MenuItem value={"toys"}>Toys</MenuItem>
        </Select> 
                <Button style={{marginTop:30,padding:10}} fullWidth type="submit" variant="contained" color="primary" >Submit</Button>
                </form>        
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    uid:state.firebase.auth.uid
})

const mapDispatchToProps = (dispatch)=>({
    createProduct: (product)=>dispatch(createProduct(product))
})

export default connect(mapStateToProps,mapDispatchToProps)(Create)
