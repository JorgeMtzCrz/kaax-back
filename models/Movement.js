const { Schema, model } = require('mongoose');

const movementSchema = new Schema(
  {
    amount: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    destinationId: {
        type: Schema.Types.ObjectId,
        ref: 'Addressee'
    },
    comments: String,
    referenceId: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('Movement', movementSchema);
