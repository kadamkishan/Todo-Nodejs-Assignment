const Todo=require('../models/Todo');

exports.getTodo=async(req,res)=>{
    try{       
        const todos=await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo data is fetched",
        })
        
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}


exports.getTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with given Id",
            })
        }

        //data found for id
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data sucessfully fetched`,  
        })

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo data is fetched",
        })
        
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}