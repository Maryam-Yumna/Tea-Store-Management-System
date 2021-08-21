const Expense = require('../models/Expense.model');

const addNewExpense = async(req, res)=>{
    if(req.body){
        const expense = new Expense(req.body);
        await expense.save()
        .then((data) => {
            res.status(200).send(data)
        }).catch((err) => {
            res.status(500).send({error: err.message})
        });
    }
}

const getAllExpenses = async(req, res)=>{
    
    await Expense.find()
    .then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(500).send({error: err.message})
    });
    
}

const getExpenseByID = async(req, res)=>{
    const id = req.params.id;
    await Expense.findById(id)
    .then((expense)=>{
        res.status(200).send(expense)
    }).catch((err)=>{
        res.status(500).send({status: "Error with get expense", error:err.message});
    })
}

const updateExpense = async(req, res)=>{

    const update = {type: req.body.type, 
                    amount: req.body.amount, 
                    description: req.body.description,
                    paymentDate: req.body.paymentDate
                    };

    Expense.findOneAndUpdate({_id: req.body.id}, update,{new: true})
    .then((expense)=>{
        res.json({message:"expense details updated", expense: expense});
    })
    .catch((err)=>{
        console.error(err);
    })
   
}

module.exports = {
    addNewExpense,
    getAllExpenses,
    getExpenseByID,
    updateExpense,
};