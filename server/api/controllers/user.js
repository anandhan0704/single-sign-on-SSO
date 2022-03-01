const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const config = require("../const/const");
const User = require("../models/user");

exports.user_signup = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        console.log(req.body.email)
        return res.status(200).json({   
        message: config.MAIL_EXIST
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
              message: "registrtation password failed"
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                res.status(201).json({
                  message: config.USER_CREATED,
                  createdUser: {
                    name: result.name,
                    email: result.email,
                    _id: result._id
                  },
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                  message: "registrtation  failed"
                });
              });
          }
        });
      }
    });
};

exports.user_login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      console.log("1")
      if (user.length < 1) {
        console.log("2")
        return res.status(404).json({
          message: 'Email Not Found',
          
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
             return res.status(404).json({
            message: config.AUTHENTICATION_FAILED,
          });
        }
        
        if (result) {
          return res.status(200).json({
            message: config.AUTHENTICATION_SUCCESSFUL,
            user: user,
          });
        }
       
         return res.status(401).json({
          message: config.AUTHENTICATION_FAILED,
        });
      });
    })
    .catch((err) => {
     
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};


