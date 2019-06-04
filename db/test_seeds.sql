USE stock_novice_db;

/*
TRUNCATE TABLE tbl_users;
*/

INSERT INTO tbl_users
  (user_name, user_password, user_email, monthly_period, cash, created_at, updated_at)
VALUES
  ('test_user', 'test_password', 'test_email', 2, 68961, NOW(), NOW());

TRUNCATE TABLE tbl_transactions;

INSERT INTO tbl_transactions
  (user_name, monthly_period, buy_sell, ticker, ticker_period, trx_shares, trx_price, trx_value, created_at, updated_at)
VALUES
  ('test_user', 1, 'buy', 'SP500', 'SP500_1', 2, 1386, 2772, NOW(), NOW()),
  ('test_user', 1, 'sell', 'SP500', 'SP500_1', -1, 1386, -1386, NOW(), NOW()),
  ('test_user', 1, 'buy', 'DJI', 'DJI_1', 4, 12818, 51272, NOW(), NOW()),
  ('test_user', 1, 'sell', 'DJI', 'DJI_1', -2, 12818, -25636, NOW(), NOW()),
  ('test_user', 1, 'buy', 'NDAQ', 'NDAQ_1', 6, 36, 216, NOW(), NOW()),
  ('test_user', 1, 'sell', 'NDAQ', 'NDAQ_1', -3, 36, -108, NOW(), NOW()),
  ('test_user', 1, 'buy', 'JPM', 'JPM_1', 8, 48, 384, NOW(), NOW()),
  ('test_user', 1, 'sell', 'JPM', 'JPM_1', -4, 48, -192, NOW(), NOW()),
  ('test_user', 1, 'buy', 'BAC', 'BAC_1', 10, 38, 380, NOW(), NOW()),
  ('test_user', 1, 'sell', 'BAC', 'BAC_1', -5, 38, -190, NOW(), NOW()),
  ('test_user', 1, 'buy', 'WFC', 'WFC_1', 12, 30, 360, NOW(), NOW()),
  ('test_user', 1, 'sell', 'WFC', 'WFC_1', -6, 30, -180, NOW(), NOW()),
  ('test_user', 1, 'buy', 'AMZN', 'AMZN_1', 14, 78, 1092, NOW(), NOW()),
  ('test_user', 1, 'sell', 'AMZN', 'AMZN_1', -7, 78, -546, NOW(), NOW()),
  ('test_user', 1, 'buy', 'AAPL', 'AAPL_1', 16, 25, 400, NOW(), NOW()),
  ('test_user', 1, 'sell', 'AAPL', 'AAPL_1', -8, 25, -200, NOW(), NOW()),
  ('test_user', 1, 'buy', 'GOOGL', 'GOOGL_1', 18, 289, 5202, NOW(), NOW()),
  ('test_user', 1, 'sell', 'GOOGL', 'GOOGL_1', -9, 289, -2601, NOW(), NOW());

TRUNCATE TABLE tbl_positions;

INSERT INTO tbl_positions
  (user_name, monthly_period, ticker, ticker_period, pos_shares, pos_price, pos_value, created_at, updated_at)
VALUES
  ('test_user', 1, 'SP500', 'SP500_1', 1, 1386, 1386, NOW(), NOW()),
  ('test_user', 1, 'DJI', 'DJI_1', 2, 12818, 25636, NOW(), NOW()),
  ('test_user', 1, 'NDAQ', 'NDAQ_1', 3, 36, 108, NOW(), NOW()),
  ('test_user', 1, 'JPM', 'JPM_1', 4, 48, 192, NOW(), NOW()),
  ('test_user', 1, 'BAC', 'BAC_1', 5, 38, 190, NOW(), NOW()),
  ('test_user', 1, 'WFC', 'WFC_1', 6, 30, 180, NOW(), NOW()),
  ('test_user', 1, 'AMZN', 'AMZN_1', 7, 78, 546, NOW(), NOW()),
  ('test_user', 1, 'AAPL', 'AAPL_1', 8, 25, 200, NOW(), NOW()),
  ('test_user', 1, 'GOOGL', 'GOOGL_1', 9, 289, 2601, NOW(), NOW());

/*
INSERT INTO tbl_transactions
  (user_name, monthly_period, buy_sell, ticker, ticker_period, shares, price, cash, created_at, updated_at)
VALUES
  ('test_user', 1, 'buy', 'SP500', 'SP500_1', 2, 1386, 2772, NOW(), NOW()),
  ('test_user', 1, 'sell', 'SP500', 'SP500_1', -1, 1386, -1386, NOW(), NOW()),
  ('test_user', 1, 'buy', 'DJI', 'DJI_1', 4, 12818, 51272, NOW(), NOW()),
  ('test_user', 1, 'sell', 'DJI', 'DJI_1', -2, 12818, -25636, NOW(), NOW()),
  ('test_user', 1, 'buy', 'NDAQ', 'NDAQ_1', 6, 36, 216, NOW(), NOW()),
  ('test_user', 1, 'sell', 'NDAQ', 'NDAQ_1', -3, 36, -108, NOW(), NOW()),
  ('test_user', 1, 'buy', 'JPM', 'JPM_1', 8, 48, 384, NOW(), NOW()),
  ('test_user', 1, 'sell', 'JPM', 'JPM_1', -4, 48, -192, NOW(), NOW()),
  ('test_user', 1, 'buy', 'BAC', 'BAC_1', 10, 38, 380, NOW(), NOW()),
  ('test_user', 1, 'sell', 'BAC', 'BAC_1', -5, 38, -190, NOW(), NOW()),
  ('test_user', 1, 'buy', 'WFC', 'WFC_1', 12, 30, 360, NOW(), NOW()),
  ('test_user', 1, 'sell', 'WFC', 'WFC_1', -6, 30, -180, NOW(), NOW()),
  ('test_user', 1, 'buy', 'AMZN', 'AMZN_1', 14, 78, 1092, NOW(), NOW()),
  ('test_user', 1, 'sell', 'AMZN', 'AMZN_1', -7, 78, -546, NOW(), NOW()),
  ('test_user', 1, 'buy', 'AAPL', 'AAPL_1', 16, 25, 400, NOW(), NOW()),
  ('test_user', 1, 'sell', 'AAPL', 'AAPL_1', -8, 25, -200, NOW(), NOW()),
  ('test_user', 1, 'buy', 'GOOGL', 'GOOGL_1', 18, 289, 5202, NOW(), NOW()),
  ('test_user', 1, 'sell', 'GOOGL', 'GOOGL_1', -9, 289, -2601, NOW(), NOW());
*/
