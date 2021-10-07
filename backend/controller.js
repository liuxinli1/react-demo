//require('./schema')
const Data = require('./schema')

create = (req, res)=>{
    const body = req.body;
    const data = new Data(body);
    data.save().then(()=>{
        return res.status(201).json({
            success: true,
            text: data.text,
            id: data._id,
            message: "data create success"
        })
    })
    .catch(error=>{
        return res.status(400).json({
            error,
            message: "data create failed"
        })
    })
}

// getByID = async (req, res)=>{
//     await Data.findOne({_id: req.params.id}, (err, data) => {
//         if(err){
//             return res.status(400).json({
//                 success: false,
//                 error: err
//             })
//         }
//         return res.status(201).json({
//             success: true,
//             data: data
//         })
//     }).catch(err=>console.log(err))
// }

getByID = async (req, res)=>{
    await Data.findOne({_id: req.params.id})
    .then((data) => {
        return res.status(201).json({
            success: true,
            data: data
        })
        
    })
    .catch(err=>{
        return res.status(400).json({
            success: false,
            error: err
        })
    })
}

getData = async (req, res)=>{
    await Data.find({})
    .then((datas) =>{
        if(!datas.length){
            return res.status(404).json({
                success: false,
                error: "Not Found"
            })
        }
        return res.status(201).json({
            success: true,
            data: datas
        })
    })
    .catch(err=>{
        return res.status(400).json({
            success: false,
            error: err
        })
    })
}

updateData = async (req, res) => {
    const body = req.body

    Data.findOne({_id: req.params.id})
    .then((data) =>{
        data.text = body.text
        data.save()
            .then(()=>{
                return res.status(200).json({
                    success: true,
                    id: data._id,
                    message: "Data Updated"
                })
            })
            .catch(error=>{
                return res.status(404).json({
                    error,
                    message: "Update Failed While Saving"
                })
            })
    })
    .catch(error=>{
        return res.status(404).json({
            error,
            message: "Update Failed, Item not Found"
        })
    })
}

deleteData = async (req, res)=>{
    const body = req.body;

    Data.deleteOne({_id: req.params.id})
    .then((data)=>{
        return res.status(200).json({
            success: true,
            id: data._id,
            message: "Data Deleted"
        })
    })
    .catch(error=>{
        return res.status(404).json({
            error,
            message: "Delete Failed"
        })
    })
}

module.exports = {
    create: function(req, res){
        console.log("Create")
        this.create(req, res)
    },
    getByID: function(req, res){
        console.log("getByID")
        this.getByID(req, res)
    },
    getData: function(req, res){
        console.log("getData")
        this.getData(req, res)
    },
    updateData: function(req, res){
        console.log("updateData")
        this.updateData(req, res)
    },
    deleteData: function(req, res){
        console.log("deleteData")
        this.deleteData(req, res)
    }
}