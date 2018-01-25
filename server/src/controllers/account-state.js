import httpStatus from 'http-status';

import { APIError } from '../helpers/errors';
import AccountState from '../models/account-state';

const INTERVAL = 3.5;

const AccountStateController = {
  /**
   * @swagger
   * /delta-pnl:
   *   get:
   *     tags:
   *      - AccountState
   *     description: Show all users
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: name
   *         description: account name.
   *         in: query
   *         required: true
   *         type: string
   *       - name: delta
   *         description: delta in minutes.
   *         in: query
   *         required: true
   *         type: number
   *     responses:
   *       200:
   *         description: return an array of account pnl status'
   */

  async deltaPnL(req, res) {
    const { name, delta } = req.query;
    const sort = { createdAt: 1 };
    const limit = Math.ceil((delta * 60) / INTERVAL);
    const pnl = await AccountState.find({ name })
                                    .select({ pnl: 1 })
                                    .limit(limit)
                                    .sort(sort);
    const { pnlData, total } = pnl.reduce((acum, act) => ({
      pnlData: [...acum.pnlData, act.pnl],
      total: acum.total + act.pnl,
    }), {
      pnlData: [],
      total: 0,
    });

    res.json({
      pnlData,
      total,
      avg: total / pnlData.length,
    });
  },

};

export default AccountStateController;


/*
.aggregate([
  {
    $project: {
      pnlAvg: { $avg: "$pnl" },
    },
  },
]);
 */
