import React, { Component } from 'react'
import { connect } from 'react-redux'
import {TextField, Button} from '@material-ui/core'
import {createProduct} from '../actions/itemsActions'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Redirect } from 'react-router-dom';

class Create extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             Brand:"",
             description:"",
             price:"",
             type:"laptops",
             file:"",
             link:"",
             validationError: ""
        }
    }

    fileHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.files[0]
        })
    }
   

    render() {
        // Sentinel Security Guard: Redirect unauthenticated users to signin endpoint
        if (!this.props.uid) {
            return <Redirect to="/Eshopify/signin"></Redirect>
        }

        console.log(this.props.isProductError)
        let error=<div></div>
        if(this.props.isProductError) {
            error=<div style={{color:'red', marginTop:10}}>Error Creating Product ! Please Try Later </div>
        } else if(this.state.validationError) {
            error=<div style={{color:'red', marginTop:10}}>{this.state.validationError}</div>
        }

        this.changeHandler= (e)=>{
            this.setState({
                [e.target.name] : e.target.value
            })
        }

        this.submitHandler= (e)=>{
            e.preventDefault()
            
            // Sentinel Security Verification: Enforce input validation and limit data size
            const { title, Brand, description, price } = this.state;
            const parsedPrice = parseFloat(price);

            if (!title || title.trim().length === 0 || title.length > 100) {
                this.setState({ validationError: "Product name must be between 1 and 100 characters." });
                return;
            }
            if (!Brand || Brand.trim().length === 0 || Brand.length > 100) {
                this.setState({ validationError: "Brand must be between 1 and 100 characters." });
                return;
            }
            if (!description || description.trim().length === 0 || description.length > 1000) {
                this.setState({ validationError: "Description must be between 1 and 1000 characters." });
                return;
            }
            if (isNaN(parsedPrice) || parsedPrice <= 0) {
                this.setState({ validationError: "Price must be a valid positive number." });
                return;
            }

            this.setState({ validationError: "" });
            this.props.createProduct(this.state, this.props.uid);
        }
        
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                {error}
                <h3>Add Your Product to sell on Eshopify</h3>
                <form  onSubmit={this.submitHandler }  style={{margin:20,padding:60,maxWidth:450,border: "1px solid black"}}>
                <TextField name="title" fullWidth onChange={this.changeHandler} label="Product Name" variant="outlined" required/>
                <TextField name="Brand" style={{marginTop:30}} fullWidth onChange={this.changeHandler}  label="Brand" variant="outlined" required />
                <TextField name="description" style={{marginTop:30}} fullWidth onChange={this.changeHandler}  label="Description" variant="outlined"required />
                <TextField name="price" style={{marginTop:30}} fullWidth onChange={this.changeHandler}  label="Price" type="number" inputProps={{ min: "0.01", step: "0.01" }} variant="outlined" required />
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
    createProduct: (product, uid)=>dispatch(createProduct(product, uid))
})

export default connect(mapStateToProps,mapDispatchToProps)(Create)
