export interface Product {
	id: string
	productName: string
	tags: string[],
	category: Category,
	manufacturerUrl: string,
	description: string[]
	option1?: string | null,
	option2?: string | null,
}

export enum Category {
	SoftwareDevelopment = "Software Development",
	DailyBusiness = "Daily Business",
	GraphicEditors = "Graphic Editors",
	Developer = "Developer",
	DataAnalytics = "Data Analytics",
	ManagementTools = "Management Tools"
}