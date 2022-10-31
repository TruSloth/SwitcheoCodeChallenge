SELECT DISTINCT account_balances.address
FROM (
	SELECT address,
	SUM (
		CASE
			WHEN denom = 'usdc' THEN amount * 0.000001
			WHEN denom = 'swth' THEN amount * 0.00000005
			WHEN denom = 'tmz' THEN amount * 0.003
		END
	) AS balance_usd
	FROM balances
	GROUP BY address
) AS account_balances
INNER JOIN (
	SELECT address
	FROM trades
	WHERE block_height > 730000
) AS accounts_with_recent_trades 
ON account_balances.address = accounts_with_recent_trades.address
WHERE account_balances.balance_usd >= 500;
