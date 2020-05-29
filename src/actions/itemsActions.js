export const createProduct=(product,uid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>
    {
        
           const firestore=getFirestore();
          firestore.collection(product.type).add({
              title: product.title,
              
            })
            .then((resp)=>{
              console.log(resp.id)
              const firebase=getFirebase();
              const root=firebase.storage().ref();
              var ref=root.child(resp.id)
              var uploadTask = ref.put(product.file);

              uploadTask.on('state_changed', function(snapshot){
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                  case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                  default:
                    break;
                }
              }, function(error) {
                dispatch({type:"Product_Error",error})
              }, function() {
                
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                  console.log('File available at', downloadURL);
                  const firestore=getFirestore();
                 
                  firestore.collection(product.type).doc(resp.id).set({
                    title: product.title,
                    Brand: product.Brand,
                    description:product.description,
                     price:product.price,
                    link:downloadURL
                  })

                });
              });   
            })
          .then(()=>dispatch({type:"Product_Added"}))
           .catch((err)=> dispatch({type:"Product_Error",err}))   
    }
}


export const downloadImage=(id)=>{
  return (dispatch,{getFirebase})=>{
    const firebase=getFirebase();
    var root=firebase.storage().ref();
    var ref=root.chile(id);
    ref.getDownloadURL().then(function(url) {
      // Insert url into an <img> tag to "download"
    })
    
    
  }
}