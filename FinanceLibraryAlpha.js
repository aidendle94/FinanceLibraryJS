//Open source library for Financial Calculations
//Simple Interest
function interest_rate(Principal, rate, year) {
	var interest_function = year * (Principal * (1 + rate));
	return interest_function;
}
//compound_interest
function compound_interest(Principal, rate, time, period) {
	var part1 = 1 + rate / period;
	var timeperiod = time * period;
	var part2 = Math.pow(part1, timeperiod);
	var part3 = Principal * part2;
	return part3;
}
//Present Value equation
//FV is future Value
function present_value(FV, periods, rate) {
	var equation_part1 = 1 + rate;
	var equation_part2 = Math.pow(equation_part1, periods);
	var equation_part3 = FV / equation_part2;
	return equation_part3;
}
//Future Value equation
//Cash0 is Cash flow at array[0]
//Ror is rate of return
function future_value(Cash0, ror, periods) {
	var equation_part1 = 1 + rate;
	var equation_part2 = Math.pow(equation_part1, periods);
	var equation_part3 = equation_part2 * Cash0;
	return equation_part3;
}
//The following functions are mostly related to accounting
//The main series for this section is ratios and returns on x.
//Delta of PPE
//PPE is property plant & equipment
function PPE_Delta(PPE_init, PPE_final) {
	var PPE_Delta = PPE_final - PPE_init;
	return PPE_Delta;
}
//Capital expenditure equation
function capex(PPE_Delta, Depreciation) {
	var capex = PPE_Delta + Depreciation;
	return capex;
}
//ROA is return on assets
function ROA(Net_Income, TotalAsset) {
	var equation = Net_Income / TotalAsset;
	return equation;
}
//ROE is return on equity
function ROE(Net_Income, TotalCommonEquity) {
	var equation = Net_Income / TotalCommonEquity;
	return equation;
}
//PE is Price-Earning Ratio
//EPS is Earnings per share
function PE(Price, EPS) {
	var equation = Price / EPS;
	return equation;
}
//Market-Book Value Ratio
//BookValuePS is book value per share
function MBV(MarketPrice, BookValuePS) {
	return equation;
	var equation = MarketPrice / BookValuePS;
}
//Fixed Asset Turnover Ratio
function FAturnover(Sales, Net_Fixed_Asset) {
	var equation = Sales / Net_Fixed_Asset;
	return equation;
}
//The following equations are related to EBIT
//EBIT is "Earnings before interest and taxes"
//The following object is a basic income Income_statement
var Income_statement = {
	Cash: 0,
	AR: 0,
	Inventories: 0,
	Total_CA: 0,
	Gross_FA: 0,
	Depreciation: 0,
	Net_FA: 0,
	Total_Asset: 0,
	Accounts_Payable: 0,
	Accruals: 0,
	Notes_Accounts_Payable: 0,
	Total_CL: 0,
	Long_Term_Debt: 0,
	Common_Stock: 0,
	Retained_Earning: 0,
	TotalEQT: 0,
	Total_LE: 0,
};
//The following function is for manipulating the income statement object
function pobject_Income_Statement(
	CashValue,
	ARValue,
	InventoriesValue,
	TotalCAValue,
	GrossFAValue,
	DepreciationValue,
	Net_FAValue,
	Total_AssetValue,
	Accounts_PayableValue,
	AccrualsValue,
	Notes_Accounts_PayableValue,
	TotalCLValue,
	Long_Term_DebtValue,
	Common_StockValue,
	Retained_EarningValue,
	TotalEQTValue,
	Total_LEValue
) {
	Income_statement.Cash = CashValue;
	Income_statement.Inventories = InventoriesValue;
	Income_statement.AR = ARValue;
	Income_statement.Total_CA = TotalCAValue;
	Income_statement.Gross_FA = GrossFAValue;
	Income_statement.Total_Asset=Total_AssetValue;
  Income_statement.Accounts_Payable=Accounts_PayableValue;
  Income_statement.Accruals=AccrualsValue;
  Income_statement.Notes_Accounts_Payable=Notes_Accounts_PayableValue;
  Income_statement.Total_CL=TotalCAValue;
  Income_statement.Long_Term_Debt=Long_Term_DebtValue;
  Income_statement.Common_Stock=Common_StockValue;
  Income_statement.Retained_Earning=Retained_EarningValue;
  Income_statement.TotalEQT=TotalEQTValue;
  Total_LE=Total_LEValue;
	return Income_statement;
}
//
