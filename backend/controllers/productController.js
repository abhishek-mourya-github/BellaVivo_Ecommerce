import Product from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";

// add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1[0];
    const image2 = req.files.image2[0];
    const image3 = req.files.image3[0];
    const image4 = req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
         resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      sizes: JSON.parse(sizes),
      price: Number(price),
      subCategory,
      bestSeller: bestSeller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now()
    };

    const product = new Product(productData);
    await product.save();

    res.status(200).json({
      success : true,
      message : "Product added successfully"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// list products
const listProduct = async (req, res) => {
  try {
    
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      products
    })

  } catch (error) {
    res.status(500).json({
      success : false,
      message: error.message
    })
  }
};

// remove product
const removeProduct = async (req, res) => {
  try {
    
    await Product.findByIdAndDelete(req.body.id);
    res.status(200).json({
      success: true,
      message: "Product removed successfully"
    })

  } catch (error) {
     res.status(500).json({
      success : false,
      message: error.message
    })
  }
};

// single product info
const singeleProduct = async (req, res) => {
  try {
    
    const {productId} = req.body;
    const product = await Product.findById(productId);
    if(!product){
      return res.status(404).json({
        success : false,
        message : "Product not found at this ID"
      })
    }

    res.status(201).json({
      success : true,
      message : "Product fetched",
      product
    })

  } catch (error) {
     res.status(500).json({
      success : false,
      message: error.message
    })
  }
};

export { addProduct, listProduct, removeProduct, singeleProduct };
