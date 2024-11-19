const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the Ecommerce controller" });
});

const authRouter = require("./routes/auth.routes.js");

app.use("/auth", authRouter);

const userRouter = require("./routes/user.routes.js");

app.use("/api/users", userRouter);

const productRouter = require("./routes/product.routes.js");

app.use("/api/products", productRouter);

const adminOrderRouter = require("./routes/admin.routes.js");

app.use("/api/admin/orders", adminOrderRouter);

const adminProductRouter = require("./routes/adminProduct.routes.js");

app.use("/api/admin/products", adminProductRouter);

const cartRouter = require("./routes/cart.routes.js");

app.use("/api/cart", cartRouter);

const orderRouter = require("./routes/order.routes.js");

app.use("/api/orders", orderRouter);

const cartItemRouter = require("./routes/carItem.routes.js");

app.use("/api/cart_items", cartItemRouter);

const ratingRouter = require("./routes/rating.routes.js");

app.use("/api/ratings", ratingRouter);

const reviewRouter = require("./routes/review.routes.js");

app.use("/api/reviews", reviewRouter);


const paymentRouter = require("./routes/payment.routes.js");

app.use("/api/payments", paymentRouter);


module.exports = app;
