import React from 'react';
import a from "../components/Images/upload.png";
import { useState, useRef } from 'react';

export default function SellerRight() {

    const [file, setFile] = useState(a)
    const fileuploadRef = useRef();

    const handleImageUpload = (event) => {
        event.preventDefault();
        fileuploadRef.current.click();
    }

    const uploadImageDisplay = () => {
        const uploadedFile = fileuploadRef.current.files[0];
        const cachedURL = URL.createObjectURL(uploadedFile);
        setFile(cachedURL);
    }


    return (

        <div className='container'>

            <div className='my-5'>

                <div className="">
                  <label htmlFor='productImage' className='block mr-2 w-32'>Product Image:</label>

                    <div className='border w-full h-64'>
                        <div className='w-36 h-36 mx-auto pt-5'>

                            <button type='submit'
                                onClick={handleImageUpload}
                            >
                                <img src={file} className='w-full h-full object-cover' />
                            </button>
                            {/* upload image     */}

                            <form>

                                <input type='file' name='file'
                                    ref={fileuploadRef}
                                    onChange={uploadImageDisplay}
                                    hidden
                                />

                                <div className='text-center mt-6'>
                                    <a href=""
                                        className=''
                                    >Upload</a>
                                </div>
                                {/* <button className="btn btn-primary text-xs ml-3 p-3 m-2">Upload</button> */}
                            </form>

                        </div>


                    </div>
                </div>
            </div>

            <div className='my-5'>
                <div className="flex items-center">
                    <label htmlFor='productName' className='block mr-2 w-32'>Product Name:</label>
                    <input type='text' id='productName' className='border p-2 flex-grow' />
                </div>
            </div>

            <div className='my-5'>
                <div className="flex items-center">
                    <label htmlFor='category' className='block mr-2 w-32'>Category:</label>
                    <input type='text' id='category' className='border p-2 flex-grow' />
                </div>
            </div>

            <div className='my-5'>
                <div className="flex items-center">
                    <label htmlFor='description' className='block mr-2 w-32'>Description:</label>
                    <input type='text' id='description' className='border p-2 flex-grow' />
                </div>
            </div>

            <div className='my-5'>
                <div className="flex items-center">
                    <label htmlFor='price' className='block mr-2 w-32'>Price:</label>
                    <input type='text' id='price' className='border p-2 flex-grow' />
                </div>
            </div>

            <div className='my-5'>
                <div className="flex items-center">
                    <label htmlFor='stock' className='block mr-2 w-32'>Stock:</label>
                    <input type='text' id='stock' className='border p-2 flex-grow' />
                </div>
            </div>



            <div className='flex justify-end 
            '>
                <button className="btn btn-primary text-sm mr-6">Cancel</button>

                <button className="btn btn-primary text-sm ">Add</button>


            </div>



        </div>



    )
}
