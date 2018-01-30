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
   *       - name: code
   *         description: account code.
   *         in: query
   *         required: true
   *         type: number
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
    const { code, delta } = req.query;
    const sort = { createdAt: -1 };
    const limit = Math.ceil((delta * 60) / INTERVAL);
    const pnl = await AccountState.find({ id: code })
                                    .limit(limit)
                                    .sort(sort);
    const id = pnl.length > 0 ? pnl[0].id : null;
    const name = pnl.length > 0 ? pnl[0].name : null;
    console.log(`server code ${id}`);
    const { pnlData, total } = pnl.reduce((acum, act) => {
      const date = new Date(act.createdAt);
      const time = `${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}`;
      return {
        pnlData: [...acum.pnlData, { pnl: act.pnl, time }],
        total: acum.total + act.pnl,
      };
    }, {
      pnlData: [],
      total: 0,
    });

    res.json({
      id,
      name,
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
