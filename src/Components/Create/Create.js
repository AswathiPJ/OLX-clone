import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';
import { getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc ,setDoc,addDoc,collection,getDocs} from "firebase/firestore";

const Create = () => {
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()

  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)

  const date=new Date()
  const handleSubmit=()=>{
    

    const storage = getStorage();
    const storageRef = ref(storage,`/image/${image.name}`);
    
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef,image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log(snapshot)
      getDownloadURL(ref(storage,`/image/${image.name}`)).then((url)=>{
        console.log(url)
        addDoc(collection(firebase, "Products"), { 
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()

        }); 
      }).then(()=>{
        navigate("/")
    
      })
      })
    ;
  }
  

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number"  value={price}
              onChange={(e)=>setPrice(e.target.value)} id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
          
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
              
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
