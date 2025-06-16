import { registerEnumType } from '@nestjs/graphql';

export enum PropertyTransmission {
	AVTOMATIC = 'AVTOMATIC',
	MANUAL = 'MANUAL',
}
registerEnumType(PropertyTransmission, {
	name: 'PropertyTransmission',
});

export enum PropertyFuel {
	PETROL = 'PETROL',
	LPG = 'LPG',
	HYBRID = 'HYBRID',
	ELECTRIC = 'ELECTRIC'
}
registerEnumType(PropertyFuel, {
	name: 'PropertyFuel',
});

export enum PropertyColor {
	WHITE = 'WHITE',
	BLACK = 'BLACK',
	SILVER = 'SILVER',
	RED = 'RED',
	GREEN = 'GREEN',
	GOLD = 'GOLD',
	YELLOW = 'YELLOW',
	ORANGE = 'ORANGE',
	BROWN = 'BROWN',
	BLUE = 'BLUE',
	GRAY = 'GRAY'
}
registerEnumType(PropertyColor, {
	name: 'PropertyColor',
});
export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyBrand {
	KIA = 'KIA',
	GENESIS = 'GENESIS',
	BMW = 'BMW',
	TESLA = 'TESLA',
	FERRARI = 'FERRARI',
	JAGUAR = 'JAGUAR',
	ROLLS_ROYCE = 'ROLLS_ROYCE',
	VOLVO = 'VOLVO',
	AUDI = 'AUDI',
	MERCEDES = 'MERCEDES',
}
registerEnumType(PropertyBrand, {
	name: 'PropertyBrand',
});
