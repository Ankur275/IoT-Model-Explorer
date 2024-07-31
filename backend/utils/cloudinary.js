import {v2 as cloudinary} from "cloudinary"
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if (!localFilePath){
            console.log("Couldn't find file path");
            return null
        }
        //upload the file on cloudinay
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"})
            console.log(result);
            console.log("file is uploaded on cloudinary",result.url)
            fs.unlinkSync(localFilePath)
            return result
    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the locally saved file 
        return null
    }
}

export {uploadOnCloudinary}