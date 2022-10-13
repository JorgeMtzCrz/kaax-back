const { Schema, model } = require('mongoose');

const addresseeSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
    },
    lastName: String,
    familyName: String,
    accountNumber: String,
    alias: String,
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('Addressee', addresseeSchema);
