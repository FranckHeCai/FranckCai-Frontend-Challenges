import { useFormContext } from "../context/FormContext.jsx"
import "./Form.css"
import uploadIcon from "../assets/images/icon-upload.svg"
import infoIcon from "../assets/images/icon-info.svg"
import { useState } from "react"

export const FormComponent = () =>{
    
    const {handleForm} = useFormContext()
    const [dragActive, setDragActive] = useState(false)
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault()
        handleForm(event.target)
      }

      const handleDrag = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.type === "dragenter" || event.type === "dragover") {
          setDragActive(true);
        } else if (event.type === "dragleave") {
          setDragActive(false);
        }
      };
    
      const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
          const fileInput = document.getElementById("file-input");
          fileInput.files = event.dataTransfer.files;
          setPreview(URL.createObjectURL(fileInput.files[0]));
      };
    }

      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        setPreview(URL.createObjectURL(file));
      };
    
      const handleRemoveFile = () => {
        setFile(null);
        setPreview(null);
        document.getElementById("file-input").value = "";
      };
  
    return(
      <form onSubmit={onSubmit} className="ticket-form">
          <label htmlFor="file-input">Upload Avatar</label>
          <label 
            htmlFor="file-input" 
            className={`input-area ${dragActive? "drag-active:" : ""}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >     
          
          <input
          hidden
          required
          id="file-input"
          type="file"
          accept="image/*"
          name="file-input"
          onChange={handleFileChange}
          />
          {preview ? (
            <div className="preview">
              <img src={preview} alt="Preview" className="preview-image" />
              <button type="button" onClick={handleRemoveFile}>
                Remove
              </button>
            </div>
          ) : (
            <>
              <img className="input-icon" src={uploadIcon} alt="Upload Icon" />
              <p>Drag and drop or click to upload</p>
            </>
          )}      
                
          </label>
          <div className="info">
            <img src={infoIcon} alt={infoIcon} />
            <p>Upload your photo (JPG or PNG, max size 500KB).</p>
          </div>
          <label htmlFor="full-name">Full Name</label>
          <input id="full-name" type="text" name="full-name" required />
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required placeholder="example@email.com" />
          <label htmlFor="github-user">Github Username</label>
          <input id="github-user" name="github-user" type="text" required placeholder="@yourusername" />
          <button type="submit">Generate My Ticket</button>
        </form>

    )
  }