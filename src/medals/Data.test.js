// eslint-disable-next-line no-unused-vars
import React from 'react';

// Component to test...
import Data from './Data';

describe('Data', () => {

  it('should return sorted awards', () => {
    expect(Data.sort([
        {"code": "USA", "gold":8, "silver":7, "bronze":3, "total":18},
        {"code": "CAN", "gold":10,"silver":10, "bronze":2, "total":22}
      ], 'gold'))
      .toEqual([
        {"code": "CAN", "gold":10,"silver":10, "bronze":2, "total":22},
        {"code": "USA", "gold":8, "silver":7, "bronze":3, "total":18}
      ]);
  });

  it('should total awards', () => {
    expect(Data.totals([
      {"code": "USA", "gold":8, "silver":7, "bronze":3},
      {"code": "CAN", "gold":10,"silver":10, "bronze":2}
    ]))
  .toEqual([
      {"code": "USA", "gold":8,"silver":7, "bronze":3, "total":18},
      {"code": "CAN", "gold":10, "silver":10, "bronze":2, "total":22}
    ])
  });

});
