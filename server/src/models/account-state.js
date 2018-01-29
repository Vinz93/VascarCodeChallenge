import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * @swagger
 * definition:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       pnl:
 *         type: string
 *       volume:
 *         type: string
 *       position:
 *         type: string
 */

const AccountStateSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pnl: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

export default mongoose.model('AccountState', AccountStateSchema);
