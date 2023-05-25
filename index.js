const express = require("express");
const app = express();
const { Customers, Transactions } = require("./models/index");
const PORT = 3001;

// GET ALL Customers
app.get("/get_all_customers", async (req, res) => {
    const customers = await Customers.findAll();
    res.send(customers);
  });

  app.get("/get_all_transactions", async (req, res) => {
    const transactions = await Transactions.findAll();
    res.send(transactions);
  });

  app.get("/get_customer/:id", async (req, res) => {
    const { id } = req.params;
    const customer = await Customers.findAll({
      where: {
        id: id,
      },
    });
    res.send(customer);
  });  

  app.delete("/delete_customer/:id", async (req, res) => {
    const { id } = req.params;
    const deleteCustomer = await Customers.destroy({
      where: {
        id: id,
      },
    });
    res.send("UserDeleted");
  });


  // Find all customers with letter J in first name
  app.get("/get_all_customers_with_j", async (req, res) => {
	const customers = await Customers.findAll({
        where: {
            name: {
                [Op.startsWith]: 'J'
            }
        }
    });
	res.send(customers);
});


//Your task is to write a Sequelize query that retrieves all posts along 
//with the name and email of the user who created each post. 
//The query should return an array of objects, 
//where each object represents a post and contains the post’s title, 
//content, and the name and email of the corresponding user.

app.get("/get_all_users_post", async (req, res) => {
  const post = await Posts.findAll();
  res.send(customers);
});

  app.get("")
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
