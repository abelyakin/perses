 if (*#panel.type | null) == "piechart" {
	kind: "PieChart"
	spec: {

		calculation: *#mapping.calc[#panel.options.reduceOptions.calcs[0]] | #defaultCalc // only consider [0] here as Perses's PieChart doesn't support individual calcs

		#unit: *#mapping.unit[#panel.fieldConfig.defaults.unit] | "decimal"
		{
			format: unit: #unit
		}

		#decimal: *#panel.fieldConfig.defaults.decimals | null
		if #decimal != null {
			format: decimalPlaces: #decimal
		}

		#showLegend: *#panel.options.legend.showLegend | true
		if #showLegend {
			legend: {
				position: *(#panel.options.legend.placement & "right") | "bottom"
				mode:     *(#panel.options.legend.displayMode & "table") | "list"
			}
		}
		radius: 50
	}
}
